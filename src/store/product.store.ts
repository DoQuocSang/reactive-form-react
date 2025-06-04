import { create } from "zustand";
import { PRODUCTS } from "../data/products.data";
import { DEFAULT_PRODUCT, type IProduct } from "../models/product.interface";

type State = {
  products: IProduct[];
  formData: IProduct;
  isShowPopup: boolean;
  isShowVariantForm: boolean;
  togglePopup: () => void;
  toggleVariantForm: () => void;
  getProductById: (id: string) => IProduct;
  updateFormData: (formData: IProduct) => void;
};

export const useProductStore = create<State>((set, get) => ({
  products: PRODUCTS,
  formData: DEFAULT_PRODUCT,
  isShowVariantForm: false,
  isShowPopup: false,
  updateFormData: (data) => set({ formData: data }),
  togglePopup: () =>
    set((state) => ({
      isShowPopup: !state.isShowPopup,
    })),
  toggleVariantForm: () =>
    set((state) => ({
      isShowVariantForm: !state.isShowVariantForm,
    })),
  getProductById: (id: string) => {
    return (
      get().products.find((product) => product.id === id) || DEFAULT_PRODUCT
    );
  },
}));
