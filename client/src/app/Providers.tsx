"use client";

import { CartProvider } from "@/context/CartContext";
import TanstackQueryProvider from "@/provider/tanstackQueryProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanstackQueryProvider>
      <CartProvider>{children}</CartProvider>
    </TanstackQueryProvider>
  );
}
