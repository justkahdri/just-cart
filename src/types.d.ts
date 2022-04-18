import type { Unsubscriber, Subscriber, Invalidator, Writable } from "svelte/store";

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

  type MouseEventHandler = (event: MouseEvent) => void;

  type CartWritable = Writable<Map<string, CartProduct>>

  interface Cart {
    subscribe: (
      this: void,
      run: Subscriber<Map<string, CartProduct>>,
      invalidate?: Invalidator<Map<string, CartProduct>> | undefined)
      => Unsubscriber;
    addProduct: (product: ProductT) => void;
    removeProduct: (product: ProductT) => void;
  }
}

export {};
