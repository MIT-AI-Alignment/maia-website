import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// MAIA is presented in light mode. The dark token set remains available for a
// future accessibility decision, but visitors are not switched automatically.
export const theme = writable<'light' | 'dark'>('light');

// Function to set theme
export function setTheme(newTheme: 'light' | 'dark'): void {
  if (browser) {
    theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

// Function to toggle theme
export function toggleTheme(): void {
  if (browser) {
    theme.update(currentTheme => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  }
}
