import Cart from "../cart";
import { mockProduct } from "@utils/mockProduct";

describe("Cart model", () => {
  let cart: Cart;
  const product = mockProduct();
  beforeEach(() => {
    cart = new Cart();
  });

  it("should add a new product with quantity one", () => {
    cart.addProduct(product.getPricing());
    expect(cart.getProduct("testID")).toHaveProperty("price", 4);
    expect(cart.getProduct("testID")).toHaveProperty("quantity", 1);
  });

  it("should increase and decrease product quantity", () => {
    cart.addProduct(product.getPricing());
    cart.addProduct(product.getPricing());
    expect(cart.getProduct("testID")).toHaveProperty("quantity", 2);

    cart.removeProduct(product.getPricing());
    expect(cart.getProduct("testID")).toHaveProperty("quantity", 1);
  });

  it("should remove product if quantity is zero", () => {
    cart.addProduct(product.getPricing());
    expect(cart.getProduct("testID")).toBeDefined();
    cart.removeProduct(product.getPricing());
    expect(cart.getProduct("testID")).toBe(undefined);
  });

  it("should throw error if product does not exist", () => {
    expect(() => cart.removeProduct(product.getPricing())).toThrow(Error);
  });

  it("should get cart total", () => {
    cart.addProduct(product.getPricing());
    cart.addProduct(product.getPricing());
    expect(cart.getCartTotal()).toBe(8);
  });

  it("should get cart products quantity", () => {
    cart.addProduct(product.getPricing());
    expect(cart.size()).toBe(1);
  });
});