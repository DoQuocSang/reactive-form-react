/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import type { IRange } from "../models/range.interface";

export function preventInvalidValueForNumberInput(
  e: React.KeyboardEvent<HTMLInputElement>
) {
  const invalidChars = ["e", "E", "+", "-"];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

export function autoAdjustValidValueForNumberInput(
  getValues: UseFormGetValues<any>,
  setValue: UseFormSetValue<any>,
  range: IRange,
  fieldName: string
) {
  const raw = getValues(fieldName);
  const value = typeof raw === "string" ? parseFloat(raw) : Number(raw);

  if (value > range.max) {
    setValue(fieldName, range.max);
  } else if (value < range.min) {
    setValue(fieldName, range.min);
  } else {
    const rounded = Math.floor(value * 100) / 100;
    setValue(fieldName, rounded);
  }
}
