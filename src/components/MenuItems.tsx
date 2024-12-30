import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItems({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        className="w-full flex justify-between py-2 px-4 border-2 rounded-xl hover:bg-emerald-400 font-bold"
        onClick={() => addItem(item)}
      >
        <p className="text-xl">{item.name}</p>
        <p className="text-xl">${item.price}</p>
      </button>
    </>
  );
}
