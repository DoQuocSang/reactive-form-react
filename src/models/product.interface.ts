import type { IOffer } from "./offer.interface";
import type { ITag } from "./tag.interface";
import type { IUploadFile } from "./upload-file.interface";
import type { IVariant } from "./variant.interface";

export const DEFAULT_PRODUCT: IProduct = {
  id: "P000",
  name: "",
  brand: "",
  description: "",
  weight: 0,
  dateStock: "",
  price: 0,
  type: "",
  images: [],
  variants: [],
  tags: [],
  visible: false,
  offer: undefined,
};

export interface IProduct {
  id: string;
  name: string;
  brand?: string;
  description: string;
  weight: number;
  dateStock: string;
  price: number;
  type?: string;
  images: IUploadFile[];
  variants: IVariant[];
  tags: ITag[];
  visible: boolean;
  offer?: IOffer;
}
