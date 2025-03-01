import Refresh from "@/assets/icons/refresh.svg?react";

const RefreshButton = () => {
  return (
    <button
      className="px-3 py-[2px] center gap-1 rounded-2xl text-b3 text-grayScale-500 bg-grayScale-25 font-semibold hover:bg-grayScale-100 hover:text-grayScale-600"
      onClick={() => {
        console.log("구현해야함!");
      }}
    >
      <Refresh />
      새로고침
    </button>
  );
};

export default RefreshButton;
