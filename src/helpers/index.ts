export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "CLP",
  }).format(quantity);
}
