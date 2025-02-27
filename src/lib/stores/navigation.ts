import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// Define the navigation item types
export interface NavItem {
  label: string;
  href: string;
  icon: string;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
}

// Create a store for page-specific navigation items
export const pageNavItems: Writable<DropdownItem[]> = writable([]);

// Function to update navigation items based on page content
export function updatePageNavItems(items: DropdownItem[]) {
  pageNavItems.set(items);
}

// Function to clear page navigation items
export function clearPageNavItems() {
  pageNavItems.set([]);
} 