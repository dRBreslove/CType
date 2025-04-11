# CType: ClojureScript to JavaScript Transformer and JavaScript to ClojureScript Reformer

A powerful bidirectional code transformation tool that enables seamless conversion between ClojureScript and JavaScript. CType provides robust transformation capabilities, allowing you to convert ClojureScript code to JavaScript and reform JavaScript back into ClojureScript, while maintaining code quality and functionality.

## Features

- Transform ClojureScript code to optimized JavaScript
- Reform JavaScript code back to ClojureScript
- Type-safe function calls between both languages
- Automatic type inference and declaration generation
- Built-in development tools and hot reloading
- Comprehensive test suite (ClojureScript, TypeScript, and NW.js)
- WebRTC camera integration support
- NW.js desktop application support
- WebSocket server for real-time communication
- Pug template engine integration
- HTTPS support with SSL certificates

## Installation

```bash
npm install ctype
```

## Usage

### Server Setup

CType includes a built-in server with WebSocket support:

```bash
# Start the server
npm run start:server

# Start both server and development environment
npm run start:all
```

The server runs on port 8080 by default and includes:
- WebSocket support for real-time communication
- Pug template rendering
- Static file serving
- HTTPS support with SSL certificates

### WebSocket Testing

```bash
# Run WebSocket tests
npm run test:websocket
```

The WebSocket server runs on port 8081 for testing purposes.

### Code Transformation

CType's primary purpose is to transform code between ClojureScript and JavaScript:

```bash
# Transform ClojureScript to JavaScript
npm run transformer:build
node dist/transformer.cjs <input-file> <output-file> js

# Reform JavaScript to ClojureScript
node dist/transformer.cjs <input-file> <output-file> cljs
```

### Basic Functions

```typescript
// TypeScript/JavaScript
import { typed_add, typed_greet } from 'ctype/core';

// Add numbers with type safety
const sum = typed_add(2, 3); // Returns 5

// Create typed greetings
const greeting = typed_greet("World"); // Returns "Hello, World!"
```

```clojure
;; ClojureScript
(ns your-app.core
  (:require [ctype.core :as core]))

;; Add numbers
(core/typed-add 2 3) ;; Returns 5

;; Create greetings
(core/typed-greet "World") ;; Returns "Hello, World!"
```

### Development

```bash
# Start development server with hot reloading
npm run dev

# Build for production
npm run build

# Run tests
npm test                # Run all tests
npm run test:watch     # Run tests in watch mode
npm run test:nw        # Run NW.js integration tests
npm run test:nw:robot  # Run NW.js robot tests
```

### Desktop Application Support

CType supports building desktop applications using NW.js:

```bash
# Start NW.js application
npm run start:nw

# Build and start with background processes
npm run start:nw:background
```

## Project Structure

```
ctype/
├── src/
│   ├── cljs/              # ClojureScript source files
│   │   └── ctype/
│   │       ├── core.cljs       # Core functionality
│   │       ├── transformer.cljs # Code transformation
│   │       ├── decompiler.cljs # Code decompilation
│   │       ├── webrtc.cljs     # WebRTC integration
│   │       └── server.cljs     # Server implementation
│   └── ts/                # TypeScript source files
│       ├── __tests__/     # TypeScript tests
│       ├── __mocks__/     # Test mocks
│       └── ctype/         # Type declarations
├── public/                # Static assets
│   └── templates/         # Pug templates
├── certificates/          # SSL certificates
├── dist/                  # Compiled output
└── test/                  # Additional tests
    ├── websocket.test.js  # WebSocket tests
    └── websocket-server.js # WebSocket test server
```

## Testing

CType uses a comprehensive testing approach:

- **TypeScript Tests**: Using Jest for testing TypeScript integrations
- **ClojureScript Tests**: Using ClojureScript's test framework
- **NW.js Tests**: Integration tests for desktop features
- **Robot Tests**: Automated UI testing using RobotJS
- **WebSocket Tests**: Real-time communication testing

### Running Tests

```bash
# Run all tests
npm test

# Run TypeScript tests in watch mode
npm run test:watch

# Run NW.js integration tests
npm run test:nw

# Run NW.js tests with RobotJS
npm run test:nw:robot

# Run WebSocket tests
npm run test:websocket
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate SSL certificates:
   ```bash
   mkdir -p certificates && openssl req -x509 -newkey rsa:4096 -keyout certificates/key.pem -out certificates/cert.pem -days 365 -nodes -subj "/CN=localhost"
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
