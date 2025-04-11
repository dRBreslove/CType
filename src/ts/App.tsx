import React from 'react';
import { Decompiler } from './components/Decompiler';
import './css/decompiler.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>CType: ClojureScript to JavaScript Transformer</h1>
        <p className="subtitle">and JavaScript to ClojureScript Reformer</p>
      </header>
      <main>
        <Decompiler initialJsCode="function example(x, y) {\n  return x + y;\n}" />
      </main>
    </div>
  );
};

export default App; 