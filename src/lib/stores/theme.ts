import { get, writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

// app.html applies the initial preference before paint.
export const theme = writable<Theme>(
  browser && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
);

let manualPreference: Theme | null = null;
let preferenceInitialized = false;

function savedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

function applyTheme(newTheme: Theme): void {
  theme.set(newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
  document.documentElement.style.colorScheme = newTheme;
}

export function initializeTheme(): () => void {
  if (!browser) return () => {};

  if (!preferenceInitialized) {
    manualPreference = savedTheme();
    preferenceInitialized = true;
  }

  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const updateFromSystem = () => {
    applyTheme(manualPreference ?? (systemPreference.matches ? 'dark' : 'light'));
  };
  const updateFromStorage = (event: StorageEvent) => {
    if (event.key !== 'theme' && event.key !== null) return;
    manualPreference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    updateFromSystem();
  };

  updateFromSystem();
  systemPreference.addEventListener('change', updateFromSystem);
  window.addEventListener('storage', updateFromStorage);

  return () => {
    systemPreference.removeEventListener('change', updateFromSystem);
    window.removeEventListener('storage', updateFromStorage);
  };
}

export function setTheme(newTheme: Theme): void {
  if (!browser) return;
  manualPreference = newTheme;
  preferenceInitialized = true;
  applyTheme(newTheme);
  try {
    localStorage.setItem('theme', newTheme);
  } catch {
    // Keep the user's choice for this visit when storage is unavailable.
  }
}

export function toggleTheme(): void {
  setTheme(get(theme) === 'dark' ? 'light' : 'dark');
}
