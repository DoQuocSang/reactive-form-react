import type { IOffer } from "./offer.interface";
import type { ITag } from "./tag.interface";
import type { IUploadFile } from "./uploadfile.interface";
import type { IVariant } from "./variant.interface";

export const DEFAULT_PRODUCT: IProduct = {
  id: "P000",
  name: "",
  brand: undefined,
  description: "",
  weight: 0,
  dateStock: new Date(),
  price: 0,
  type: undefined,
  images: [],
  variants: [],
  tags: [],
  visible: false,
  offer: undefined,
};

export interface IProduct {
  id: string;
  name: string;
  brand?: number;
  description: string;
  weight: number;
  dateStock: Date;
  price: number;
  type?: number;
  images: IUploadFile[];
  variants: IVariant[];
  tags: ITag[];
  visible: boolean;
  offer?: IOffer;
}
