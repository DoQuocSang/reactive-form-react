import { useEffect, useState } from "react";
import {
  useForm,
  useFieldArray,
  type SubmitHandler,
  type Resolver,
} from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { DEFAULT_PRODUCT, type IProduct } from "../models/product.interface";
import { useProductStore } from "../store/product.store";
import type { IRange } from "../models/range.interface";
import type { ITag } from "../models/tag.interface";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { IUploadFile } from "../models/upload-file.interface";
import type { IVariant } from "../models/variant.interface";
import type { IOffer } from "../models/offer.interface";

export function useProduct(productId: string) {
  const [useUrl, setUseUrl] = useState(false);
  const [productData, setProductData] = useState<IProduct>(DEFAULT_PRODUCT);

  const getProductById = useProductStore((state) => state.getProductById);
  const updateFormData = useProductStore((state) => state.updateFormData);
  const isShowPopup = useProductStore((state) => state.isShowPopup);
  const togglePopup = useProductStore((state) => state.togglePopup);

  const priceRange: IRange = { min: 10, max: 1000 };
  const discountCodeLength: IRange = { min: 5, max: 10 };
  const tagNameLength: IRange = { min: 5, max: 10 };

  const schema = yup
    .object({
      id: yup.string().required(),
      name: yup
        .string()
        .required("This field is required")
        .min(5, "Name must have at least 5 character")
        .max(20, "The maximum characters is 20"),
      price: yup
        .number()
        .transform((value, originalValue) => {
          return originalValue === "" ? undefined : value;
        })
        .typeError("Price must be a number")
        .positive()
        .required("This field is required")
        .min(priceRange.min, `Minimum price is ${priceRange.min}`)
        .max(priceRange.max, `Maximum price is ${priceRange.max}`)
        .test(
          "max-decimals",
          "Price can have at most 2 decimal places",
          (value) =>
            value === undefined ||
            Number.isInteger(value) ||
            value.toString().split(".")[1]?.length <= 2
        ),
      brand: yup.string().required("This field is required"),
      description: yup.string().optional(),
      weight: yup.number().optional(),
      dateStock: yup.string().optional(),
      type: yup.string().required("This field is required"),
      images: yup.array(yup.mixed<IUploadFile>().required()).required(),
      variants: yup.array(yup.mixed<IVariant>().required()).required(),
      tags: yup
        .array(
          yup.object<ITag>({
            id: yup.string().required(),
            name: yup
              .string()
              .min(
                tagNameLength.min,
                `Tags must have at least ${tagNameLength.min}`
              )
              .required(),
          })
        )
        .optional(),
      visible: yup.boolean().required(),
      offer: yup
        .object<IOffer>({
          discountCode: yup
            .string()
            .nullable()
            .transform((value) => (value === "" ? null : value))
            .when("percent", {
              is: (val: number | undefined) => val != null && val > 0,
              then: (schema) =>
                schema
                  .required("Discount code is required when pecent > 0")
                  .min(
                    discountCodeLength.min,
                    `The code must have at least ${discountCodeLength.min} characters`
                  )
                  .matches(
                    /^SDQ-[a-zA-Z0-9]+$/gi,
                    "The code is not match the pattern SDQ-..."
                  ),
              otherwise: (schema) => schema.optional(),
            }),
        })
        .optional(),
    })
    .required();

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
    resolver: yupResolver(schema) as Resolver<IProduct>,
  });

  const discount = watch("offer.percent") ?? 0;

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
    discountCodeLength,
  };
}
