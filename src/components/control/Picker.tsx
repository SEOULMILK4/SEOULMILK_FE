import { useState } from "react";

interface PickerProps {
  correctCount: number;
  inCorrectCount: number;
}

enum PickType {
  CORRECT = "일치",
  INCORRECT = "불일치",
}

/**
 *
 * @param correctCount - 일치 건수
 * @param inCorrectCount - 불일치 건수
 * @returns
 */
const Picker = ({ correctCount, inCorrectCount }: PickerProps) => {
  const options = [
    {
      type: PickType.CORRECT,
      count: correctCount,
      activeColor: "text-secondary-300",
    },
    {
      type: PickType.INCORRECT,
      count: inCorrectCount,
      activeColor: "text-primary-300",
    },
  ];

  const [currentPick, setCurrentPick] = useState(PickType.CORRECT);

  return (
    <div className="rounded-lg w-fit h-fit bg-grayScale-100 p-[2px] flex">
      {options.map(({ type, count, activeColor }) => (
        <div
          key={type}
          className={`w-[126px] h-fit text-center py-[6px] text-b3 font-medium rounded-[7px]
            ${currentPick === type ? `bg-white ${activeColor} font-semibold` : "text-grayScale-500"}`}
          onClick={() => setCurrentPick(type)}
        >
          {type} {count}건
        </div>
      ))}
    </div>
  );
};

export default Picker;
