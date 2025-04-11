import React, { useState } from 'react';
import { transformToTypeScript, transformToClojureScript } from '../core/transformer';
import { TransformationOptions } from '../types';

/**
 * Props for the Transformer component
 */
interface TransformerProps {
  /**
   * Initial ClojureScript code
   */
  initialClojureScript?: string;
  
  /**
   * Initial TypeScript code
   */
  initialTypeScript?: string;
  
  /**
   * Transformation options
   */
  options?: TransformationOptions;
}

/**
 * A React component for transforming code between ClojureScript and TypeScript
 */
export const Transformer: React.FC<TransformerProps> = ({
  initialClojureScript = '',
  initialTypeScript = '',
  options = {}
}) => {
  const [clojureScript, setClojureScript] = useState(initialClojureScript);
  const [typescript, setTypeScript] = useState(initialTypeScript);
  
  /**
   * Transforms ClojureScript to TypeScript
   */
  const handleTransformToTypeScript = () => {
    const result = transformToTypeScript(clojureScript);
    setTypeScript(result);
  };
  
  /**
   * Transforms TypeScript to ClojureScript
   */
  const handleTransformToClojureScript = () => {
    const result = transformToClojureScript(typescript);
    setClojureScript(result);
  };
  
  return (
    <div className="transformer">
      <div className="transformer-section">
        <h3>ClojureScript</h3>
        <textarea
          value={clojureScript}
          onChange={(e) => setClojureScript(e.target.value)}
          placeholder="Enter ClojureScript code here..."
        />
        <button onClick={handleTransformToTypeScript}>
          Transform to TypeScript
        </button>
      </div>
      
      <div className="transformer-section">
        <h3>TypeScript</h3>
        <textarea
          value={typescript}
          onChange={(e) => setTypeScript(e.target.value)}
          placeholder="Enter TypeScript code here..."
        />
        <button onClick={handleTransformToClojureScript}>
          Transform to ClojureScript
        </button>
      </div>
    </div>
  );
}; 