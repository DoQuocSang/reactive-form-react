export type ValidatorType =
  | "required"
  | "min"
  | "max"
  | "minLength"
  | "maxLength"
  | "pattern"
  | "validate";

interface ErrorMessageProps {
  type: ValidatorType;
}

export default function ErrorMessage({ type }: ErrorMessageProps) {
  const errorMessages: Record<ValidatorType, string> = {
    required: "This field is required",
    min: "Value is too small",
    max: "Value is too large",
    minLength: "Value is too short",
    maxLength: "Value is too long",
    pattern: "Invalid format",
    validate: "Validation failed",
  };

  const message = errorMessages[type] ?? "There is an error with this field";

  return (
    <p role="alert" className="text-red-500 font-medium text-sm">
      {message}
    </p>
  );
}
