import { expect } from 'chai';
import WebSocket from 'ws';

const TEST_SERVER = 'ws://localhost:8081';
let ws;

describe('WebSocket Tests', () => {
  afterEach(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
  });

  it('should establish a connection', (done) => {
    ws = new WebSocket(TEST_SERVER);
    
    ws.on('open', () => {
      expect(ws.readyState).to.equal(WebSocket.OPEN);
      done();
    });

    ws.on('error', (error) => {
      done(error);
    });
  });

  it('should exchange messages', (done) => {
    ws = new WebSocket(TEST_SERVER);
    const testMessage = 'Hello WebSocket!';
    
    ws.on('open', () => {
      ws.send(testMessage);
    });

    ws.on('message', (data) => {
      expect(data.toString()).to.equal(testMessage);
      done();
    });

    ws.on('error', (error) => {
      done(error);
    });
  });

  it('should handle binary data', (done) => {
    ws = new WebSocket(TEST_SERVER);
    const binaryData = new Uint8Array([1, 2, 3, 4, 5]);
    
    ws.on('open', () => {
      ws.send(binaryData);
    });

    ws.on('message', (data) => {
      expect(new Uint8Array(data)).to.deep.equal(binaryData);
      done();
    });

    ws.on('error', (error) => {
      done(error);
    });
  });
}); 