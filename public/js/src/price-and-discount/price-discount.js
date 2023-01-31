export const priceWithDiscount = (discount) => {
    const calcPriceWithDiscount = discount.products.map((prices, value) => (prices[0]. * prices[0].discountPercentage) / 100);
    let finalPrice = discount.products[0].price - calcPriceWithDiscount;
    return finalPrice;
};
