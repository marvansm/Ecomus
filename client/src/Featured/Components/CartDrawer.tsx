"use client";

import { X, Minus, Plus, ShoppingBag, Truck, Gift, Info } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
    subtotal,
  } = useCart();

  const freeShippingThreshold = 75;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remaining = Math.max(freeShippingThreshold - subtotal, 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-200 flex justify-end">

      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="relative w-full max-w-[450px] h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-[20px] font-medium text-black">Shopping cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:rotate-90 transition-transform duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 border-b border-gray-100">
          <div className="flex flex-col gap-3">
            <p className="text-[14px] text-center">
              {remaining > 0 ? (
                <>
                  Buy <span className="font-bold">${remaining.toFixed(2)}</span>{" "}
                  more to enjoy <span className="font-bold">Free Shipping</span>
                </>
              ) : (
                <span className="font-bold text-green-600 underline">
                  You've unlocked Free Shipping!
                </span>
              )}
            </p>
            <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-[#db1215] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 bg-white border border-[#db1215] p-1 rounded-full shadow-sm z-10 transition-all duration-500"
                style={{ left: `calc(${progress}% - 12px)` }}
              >
                <Truck size={12} className="text-[#db1215]" />
              </div>
            </div>
          </div>
        </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-gray-400">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map((item: any) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-[100px] aspect-3/4 bg-gray-50 rounded-md overflow-hidden shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-[14px] font-medium text-black mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[12px] text-gray-500 mb-2">
                      Default Variant
                    </p>
                    <span className="text-[14px] font-bold">{item.price}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 px-2 hover:bg-gray-50 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center text-[13px] font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 px-2 hover:bg-gray-50 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[13px] text-gray-500 border-b border-gray-300 hover:text-[#db1215] hover:border-[#db1215] transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          
   
        </div>

        
        <div className="p-6 border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
          
          <div className="flex justify-center gap-8 mb-6">
            <button className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <Gift size={20} className="text-gray-600" />
            </button>
            <button className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <Truck size={20} className="text-gray-600" />
            </button>
            <button className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <Info size={20} className="text-gray-600" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-[18px] font-medium">Subtotal</span>
            <span className="text-[18px] font-bold">
              ${subtotal.toFixed(2)} USD
            </span>
          </div>
          <p className="text-[12px] text-gray-400 mb-6">
            Taxes and <span className="underline cursor-pointer">shipping</span>{" "}
            calculated at checkout
          </p>

          <div className="flex items-center gap-2 mb-6 cursor-pointer group">
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-black transition-colors overflow-hidden">

            </div>
            <p className="text-[13px] text-gray-500">
              I agree with the{" "}
              <span className="underline">terms and conditions</span>
            </p>
          </div>

          <div className="space-y-3">
            <button className="w-full h-12 border border-black font-bold text-[14px] uppercase tracking-wider hover:bg-black hover:text-white transition-all">
              View cart
            </button>
            <button className="w-full h-12 bg-black text-white font-bold text-[14px] uppercase tracking-wider hover:bg-[#db1215] transition-all">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
