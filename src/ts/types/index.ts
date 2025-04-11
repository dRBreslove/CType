/**
 * Type definitions for the CType library
 */

/**
 * Options for code transformation
 */
export interface TransformationOptions {
  /**
   * Whether to preserve comments
   */
  preserveComments?: boolean;
  
  /**
   * Whether to format the output code
   */
  formatOutput?: boolean;
  
  /**
   * Custom transformation rules
   */
  rules?: Record<string, boolean>;
}

/**
 * Result of a code transformation
 */
export interface TransformationResult {
  /**
   * The transformed code
   */
  code: string;
  
  /**
   * Any errors that occurred during transformation
   */
  errors: string[];
  
  /**
   * Any warnings that occurred during transformation
   */
  warnings: string[];
}

/**
 * Type information for a function
 */
export interface FunctionType {
  /**
   * The name of the function
   */
  name: string;
  
  /**
   * The return type of the function
   */
  returnType: string;
  
  /**
   * The parameter types of the function
   */
  parameterTypes: string[];
  
  /**
   * Whether the function is async
   */
  isAsync: boolean;
} 