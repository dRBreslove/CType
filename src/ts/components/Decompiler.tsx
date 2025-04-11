import React, { useState, ChangeEvent } from 'react';

interface DecompilerProps {
  initialJsCode?: string;
}

interface TypeInfo {
  name: string;
  type: string;
  description: string;
}

export const Decompiler: React.FC<DecompilerProps> = ({ initialJsCode = '' }) => {
  const [jsCode, setJsCode] = useState<string>(initialJsCode);
  const [decompiledCode, setDecompiledCode] = useState<string>('');
  const [typeInfo, setTypeInfo] = useState<TypeInfo[]>([]);
  const [error, setError] = useState<string>('');

  const handleJsCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJsCode(e.target.value);
    setError('');
  };

  const handleDecompile = async () => {
    try {
      // TODO: Implement actual decompilation logic
      const mockDecompiledCode = `(defn example-function [x y]
  (+ x y))`;
      setDecompiledCode(mockDecompiledCode);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during decompilation');
    }
  };

  const handleAnalyzeTypes = async () => {
    try {
      // TODO: Implement actual type analysis logic
      const mockTypeInfo: TypeInfo[] = [
        { name: 'exampleFunction', type: 'Function', description: 'Takes two numbers and returns their sum' },
        { name: 'x', type: 'Number', description: 'First parameter' },
        { name: 'y', type: 'Number', description: 'Second parameter' }
      ];
      setTypeInfo(mockTypeInfo);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during type analysis');
    }
  };

  return (
    <div className="decompiler-container">
      <div className="code-section">
        <h3>JavaScript Code</h3>
        <textarea
          value={jsCode}
          onChange={handleJsCodeChange}
          placeholder="Enter JavaScript code to decompile..."
          className="code-input"
        />
        <div className="button-group">
          <button onClick={handleDecompile} className="action-button">
            Decompile to ClojureScript
          </button>
          <button onClick={handleAnalyzeTypes} className="action-button">
            Analyze Types
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      {decompiledCode && (
        <div className="code-section">
          <h3>Decompiled ClojureScript</h3>
          <pre className="code-output">{decompiledCode}</pre>
        </div>
      )}

      {typeInfo.length > 0 && (
        <div className="type-info-section">
          <h3>Type Information</h3>
          <table className="type-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {typeInfo.map((info, index) => (
                <tr key={index}>
                  <td>{info.name}</td>
                  <td>{info.type}</td>
                  <td>{info.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}; 