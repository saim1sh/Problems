function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  if (products.length === 0) {
    return 0;
  } else {
    const newPrice = products.reduce((total, product) => {
      const discount = product.discount ? product.discount : 0;
      const discountPrice = product.price - (product.price * discount) / 100;
      return total + discountPrice * product.quantity;
    }, 0);
    return newPrice;
  }
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
