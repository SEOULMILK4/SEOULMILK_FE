import React, { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // 입력 필드 포커스 상태 관리
  const [placeholder, setPlaceholder] = useState("비밀번호");

  const { ref, onBlur, onChange, ...rest } = register("password", {
    required: "Password is required",
    pattern: {
      value: /^[A-Za-z0-9]+$/,
      message: "Password must be alphanumeric",
    },
  });

  const clearInput = () => {
    setPlaceholder("비밀번호");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative flex items-center w-[442px] border-[1px] border-grayScale-100 border-solid h-[60px] rounded-[16px]">
      <input
        className="bg-grayScale-50 placeholder-gray-400 rounded-[15px] text-gray-800 w-full h-full text-lg pl-4 pr-10 font-semibold focus:ring-2 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
        id="password"
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        value={password}
        onChange={(e) => {
          onChange(e);
          setPassword(e.target.value);
        }}
        onBlur={(e) => {
          setTimeout(() => {
            setIsFocused(false);
            setPlaceholder("비밀번호");
          }, 50);
          onBlur(e);
        }}
        onFocus={() => {
          setIsFocused(true); // 포커스 상태 업데이트
          setPlaceholder("비밀번호를 입력해 주세요");
        }}
        ref={ref}
        {...rest}
      />
      {isFocused && ( // 포커스 상태에 따라 버튼 표시
        <>
          <button
            onClick={togglePasswordVisibility}
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
        </>
      )}
    </div>
  );
};

export default PasswordInput;
