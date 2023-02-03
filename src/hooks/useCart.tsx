import { useContext } from "react";
import { CartContext, CartContextDataProps } from "src/context/CartContext";

export function useCart(): CartContextDataProps {
  const context = useContext(CartContext);

  return context;
}