import React, { useState } from "react";
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

  const { ref, onBlur, onChange, ...rest } = register("employeeNumber", {
    required: "Employee number is required",
    pattern: {
      value: /^[A-Za-z0-9]+$/,
      message: "Employee number must be alphanumeric",
    },
  });

  // 입력 필드를 비우는 함수
  const clearInput = () => {
    setEmployeeNumber(""); // 상태 업데이트로 입력 필드 비우기
  };

  return (
    <div className="relative flex items-center w-[442px]">
      <input
        className="bg-gray-200 placeholder-gray-400 text-gray-800 rounded-[16px] w-full h-[60px] text-lg pl-4 pr-10 font-semibold focus:ring-2 focus:ring-secondary-500 focus:outline-none"
        id="employeeNumber"
        type="text"
        placeholder={placeholder}
        value={employeeNumber}
        onChange={(e) => {
          onChange(e); // react-hook-form의 onChange 처리
          setEmployeeNumber(e.target.value); // 상태 업데이트
        }}
        onBlur={(e) => {
          onBlur(e); // react-hook-form의 onBlur 처리
          setPlaceholder("사원번호"); // 플레이스홀더 재설정
        }}
        onFocus={() => setPlaceholder("사원번호를 입력해 주세요")}
        ref={ref}
        {...rest}
      />
      <button
        onClick={clearInput}
        type="button"
        className="absolute inset-y-0 px-2 center right-2"
      >
        <img src="/icons/delete.svg" alt="Delete" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default EmployeeNumberInput;
