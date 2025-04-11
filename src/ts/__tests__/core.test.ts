import { typed_add, typed_greet } from 'ctype/core';

describe('CType Core Functions', () => {
  describe('typed_add', () => {
    it('should add two numbers correctly', () => {
      expect(typed_add(2, 3)).toBe(5);
      expect(typed_add(-1, 1)).toBe(0);
      expect(typed_add(5, 5)).toBe(10);
    });
  });

  describe('typed_greet', () => {
    it('should create greeting messages correctly', () => {
      expect(typed_greet('World')).toBe('Hello, World!');
      expect(typed_greet('ClojureScript')).toBe('Hello, ClojureScript!');
      expect(typed_greet('TypeScript')).toBe('Hello, TypeScript!');
    });
  });
}); 