import { useProductStore } from "../store/product.store";

export function useVariant() {
  const products = useProductStore((state) => state.products);

  function getVariantsByProductId(id: string) {
    const product = products.find((product) => product.id === id);
    return product?.variants || [];
  }

  return { getVariantsByProductId };
}
