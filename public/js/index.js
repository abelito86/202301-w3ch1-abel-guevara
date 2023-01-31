import { objectProducts } from './src/data.js';
import { noStockProduct } from './src/no-stock.js';
import { priceWithDiscount } from './src/price-and-discount/price-discount.js';

console.log(noStockProduct(objectProducts));
console.log(priceWithDiscount(objectProducts));
console.log(
  (objectProducts.products[0].price *
    objectProducts.products[0].discountPercentage) /
    100
);
