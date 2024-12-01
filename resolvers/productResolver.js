
const products = require('../data/products');

// Resolver functions
const productResolver = {
  getProducts: () => products,
  getProductById: ({ id }) => products.find(product => product.id === id),
  addProduct: ({ name, price, inStock }) => {
    const newProduct = {
      id: String(products.length + 1),
      name,
      price,
      inStock,
    };
    products.push(newProduct);
    return newProduct;
  },
};

module.exports = productResolver;
