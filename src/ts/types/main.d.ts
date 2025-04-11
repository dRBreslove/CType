declare module '../../../public/js/main' {
  /**
   * Transforms code between ClojureScript and JavaScript.
   * @param code - The source code to transform
   * @param direction - The direction of transformation ('to-js' or 'to-cljs')
   * @returns The transformed code
   * @throws {Error} If the direction is invalid
   */
  export function transform(code: string, direction: 'to-js' | 'to-cljs'): string;
} 