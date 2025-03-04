interface EditInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 *
 * @param value - input의 value를 지정합니다.
 * @param onChange - input의 변경을 추적합니다.
 * @param placeholder - 플레이스 홀더 값을 지정합니다.
 * @returns
 */
const EditInput = ({
  value,
  onChange,
  placeholder = "수정할 값을 직접 입력해주세요.",
}: EditInputProps) => {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-7 px-[10px] py-[4.5] b5 border bg-grayScale-25 border-grayScale-300 rounded focus:ring-green-500 focus:outline-none focus:ring-2`}
      />
    </>
  );
};

export default EditInput;
