import { useState } from "react";
import { useFormContext } from "react-hook-form";

const EmployeeNumberInput = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const employeeNumber = watch("employeeNumber");
  const [placeholder, setPlaceholder] = useState("사원번호"); // 플레이스홀더 상태
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태를 useState로 관리

  const clearInput = () => {
    const inputElement = document.getElementById(
      "employeeNumber"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "";
    }
  };

  const onFocus = () => {
    setIsFocused(true);
    setPlaceholder("사원번호를 입력해 주세요");
  };

  const onBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 10);

    setPlaceholder("사원번호");
  };

  return (
    <div className="relative flex items-center w-[442px] border-[1px] border-grayScale-100 border-solid h-[60px] rounded-[16px]">
      <input
        className="bg-grayScale-50 placeholder-gray-400 rounded-[15px] text-gray-800 w-full h-full text-lg pl-4 pr-10 font-semibold focus:ring-2 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
        id="employeeNumber"
        type="text"
        placeholder={placeholder}
        {...register("employeeNumber", {
          required: "Employee number is required",
          pattern: {
            value: /^[A-Za-z0-9]+$/,
            message: "Employee number must be alphanumeric",
          },
        })}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isFocused && employeeNumber && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearInput();
          }}
          type="button"
          className="absolute inset-y-0 z-10 px-2 center right-2"
        >
          <img src="/icons/delete.svg" alt="Delete" className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default EmployeeNumberInput;
