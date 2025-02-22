import React, { useState, useRef } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState("비밀번호");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref, onBlur, onChange, ...rest } = register("password", {
    required: "Password is required",
    pattern: {
      value: /^[A-Za-z0-9]+$/,
      message: "Password must be alphanumeric",
    },
  });

  // 비밀번호 입력 필드를 비우는 함수
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev); // 상태를 토글
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus(); // 포커스를 입력 필드에 맞춤
        const length = inputRef.current.value.length; // 입력 필드의 현재 값의 길이를 구함
        inputRef.current.setSelectionRange(length, length); // 커서를 필드 값의 끝으로 이동
      }
    }, 0);
  };

  const clearInput = () => {
    setPassword("");
    setTimeout(() => inputRef.current?.focus(), 0); // 포커스 지연
  };

  return (
    <div className="relative flex items-center w-[442px] border-[1px] border-grayScale-100 border-solid rounded-[16px] h-[60px]">
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
          onBlur(e);
          setTimeout(() => {
            setPlaceholder("비밀번호");
            setIsFocused(false);
          }, 0);
        }}
        onFocus={() => {
          setPlaceholder("비밀번호를 입력해 주세요");
          setIsFocused(true);
        }}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        {...rest}
      />
      {isFocused && (
        <div className="z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePasswordVisibility();
            }} // 비밀번호 가시성 토글
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
            onClick={(e) => {
              e.stopPropagation();
              clearInput();
            }}
            type="button"
            className="absolute inset-y-0 px-2 right-2 center"
          >
            <img src="/icons/delete.svg" alt="Delete" className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
