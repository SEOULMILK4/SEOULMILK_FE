import { useFormContext, FieldError } from "react-hook-form";

const isFieldError = (error: any): error is FieldError => {
  return error && typeof error.message === "string";
};

const ErrorMessages = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const getErrorMessage = (error: any): string | undefined => {
    if (isFieldError(error)) {
      return error.message;
    }

    return undefined;
  };

  const employeeNumberError = getErrorMessage(errors.employeeNumber);
  const passwordError = getErrorMessage(errors.password);

  let errorMessage: string | undefined = "";
  if (
    employeeNumberError &&
    passwordError &&
    employeeNumberError === passwordError
  ) {
    errorMessage = employeeNumberError;
  } else {
    errorMessage = employeeNumberError || passwordError;
  }

  return (
    <div className="min-h-[0.1px] text-primary-500 b2">
      {errorMessage ? errorMessage : null}
    </div>
  );
};

export default ErrorMessages;
