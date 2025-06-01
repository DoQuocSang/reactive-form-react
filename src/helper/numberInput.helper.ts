import type { IRange } from "../models/range.interface";

export function preventInvalidValueForNumberInput(
  e: React.KeyboardEvent<HTMLInputElement>
) {
  const invalidChars = ["e", "E", "+", "-", "."];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

export function autoAdjustValidValueForNumberInput(
  e: React.FormEvent<HTMLInputElement>,
  range: IRange
) {
  const input = e.target as HTMLInputElement;
  const value = parseInt(input.value, 10);

  if (value > range.max) {
    input.value = range.max.toString();
  } else if (value < range.min) {
    input.value = range.min.toString();
  }
}
