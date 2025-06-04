export const DEFAULT_VARIANT: IVariant = {
  id: "V000",
  color: "#000000",
  size: 0,
  quantity: 0,
};

export interface IVariant {
  id: string;
  color: string;
  size: number;
  quantity: number;
}
