import { useEffect, useState } from "react";
import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { DEFAULT_PRODUCT, type IProduct } from "../models/product.interface";
import { useProductStore } from "../store/product.store";
import type { IRange } from "../models/range.interface";
import type { ITag } from "../models/tag.interface";

export function useProduct(productId: string) {
  const [useUrl, setUseUrl] = useState(false);
  const [productData, setProductData] = useState<IProduct>(DEFAULT_PRODUCT);

  const getProductById = useProductStore((state) => state.getProductById);
  const updateFormData = useProductStore((state) => state.updateFormData);
  const isShowPopup = useProductStore((state) => state.isShowPopup);
  const togglePopup = useProductStore((state) => state.togglePopup);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    control,
    getValues,
    setValue,
  } = useForm<IProduct>({
    defaultValues: DEFAULT_PRODUCT,
  });

  const discount = watch("offer.percent") ?? 0;
  const priceRange: IRange = { min: 1, max: 1000 };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = inputValue.trim();
      if (value) {
        const tag: ITag = {
          id: uuidv4(),
          name: value,
        };
        append(tag);
        setInputValue("");
      }
    }
  };

  const handleDelete = (index: number) => {
    remove(index);
  };

  const toggleUseURL = () => {
    setUseUrl((prev) => !prev);
  };

  useEffect(() => {
    const productResult = getProductById(productId);
    if (productResult) {
      setProductData(productResult);
      reset(productResult);
    }
  }, [productId, getProductById, reset]);

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    console.log("Form submitted:", data);
    updateFormData(data);
    togglePopup();
  };

  return {
    useUrl,
    errors,
    toggleUseURL,
    register,
    handleSubmit,
    watch,
    reset,
    control,
    productData,
    discount,
    priceRange,
    fields,
    append,
    remove,
    inputValue,
    setInputValue,
    handleKeyDown,
    handleDelete,
    onSubmit,
    getValues,
    setValue,
    setProductData,
    isShowPopup,
  };
}
