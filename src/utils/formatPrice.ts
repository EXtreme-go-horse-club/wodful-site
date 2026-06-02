export function formatPriceBRL(price: string | number): string {
  const normalized =
    typeof price === "string"
      ? Number.parseFloat(price.replace(/\./g, "").replace(",", "."))
      : price;

  if (Number.isNaN(normalized)) {
    return typeof price === "string" ? `R$ ${price}` : "R$ —";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(normalized);
}
