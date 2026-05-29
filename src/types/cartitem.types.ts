export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  rating: number;
};

export type CartPageProps = {
  cartItems: CartItem[];
  onIncrese: (id: number) => void;
  onDecrese: (id: number) => void;
  onRemove: (id: number) => void;
};