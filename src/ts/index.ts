/**
 * CType - ClojureScript to TypeScript Integration Library
 * 
 * This library provides tools for integrating ClojureScript and TypeScript,
 * including code transformation, type checking, and interoperability.
 */

// Core functionality
export * from './core/transformer';
export * from './core/decompiler';

// Utility functions
export * from './utils/helpers';

// Type definitions
export * from './types/index';

// React components (if using React)
export * from './components/Transformer';
export * from './components/Decompiler';

// Initialize the library
export function init(): void {
  console.log('CType initialized');
}

// Reload the library (for development)
export function reload(): void {
  console.log('CType reloaded');
} 