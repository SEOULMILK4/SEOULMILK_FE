import { useState } from "react";

interface PickerProps {
  totalCount: number;
  pendingCount?: number;
  correctCount: number;
  inCorrectCount: number;
}

enum PickType {
  TOTAL = "전체",
  PENDING = "대기",
  CORRECT = "일치",
  INCORRECT = "불일치",
}

/**
 *
 * @param totalCount - 전체 건수
 * @param pendingCount - (optional) 결재자 지급결의서 결재함에서 대기 건수
 * @param correctCount - 일치 건수
 * @param inCorrectCount - 불일치 건수
 * @returns
 */
const Picker = ({
  totalCount,
  pendingCount,
  correctCount,
  inCorrectCount,
}: PickerProps) => {
  const options = [
    {
      type: PickType.TOTAL,
      count: totalCount,
      activeColor: "text-grayScale-600",
    },
    ...(pendingCount
      ? [
          {
            type: PickType.PENDING,
            count: pendingCount,
            activeColor: "text-warning-400",
          },
        ]
      : []),
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

  const currentIndex = options.findIndex(
    (option) => option.type === currentPick
  );
  const translateXValue = `${currentIndex * 100}%`;

  return (
    <div className="relative flex h-fit rounded-lg w-fit p-[2px] bg-grayScale-100 overflow-hidden">
      <div
        className="absolute top-[2px] left-[2px] w-[100px] h-[28px] bg-white rounded-[7px] transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${translateXValue})`,
        }}
      />
      {options.map(({ type, count, activeColor }) => (
        <div
          key={type}
          className={`center relative w-[100px] h-[28px] text-b3 font-medium rounded-[7px]
            ${currentPick === type ? `${activeColor} font-semibold` : "text-grayScale-500"}`}
          onClick={() => setCurrentPick(type)}
        >
          {type} {count}건
        </div>
      ))}
    </div>
  );
};

export default Picker;
