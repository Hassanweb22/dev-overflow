/**
 * Application-wide constants
 */

// Navigation
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/questions', label: 'Questions' },
  { href: '/tags', label: 'Tags' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
];

// Pagination
export const ITEMS_PER_PAGE = 10;
export const MAX_PAGE_DISPLAY = 5;

// Form validation
export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 20;
export const PASSWORD_MIN_LENGTH = 8;

// API routes
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  USERS: '/api/users',
  POSTS: '/api/posts',
  COMMENTS: '/api/comments',
  TAGS: '/api/tags',
};

// Timeouts
export const DEBOUNCE_DELAY = 300; // ms
export const API_TIMEOUT = 10000; // ms

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'deve-overflow-theme',
  AUTH_TOKEN: 'deve-overflow-token',
  USER: 'deve-overflow-user',
};

// Theme
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
}; 