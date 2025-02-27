import React from "react";

interface ButtonProps {
  size: "medium" | "large";
  color: "green" | "gray" | "black";
  disabled: boolean;
  children: React.ReactNode;
}

/**
 *
 * @param size - "medium" | "large"
 * @param color - "green" | "gray" | "black"
 * @param disabled - true or false
 *
 * @returns
 */
const Button = ({ size, color, disabled, children }: ButtonProps) => {
  // 버튼 사이즈에 따른 스타일을 설정하는 함수
  const getSizeClass = () => {
    return size === "large"
      ? "w-[118px] h-15 text-t1 font-bold"
      : "w-[97px] h-12 text-b1 font-bold";
  };



  const getColorClass = () => {
    if (disabled) {
      switch (color) {
        case "green":
          return "bg-secondary-50 text-white";
        case "black":
          return "bg-grayScale-400 text-grayScale-300";  // black 색상에 대한 비활성화 스타일 추가
        default:
          return "bg-grayScale-50 text-grayScale-300";
      }
    } else {
      switch (color) {
        case "green":
          return "bg-secondary-500 hover:bg-secondary-700 text-white";
        case "black":
          return "bg-grayScale-600 hover:bg-grayScale-700 text-white";  // black 색상에 대한 활성화 스타일 추가
        default:
          return "bg-grayScale-100 hover:bg-grayScale-300 text-grayScale-600";
      }
    }
  };
  

  return (
    <button
      disabled={disabled}
      className={`${getSizeClass()} ${getColorClass()} text-center rounded-lg center`}
    >
      {children}
    </button>
  );
};

export default Button;
