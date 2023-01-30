import { helloWorld } from '../index.js';
test('Print test', () => {
    expect(helloWorld()).toBe('Hola mundo');
});
