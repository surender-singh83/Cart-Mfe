import type { FC } from "react";
import type { CartItem, CartPageProps } from "../types/cartitem.types";

const CartPage: FC<CartPageProps> = ({
  cartItems = [],
  onIncrese,
  onDecrese,
  onRemove,
}) => {
  const totalAmount = cartItems?.reduce((acc: number, item: CartItem) => {
    return (acc += item.price * item.quantity);
  }, 0);
debugger
  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-5">
            <h2 className="text-2xl font-bold mb-6 text-center">No data in cart</h2>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {cartItems?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm p-4 flex flex-col md:flex-row gap-5 items-center"
                >
                  <div className="w-28 h-28 shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h2>
                        <p className="text-indigo-600 font-bold mt-1">
                          ₹ {item.price}
                        </p>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => {
                          onRemove(item.id);
                        }}
                      >
                        remove
                      </button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onDecrese(item.id)}
                          className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onIncrese(item.id)}
                          className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-idingo-700"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-lg font-bold text-gray-800">
                        {" "}
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-5">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Free</span>
                </div>
                <hr />
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>₹ {totalAmount.toFixed(2)}</span>
                </div>

                <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
