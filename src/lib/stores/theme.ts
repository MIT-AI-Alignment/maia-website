import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// ThemeInitializer restores a saved choice; new visitors start in dark mode.
export const theme = writable<'light' | 'dark'>('dark');

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
