import { noStockProduct } from './no-stock.js';
import { objectProducts } from './data.js';
test('Print test', () => {
    expect(noStockProduct(objectProducts)).toBe('Hay 0 productos sin stock');
});
