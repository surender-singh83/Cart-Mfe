export {};

declare global {
  interface Window {
    getCartSnapshot: () => CartItem[];
  }
}
