import { useState } from "react";

interface PickerProps {
  totalCount: number;
  pendingCount?: number;
  correctCount?: number;
  inCorrectCount?: number;
  approvedCount?: number;
  rejectedCount?: number;
  type: "matching" | "process";
}

enum PickType {
  TOTAL = "전체",
  PENDING = "대기",
  CORRECT = "일치",
  INCORRECT = "불일치",
  APPROVED = "승인",
  REJECTED = "반려",
}

/**
 *
 * @param totalCount - 전체 건수
 * @param pendingCount - (optional) 대기 건수
 * @param correctCount - (optional) 일치 건수
 * @param inCorrectCount -(optional) 불일치 건수
 * @param approvedCount - (optional) 승인 건수
 * @param rejectedCount - (optional) 반려 건수
 * @param type - "matching" | "process"
 * @returns
 */
const Picker = ({
  totalCount,
  pendingCount,
  correctCount,
  inCorrectCount,
  approvedCount,
  rejectedCount,
  type,
}: PickerProps) => {
  const allOptions = [
    {
      type: PickType.TOTAL,
      count: totalCount,
      activeColor: "text-grayScale-600",
    },
    type === "process" && pendingCount !== undefined
      ? {
          type: PickType.PENDING,
          count: pendingCount,
          activeColor: "text-warning-400",
        }
      : null,
    type === "matching" && correctCount !== undefined
      ? {
          type: PickType.CORRECT,
          count: correctCount,
          activeColor: "text-secondary-300",
        }
      : null,
    type === "matching" && inCorrectCount !== undefined
      ? {
          type: PickType.INCORRECT,
          count: inCorrectCount,
          activeColor: "text-primary-300",
        }
      : null,
    type === "process" && approvedCount !== undefined
      ? {
          type: PickType.APPROVED,
          count: approvedCount,
          activeColor: "text-secondary-300",
        }
      : null,
    type === "process" && rejectedCount !== undefined
      ? {
          type: PickType.REJECTED,
          count: rejectedCount,
          activeColor: "text-primary-300",
        }
      : null,
  ].filter(Boolean) as { type: PickType; count: number; activeColor: string }[];
  const [currentPick, setCurrentPick] = useState(PickType.TOTAL);

  const currentIndex = allOptions.findIndex(
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
      {allOptions.map(({ type, count, activeColor }) => (
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
