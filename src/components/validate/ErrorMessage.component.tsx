interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p role="alert" className="text-red-500 font-medium text-sm">
      {message}
    </p>
  );
}
