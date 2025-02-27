interface ResultChipProps {
  type: "일치" | "불일치";
}

const ResultChip = ({ type }: ResultChipProps) => {
  const isCorrect = type === "일치";

  return (
    <div
      className={`w-[45px] h-6 center text-b5 font-medium rounded-[4px] ${isCorrect ? "text-secondary-500 bg-secondary-25" : "text-primary-500 bg-primary-50"}`}
    >
      {type}
    </div>
  );
};

export default ResultChip;
