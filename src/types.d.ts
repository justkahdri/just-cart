declare global {
  interface ProductT {
    id: string;
    price: number;
  }

  interface StampT extends ProductT {
    title: string;
    description: string;
    image: string;
  }
}

export {};
