import { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentsProps = {
  order: OrderItem[];
  removeItemMenu: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItemMenu,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-4xl text-center font-black text-gray-800 pb-4">
        Consumido
      </h2>
      <div className="space-y-3">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - ({formatCurrency(item.price)})
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - Total:{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className="rounded-md bg-red-600 h-8 w-8 font-semibold text-white"
              onClick={() => removeItemMenu(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
