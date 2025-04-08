import { typed_add, typed_greet } from 'ctype/core';

describe('TypeScript Tests', () => {
  test('typed_add function', () => {
    expect(typed_add(2, 3)).toBe(5);
    expect(typed_add(-1, 1)).toBe(0);
    expect(typed_add(5, 5)).toBe(10);
  });

  test('typed_greet function', () => {
    expect(typed_greet('World')).toBe('Hello, World!');
    expect(typed_greet('TypeScript')).toBe('Hello, TypeScript!');
    expect(typed_greet('ClojureScript')).toBe('Hello, ClojureScript!');
  });
}); 