interface EditInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const EditInput = ({
  value,
  onChange,
  placeholder = "수정할 값을 직접 입력해주세요.",
  className = "",
}: EditInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full h-7 px-[10px] py-[4.5] b5 border bg-grayScale-25 border-grayScale-300 rounded focus:ring-green-500 focus:outline-none focus:ring-2 ${className}`}
      />
    </>
  );
};

export default EditInput;
