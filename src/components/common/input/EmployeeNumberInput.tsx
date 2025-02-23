import React, { useState, useRef } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface EmployeeNumberInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const EmployeeNumberInput: React.FC<EmployeeNumberInputProps> = ({
  register,
  errors,
}) => {
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [placeholder, setPlaceholder] = useState("사원번호");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref, onBlur, onChange, ...rest } = register("employeeNumber", {
    required: "Employee number is required",
    pattern: {
      value: /^[A-Za-z0-9]+$/,
      message: "Employee number must be alphanumeric",
    },
  });

  const clearInput = () => {
    setPlaceholder("사원번호");
    setIsFocused(false);
    setEmployeeNumber("");
  };

  return (
    <div className="relative flex items-center w-[442px] border-[1px] border-grayScale-100 border-solid h-[60px] rounded-[16px]">
      <input
        className="bg-grayScale-50 placeholder-gray-400 rounded-[15px] text-gray-800 w-full h-full text-lg pl-4 pr-10 font-semibold focus:ring-2 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
        id="employeeNumber"
        type="text"
        placeholder={placeholder}
        value={employeeNumber}
        onChange={(e) => {
          onChange(e);
          setEmployeeNumber(e.target.value);
        }}
        onBlur={(e) => {
          onBlur(e);
          setTimeout(() => {
            {
              setPlaceholder("사원번호");
              setIsFocused(false);
            }
          }, 50);
        }}
        onFocus={() => {
          setPlaceholder("사원번호를 입력해 주세요");
          setIsFocused(true);
        }}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        {...rest}
      />
      {isFocused && (
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
