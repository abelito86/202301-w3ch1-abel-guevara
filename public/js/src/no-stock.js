export const noStockProduct = (outStock) => {
    const stockProduct = outStock.products.filter((stocks) => stocks.stock === 0);
    return `Hay ${stockProduct.length} productos sin stock`;
};
