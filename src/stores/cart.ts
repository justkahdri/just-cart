import { writable } from "svelte/store";

export function createCart() {
  const cart: CartWritable = writable(new Map());

  const addProduct = (newProduct: ProductT) => {
    cart.update(products => {
      const { id, price } = newProduct;
      const productInCart = products.get(id);
      products.set(id, new CartProduct(price, productInCart ? productInCart.quantity + 1 : 1));

      return new Map(products);
    });
  };

  function removeProduct(product: ProductT) {
    cart.update(products => {
      const productInCart = products.get(product.id);

      if (!productInCart) {
        throw new Error("Product not found on cart");
      }

      if (productInCart.quantity <= 1) {
        products.delete(product.id);
        return new Map(products);
      }
      const productUpdated = new CartProduct(productInCart.price, productInCart.quantity - 1);

      return new Map(products.set(product.id, productUpdated));
    });
  }

  // function getTotal() {
  //   let total = 0;
  //   cart.subscribe((products) => {
  //     total = Array.from(products.values())
  //     .reduce((total, product) => product.getProductTotal() + total, 0);
  //   });

  //   return total;
  // }

  return {
    subscribe: cart.subscribe,
    // getTotal,
    addProduct,
    removeProduct
  };

}

class CartProduct {
  public quantity: number;
  public price: number;

  constructor(price: number, quantity = 1) {
    this.price = price;
    this.quantity = quantity;
  }

  getProductTotal() {
    return this.price * this.quantity;
  }
}

export default createCart();