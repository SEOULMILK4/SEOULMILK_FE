import CheckBox from "../common/control/CheckBox";

interface SubmitTableItemProps {
  check: boolean;
  newly: boolean;
  number: number;
  supplier: string;
  retailer: string;
  date: string;
  amount: number;
  validationResult: boolean;
  onCheckChange: (checked: boolean) => void;
}

const SubmitTableItem = ({
  check,
  newly,
  number,
  supplier,
  retailer,
  date,
  amount,
  validationResult,
  onCheckChange,
}: SubmitTableItemProps) => {
  const formattedNumber = number.toString().padStart(3, "0");

  // 배경색을 선택 상태에 따라 다르게 설정
  const rowClass = check ? "bg-grayScale-100" : "";

  return (
    <div
      className={`flex items-center h-10 mt-[6px] mx-[7px] text-grayScale-700 b4 rounded-lg ${rowClass} `}
    >
      <div className="w-[33px] center mr-2">
        <CheckBox
          checked={check}
          onChange={(e) => onCheckChange(e.target.checked)}
        />
      </div>
      <div className="w-[39px]">{formattedNumber}</div>
      <div className="w-[79px]">
        {newly && (
          <div className="w-[47px] text-center text-warning-500 bg-warning-50 border-warning-300 border border-solid h-6 rounded">
            신규
          </div>
        )}
      </div>
      <div className="w-[336px]">{supplier}</div>
      <div className="w-[336px]">{retailer}</div>
      <div className="w-[174px]">{date}</div>
      <div className="w-[164px]">{amount}</div>
      <div className="w-[53px] flex items-center">
        {validationResult ? (
          <div className="w-[47px] text-center text-secondary-500 bg-secondary-25 border-secondary-200 border border-solid h-6 rounded">
            일치
          </div>
        ) : (
          <div className="w-[47px] text-center text-primary-500 bg-primary-50 border-primary-200 border border-solid h-6 rounded">
            불일치
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitTableItem;
