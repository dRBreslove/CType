# CType

CType is a modern ClojureScript to JavaScript compiler that enables seamless integration between ClojureScript and JavaScript/TypeScript codebases. It provides type safety and interoperability while maintaining the expressive power of ClojureScript.

## Features

- Compile ClojureScript code to optimized JavaScript
- TypeScript type definitions for ClojureScript functions
- Seamless interop between ClojureScript and JavaScript/TypeScript
- Built-in development tools and hot reloading
- Comprehensive test suite support (ClojureScript and TypeScript)

## Installation

```bash
npm install ctype
```

## Usage

### Basic Compilation

```bash
# Compile ClojureScript to JavaScript
npm run build

# Watch mode with hot reloading
npm run dev

# Production build with optimizations
npm run release
```

### Hello World Demo

The project includes a simple Hello World example demonstrating basic ClojureScript compilation:

```bash
# Build and run the Hello World example
npm run hello
```

Example ClojureScript code:
```clojure
;; src/cljs/hello/core.cljs
(ns hello.core
  (:require [cljs.nodejs :as nodejs]))

(defn hello []
  (println "Hello from ClojureScript!"))

(defn -main []
  (hello))
```

## Development

```bash
# Install dependencies
npm install

# Start development server with hot reloading
npm run dev

# Run tests
npm run test      # ClojureScript tests
npm run test:ts   # TypeScript tests
npm run test:watch # Watch mode for tests
```

## Project Structure

```
.
├── src/
│   ├── cljs/       # ClojureScript source files
│   │   └── hello/  # Hello World example
│   └── ts/         # TypeScript type definitions and tests
├── dist/           # Compiled JavaScript output
└── release/        # Production-ready builds
```

## Configuration

- `shadow-cljs.edn` - ClojureScript compiler configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - NPM package configuration and scripts
- `karma.conf.js` - Test runner configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details
