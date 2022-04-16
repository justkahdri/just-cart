import { nanoid } from "nanoid";

class Product {
  private id: string;
  public title: string;
  public description: string;
  public image: string;
  public price: number;

  constructor(title: string, description: string, image: string, price: number){
    this.id = nanoid();
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
  }

  getPricing() {
    return {
      id: this.id,
      price: this.price
    };
  }
}

export default Product;
