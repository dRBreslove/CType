export function typed_add(a: number, b: number): number {
  return a + b;
}

export function typed_greet(name: string): string {
  return `Hello, ${name}!`;
}

export function init(): void {
  console.log('CType initialized');
}

export function reload(): void {
  console.log('CType reloaded');
} 