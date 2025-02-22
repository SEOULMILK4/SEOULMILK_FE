import React, { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState("비밀번호");

  const { ref, onBlur, onChange, ...rest } = register("password", {
    required: "Password is required",
    pattern: {
      value: /^[A-Za-z0-9]+$/,
      message: "Password must be alphanumeric",
    },
  });

  // 비밀번호 입력 필드를 비우는 함수
  const clearInput = () => {
    setPassword("");
  };

  // 비밀번호 가시성을 토글하는 함수
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative flex items-center w-[442px]">
      <input
        className="bg-gray-200 placeholder-gray-400 text-gray-800 rounded-[16px] w-full h-[60px] text-lg pl-4 pr-16 font-semibold focus:ring-2 focus:ring-secondary-500 focus:outline-none"
        id="password"
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        value={password}
        onChange={(e) => {
          onChange(e);
          setPassword(e.target.value);
        }}
        onBlur={(e) => {
          onBlur(e);
          setPlaceholder("비밀번호");
        }}
        onFocus={() => setPlaceholder("비밀번호를 입력해 주세요")}
        ref={ref}
        {...rest}
      />
      <button
        onClick={togglePasswordVisibility} // 비밀번호 가시성 토글
        type="button"
        className="absolute inset-y-0 px-2 right-8 center"
      >
        <img
          src={isPasswordVisible ? "/icons/eye.svg" : "/icons/eyeOff.svg"}
          alt="Toggle visibility"
          className="w-4 h-4"
        />
      </button>
      <button
        onClick={clearInput}
        type="button"
        className="absolute inset-y-0 px-2 right-2 center"
      >
        <img src="/icons/delete.svg" alt="Delete" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PasswordInput;
