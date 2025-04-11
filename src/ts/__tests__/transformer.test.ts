import { transform } from '../../../public/js/main';

describe('Transformer', () => {
  describe('ClojureScript to JavaScript', () => {
    it('transforms function definitions', () => {
      const input = '(defn add [x y] (+ x y))';
      const expected = 'function add(x, y) { return x + y; }';
      expect(transform(input, 'to-js')).toBe(expected);
    });

    it('transforms maps to objects', () => {
      const input = '{:name "John" :age 30}';
      const expected = '{ name: "John", age: 30 }';
      expect(transform(input, 'to-js')).toBe(expected);
    });

    it('transforms string concatenation', () => {
      const input = '(str "Hello " name "!")';
      const expected = '`Hello ${name}!`';
      expect(transform(input, 'to-js')).toBe(expected);
    });

    it('transforms arithmetic expressions', () => {
      const input = '(+ x y)';
      const expected = 'x + y';
      expect(transform(input, 'to-js')).toBe(expected);
    });
  });

  describe('JavaScript to ClojureScript', () => {
    it('transforms function definitions', () => {
      const input = 'function add(x, y) { return x + y; }';
      const expected = '(defn add [x y] (+ x y))';
      expect(transform(input, 'to-cljs')).toBe(expected);
    });

    it('transforms objects to maps', () => {
      const input = '{ name: "John", age: 30 }';
      const expected = '{:name "John" :age 30}';
      expect(transform(input, 'to-cljs')).toBe(expected);
    });

    it('transforms template literals', () => {
      const input = '`Hello ${name}!`';
      const expected = '(str "Hello " name "!")';
      expect(transform(input, 'to-cljs')).toBe(expected);
    });

    it('transforms arithmetic expressions', () => {
      const input = 'x + y';
      const expected = '(+ x y)';
      expect(transform(input, 'to-cljs')).toBe(expected);
    });
  });

  it('throws error for invalid direction', () => {
    expect(() => transform('code', 'invalid')).toThrow('Invalid transformation direction');
  });
}); 