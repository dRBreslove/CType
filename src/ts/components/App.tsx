import React, { useState } from 'react';
import { transform } from '../transformer';

const App: React.FC = () => {
    const [cljsCode, setCljsCode] = useState<string>('');
    const [jsCode, setJsCode] = useState<string>('');

    const handleTransformToJs = () => {
        try {
            const result = transform(cljsCode, 'to-js');
            setJsCode(result);
        } catch (error) {
            console.error('Error transforming to JavaScript:', error);
            setJsCode('Error: Could not transform code');
        }
    };

    const handleTransformToCljs = () => {
        try {
            const result = transform(jsCode, 'to-cljs');
            setCljsCode(result);
        } catch (error) {
            console.error('Error transforming to ClojureScript:', error);
            setCljsCode('Error: Could not transform code');
        }
    };

    return (
        <div className="container">
            <h1>CType: ClojureScript to JavaScript Transformer</h1>
            <div className="editors-container">
                <div className="editor-box">
                    <div className="editor-title">ClojureScript</div>
                    <textarea
                        value={cljsCode}
                        onChange={(e) => setCljsCode(e.target.value)}
                        placeholder="Enter ClojureScript code here..."
                    />
                </div>
                <div className="editor-box">
                    <div className="editor-title">JavaScript</div>
                    <textarea
                        value={jsCode}
                        onChange={(e) => setJsCode(e.target.value)}
                        placeholder="Enter JavaScript code here..."
                    />
                </div>
            </div>
            <div className="button-container">
                <button
                    className="transform-button to-js"
                    onClick={handleTransformToJs}
                >
                    Transform to JavaScript ✨
                </button>
                <button
                    className="transform-button to-cljs"
                    onClick={handleTransformToCljs}
                >
                    Transform to ClojureScript 🎯
                </button>
            </div>
        </div>
    );
};

export default App; 