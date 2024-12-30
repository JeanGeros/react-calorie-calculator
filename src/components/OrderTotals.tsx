import { useCallback } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalProps) {
  const subTotal = useCallback(
    () =>
      order.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
    [order]
  );

  const tipAmount = useCallback(() => subTotal() * tip, [tip, order]);
  const total = useCallback(() => subTotal() + tipAmount(), [tip]);
  return (
    <div>
      <div className="space-y-3">
        <h2 className="font-black text-2xl"> Totales y Propina </h2>
        <p>
          Subtotal a pagar:
          <span className="font-black">{formatCurrency(subTotal())} </span>
        </p>
        <p>
          Propina:
          <span className="font-black">{formatCurrency(tipAmount())} </span>
        </p>
        <p>
          Total a pagar:
          <span className="font-black">{formatCurrency(total())} </span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={total() === 0}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </div>
  );
}
