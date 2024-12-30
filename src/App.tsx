import MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  console.log(menuItems);

  const { order, tip, setTip, addItem, removeItemMenu, placeOrder } =
    useOrder();
  return (
    <>
      <header className="bg-emerald-300 py-5  mb-4">
        <h1 className="text-center text-4xl font-black text-gray-800 ">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="border-4 border-emerald-300 rounded-3xl mx-3 p-4">
          <h2 className="text-4xl text-center font-black text-gray-800">
            Menú
          </h2>
          <div className="space-y-3 mt-3">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              ></MenuItems>
            ))}
          </div>
        </div>
        <div className="border-4 border-emerald-300 rounded-3xl mx-3 p-4">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItemMenu={removeItemMenu} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center text-xl text-gray-800">
              {" "}
              la orden esta vacia{" "}
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
