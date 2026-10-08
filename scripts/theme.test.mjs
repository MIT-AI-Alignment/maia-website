import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import { get, writable } from 'svelte/store';
import ts from 'typescript';

const themeSource = readFileSync(new URL('../src/lib/stores/theme.ts', import.meta.url), 'utf8');
const themeModule = ts.transpileModule(themeSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
const prepaintScript = readFileSync(new URL('../src/app.html', import.meta.url), 'utf8')
  .match(/<script>([\s\S]*?)<\/script>/)[1];

function browserFixture({ dark = false, saved = null, denyStorage = false } = {}) {
  const classes = new Set();
  const mediaListeners = new Set();
  const storageListeners = new Set();
  const storageWrites = [];
  const media = {
    matches: dark,
    addEventListener: (_event, listener) => mediaListeners.add(listener),
    removeEventListener: (_event, listener) => mediaListeners.delete(listener)
  };
  const root = {
    classList: {
      contains: (name) => classes.has(name),
      toggle: (name, enabled) => enabled ? classes.add(name) : classes.delete(name)
    },
    style: {}
  };
  const context = {
    document: { documentElement: root },
    localStorage: {
      getItem: () => {
        if (denyStorage) throw new Error('Storage is unavailable');
        return saved;
      },
      setItem: (key, value) => {
        if (denyStorage) throw new Error('Storage is unavailable');
        storageWrites.push([key, value]);
        saved = value;
      }
    },
    window: {
      matchMedia: () => media,
      addEventListener: (_event, listener) => storageListeners.add(listener),
      removeEventListener: (_event, listener) => storageListeners.delete(listener)
    },
    exports: {},
    require: (moduleName) => {
      if (moduleName === '$app/environment') return { browser: true };
      if (moduleName === 'svelte/store') return { get, writable };
      throw new Error(`Unexpected import: ${moduleName}`);
    }
  };
  vm.runInNewContext(prepaintScript, context);
  vm.runInNewContext(`(function () { ${themeModule} })()`, context);
  return {
    ...context.exports,
    root,
    mediaListeners,
    storageListeners,
    storageWrites,
    changeSystem: (nextDark) => {
      media.matches = nextDark;
      for (const listener of mediaListeners) listener();
    },
    changeStorage: (newValue, key = 'theme') => {
      for (const listener of storageListeners) listener({ key, newValue });
    }
  };
}

for (const dark of [false, true]) {
  test(`first paint follows the ${dark ? 'dark' : 'light'} system preference`, () => {
    const fixture = browserFixture({ dark });
    assert.equal(fixture.root.classList.contains('dark'), dark);
    assert.equal(fixture.root.style.colorScheme, dark ? 'dark' : 'light');
    assert.equal(get(fixture.theme), dark ? 'dark' : 'light');
  });
}

test('system changes update the theme until a manual selection', () => {
  const fixture = browserFixture();
  const cleanup = fixture.initializeTheme();
  fixture.changeSystem(true);
  assert.equal(get(fixture.theme), 'dark');
  fixture.changeSystem(false);
  assert.equal(get(fixture.theme), 'light');
  assert.deepEqual(fixture.storageWrites, []);

  fixture.toggleTheme();
  assert.equal(get(fixture.theme), 'dark');
  fixture.changeSystem(true);
  fixture.changeSystem(false);
  assert.equal(get(fixture.theme), 'dark');
  assert.deepEqual(fixture.storageWrites, [['theme', 'dark']]);

  cleanup();
  assert.equal(fixture.mediaListeners.size, 0);
  assert.equal(fixture.storageListeners.size, 0);
});

test('saved explicit preferences take priority before paint and after system changes', () => {
  for (const saved of ['light', 'dark']) {
    const fixture = browserFixture({ saved, dark: saved === 'light' });
    assert.equal(get(fixture.theme), saved);
    assert.equal(fixture.root.style.colorScheme, saved);
    fixture.initializeTheme();
    fixture.changeSystem(saved !== 'light');
    assert.equal(get(fixture.theme), saved);
  }
});

test('invalid saved preferences fall back to the device', () => {
  const fixture = browserFixture({ saved: 'invalid', dark: true });
  assert.equal(get(fixture.theme), 'dark');
  fixture.initializeTheme();
  fixture.changeSystem(false);
  assert.equal(get(fixture.theme), 'light');
});

test('denied storage preserves device tracking and manual choice for the visit', () => {
  const fixture = browserFixture({ dark: true, denyStorage: true });
  const cleanup = fixture.initializeTheme();
  assert.equal(get(fixture.theme), 'dark');
  fixture.changeSystem(false);
  assert.equal(get(fixture.theme), 'light');
  assert.doesNotThrow(() => fixture.setTheme('dark'));
  fixture.changeSystem(true);
  fixture.changeSystem(false);
  assert.equal(get(fixture.theme), 'dark');
  cleanup();
  fixture.initializeTheme();
  assert.equal(get(fixture.theme), 'dark');
});

test('another tab can change or clear the saved override', () => {
  const fixture = browserFixture({ dark: false });
  fixture.initializeTheme();
  fixture.changeStorage('dark');
  assert.equal(get(fixture.theme), 'dark');
  fixture.changeSystem(false);
  assert.equal(get(fixture.theme), 'dark');
  fixture.changeStorage(null);
  assert.equal(get(fixture.theme), 'light');
  fixture.changeSystem(true);
  assert.equal(get(fixture.theme), 'dark');
});
