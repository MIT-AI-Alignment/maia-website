import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a theme store
export const theme = writable(getInitialTheme());

// Function to get initial theme
function getInitialTheme(): 'light' | 'dark' {
	if (browser) {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme === 'light') {
			return 'light';
		} else if (savedTheme === 'dark' || prefersDark) {
			return 'dark';
		}
	}

	// Default to dark mode
	return 'dark';
}

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
		theme.update((currentTheme) => {
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
