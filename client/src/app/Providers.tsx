"use client";

import { CartProvider } from "@/context/CartContext";
import TanstackQueryProvider from "@/provider/tanstackQueryProvider";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanstackQueryProvider>
      <CartProvider>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </CartProvider>
    </TanstackQueryProvider>
  );
}
