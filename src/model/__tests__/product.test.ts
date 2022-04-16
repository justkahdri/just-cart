import { mockProduct } from "@utils/mockProduct";

describe("Product model", () => {
  const product = mockProduct();

  it("should return price and ID", () => {
    expect(product.getPricing()).toHaveProperty("price", 4);
    expect(product.getPricing()).toHaveProperty("id", "testID");
  });

  it("should access product properties", () => {
    expect(product.title).toBe("Estampitancy Trainee");
    expect(product.description).toBe("Te ayuda a conseguir tu primer trabajo en IT");
    expect(product.image).toBe("https://pbs.twimg.com/media/FLzn7kFVQAg6Tf6?format=jpg&name=large");
  });
});