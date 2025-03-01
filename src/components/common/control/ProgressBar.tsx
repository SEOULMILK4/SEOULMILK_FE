interface ProgressBarProps {
  currentNumber: number;
}

/**
 *
 * @param currentNumber - 현재 진행 중인 숫자
 * @returns
 */
const ProgressBar = ({ currentNumber }: ProgressBarProps) => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="center">
      {numbers.map((number) => (
        <>
          <div
            key={number}
            className={`w-5 h-5 center ${currentNumber === number ? "bg-secondary-300 text-white" : "bg-grayScale-100 text-grayScale-500"} rounded-xl b5`}
          >
            {number}
          </div>
          {number !== 5 && (
            <div className="w-[66px] h-[2px] bg-grayScale-100" />
          )}
        </>
      ))}
    </div>
  );
};

export default ProgressBar;
