// Regular expressions for matching ClojureScript and JavaScript constructs
const CLJS_FUNCTION_PATTERN = /\(defn\s+([^\s]+)\s+\[([^\]]*)\]\s*([^)]+)\)/g;
const CLJS_MAP_PATTERN = /{([^}]+)}/g;
const CLJS_STR_PATTERN = /\(str\s+([^)]+)\)/g;
const CLJS_ARITHMETIC_PATTERN = /\(([+\-*/])\s+([^)]+)\)/g;

const JS_FUNCTION_PATTERN = /function\s+([^\s(]+)\s*\(([^)]*)\)\s*{([^}]+)}/g;
const JS_OBJECT_PATTERN = /{([^}]+)}/g;
const JS_TEMPLATE_PATTERN = /`([^`]+)`/g;
const JS_ARITHMETIC_PATTERN = /([+\-*/])\s*\(([^)]+)\)/g;

// Transform ClojureScript function to JavaScript
function transformFunctionToJs(cljsCode: string): string {
    return cljsCode.replace(CLJS_FUNCTION_PATTERN, (_, name, params, body) => {
        const jsParams = params.split(/\s+/).filter(Boolean).join(', ');
        return `function ${name}(${jsParams}) {\n    ${body.trim()}\n}`;
    });
}

// Transform ClojureScript map to JavaScript object
function transformMapToJs(cljsCode: string): string {
    return cljsCode.replace(CLJS_MAP_PATTERN, (match, content) => {
        const pairs = content.split(/\s+/).filter(Boolean);
        const jsPairs = pairs.map((pair: string) => {
            const [key, value] = pair.split(':');
            return `${key}: ${value}`;
        });
        return `{ ${jsPairs.join(', ')} }`;
    });
}

// Transform ClojureScript string to JavaScript template literal
function transformStrToJs(cljsCode: string): string {
    return cljsCode.replace(CLJS_STR_PATTERN, (_, content) => {
        const parts = content.split(/\s+/).filter(Boolean);
        return '`' + parts.join(' ') + '`';
    });
}

// Transform ClojureScript arithmetic to JavaScript
function transformArithmeticToJs(cljsCode: string): string {
    return cljsCode.replace(CLJS_ARITHMETIC_PATTERN, (_, op, args) => {
        const jsArgs = args.split(/\s+/).filter(Boolean).join(` ${op} `);
        return `${op}(${jsArgs})`;
    });
}

// Transform JavaScript function to ClojureScript
function transformFunctionToCljs(jsCode: string): string {
    return jsCode.replace(JS_FUNCTION_PATTERN, (_, name, params, body) => {
        const cljsParams = params.split(',').map((p: string) => p.trim()).join(' ');
        return `(defn ${name} [${cljsParams}]\n    ${body.trim()})`;
    });
}

// Transform JavaScript object to ClojureScript map
function transformObjectToCljs(jsCode: string): string {
    return jsCode.replace(JS_OBJECT_PATTERN, (match, content) => {
        const pairs = content.split(',').map((p: string) => p.trim()).filter(Boolean);
        const cljsPairs = pairs.map((pair: string) => {
            const [key, value] = pair.split(':').map((p: string) => p.trim());
            return `${key} ${value}`;
        });
        return `{ ${cljsPairs.join(' ')} }`;
    });
}

// Transform JavaScript template literal to ClojureScript string
function transformTemplateToCljs(jsCode: string): string {
    return jsCode.replace(JS_TEMPLATE_PATTERN, (_, content) => {
        const parts = content.split(/\${([^}]+)}/).filter(Boolean);
        return `(str ${parts.join(' ')})`;
    });
}

// Transform JavaScript arithmetic to ClojureScript
function transformArithmeticToCljs(jsCode: string): string {
    return jsCode.replace(JS_ARITHMETIC_PATTERN, (_, op, args) => {
        const cljsArgs = args.split(/\s*,\s*/).join(' ');
        return `(${op} ${cljsArgs})`;
    });
}

// Main transformation function
export function transform(code: string, direction: 'to-js' | 'to-cljs'): string {
    if (direction === 'to-js') {
        let result = code;
        result = transformFunctionToJs(result);
        result = transformMapToJs(result);
        result = transformStrToJs(result);
        result = transformArithmeticToJs(result);
        return result;
    } else {
        let result = code;
        result = transformFunctionToCljs(result);
        result = transformObjectToCljs(result);
        result = transformTemplateToCljs(result);
        result = transformArithmeticToCljs(result);
        return result;
    }
} 