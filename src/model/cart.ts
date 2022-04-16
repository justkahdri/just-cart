class Cart {
  private products: Map<string, CartProduct>;
  public size: () => number;

  constructor() {
    this.products = new Map();
    this.size = () => this.products.size;
  }

  getProduct(id: string) {
    return this.products.get(id);
  }

  addProduct(product: ProductT) {
    const { id, price } = product;
    const productInCart = this.products.get(id);

    if(productInCart) {
      productInCart.increaseQuantity();
    } else {
      this.products.set(id, new CartProduct(price));
    }

    return productInCart;
  }

  removeProduct(product: ProductT) {
    const productInCart = this.products.get(product.id);

    if (!productInCart) {
      throw new Error("Product not found on cart");
    }

    productInCart.decreaseQuantity();

    if (productInCart.quantity <= 0) {
      this.products.delete(product.id);
      return null;
    }

    return productInCart;
  }

  getCartTotal() {
    const total = Array.from(this.products.values())
      .reduce((total, product) => product.getProductTotal() + total, 0);

    return total;
  }
}

class CartProduct {
  public quantity: number;
  public price: number;

  constructor(price: number) {
    this.price = price;
    this.quantity = 1;
  }

  increaseQuantity() {
    return this.quantity++;
  }

  decreaseQuantity() {
    return this.quantity--;
  }

  getProductTotal() {
    return this.price * this.quantity;
  }
}

export default Cart;