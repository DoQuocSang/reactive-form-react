import { create } from "zustand";
import { PRODUCTS } from "../../data/products.data";
import { DEFAULT_PRODUCT, type IProduct } from "../../models/product.interface";

type State = {
  products: IProduct[];
  isShowVariantForm: boolean;
  toogleVariantForm: () => void;
  getProductById: (id: string) => IProduct;
};

export const useProductStore = create<State>((set, get) => ({
  products: PRODUCTS,
  isShowVariantForm: false,
  toogleVariantForm: () =>
    set((state) => ({
      isShowVariantForm: !state.isShowVariantForm,
    })),
  getProductById: (id: string) => {
    return (
      get().products.find((product) => product.id === id) || DEFAULT_PRODUCT
    );
  },
}));
