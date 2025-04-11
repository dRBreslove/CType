const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const app = express();
const port = 8080;

// Compile Pug template
function compilePugTemplate(templatePath) {
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  return pug.compile(templateContent);
}

// Serve static files
function serveStaticFile(req, res) {
  const filePath = path.join('public', req.url);
  const ext = path.extname(filePath);
  
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.ttf': 'application/font-ttf',
    '.woff': 'application/font-woff',
    '.woff2': 'application/font-woff2',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
  };
  
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
    res.sendFile(filePath);
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Not Found');
  }
}

// Setup routes
function setupRoutes(app) {
  app.get('/', (req, res) => {
    try {
      const template = compilePugTemplate('public/templates/index.pug');
      res.send(template({}));
    } catch (error) {
      console.error('Error rendering template:', error);
      res.status(500).send('Error rendering template');
    }
  });
  
  app.get('/ws', (req, res) => {
    if (req.headers.upgrade === 'websocket') {
      console.log('WebSocket upgrade request');
    } else {
      res.send('WebSocket endpoint');
    }
  });
  
  app.use((req, res, next) => {
    serveStaticFile(req, res);
  });
}

// Handle WebSocket connections
function handleWebSocket(ws) {
  console.log('New WebSocket connection');
  
  ws.on('message', (data) => {
    console.log('Received:', data);
    ws.send(data);
  });
  
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
}

// Start server
function startServer() {
  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });
  
  setupRoutes(app);
  
  wss.on('connection', (ws) => {
    handleWebSocket(ws);
  });
  
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Start the server
startServer(); 