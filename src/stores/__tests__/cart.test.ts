import { createCart } from "@cart";
import { mockProduct } from "@utils/mockProduct";
import { get } from "svelte/store";

describe("Cart model", () => {
  let cart: Cart;
  const product = mockProduct();

  function getProduct(productID = "testID") {
    return get(cart).get(productID);
  }

  beforeEach(() => {
    cart = createCart();
  });

  it("should add a new product with quantity one", () => {
    cart.addProduct(product.getPricing());
    expect(getProduct()).toHaveProperty("price", 4);
    expect(getProduct()).toHaveProperty("quantity", 1);
  });

  it("should increase and decrease product quantity", () => {
    cart.addProduct(product.getPricing());
    cart.addProduct(product.getPricing());
    expect(getProduct()).toHaveProperty("quantity", 2);

    cart.removeProduct(product.getPricing());
    expect(getProduct()).toHaveProperty("quantity", 1);
  });

  it("should remove product if quantity is zero", () => {
    cart.addProduct(product.getPricing());
    expect(getProduct()).toBeDefined();
    cart.removeProduct(product.getPricing());
    expect(getProduct()).toBe(undefined);
  });

  it("should throw error if product does not exist", () => {
    expect(() => cart.removeProduct(product.getPricing())).toThrow(Error);
  });

  it("should get product total", () => {
    cart.addProduct(product.getPricing());
    cart.addProduct(product.getPricing());
    expect(getProduct().getProductTotal()).toBe(8);
  });

  it("should get cart products quantity", () => {
    cart.addProduct(product.getPricing());
    expect(get(cart).size).toBe(1);
  });
});