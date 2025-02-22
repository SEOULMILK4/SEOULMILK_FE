import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import EmployeeNumberInput from "../common/input/EmployeeNumberInput";
import PasswordInput from "../common/input/PasswordInput";

interface FormValues {
  employeeNumber: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmployeeNumberInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
