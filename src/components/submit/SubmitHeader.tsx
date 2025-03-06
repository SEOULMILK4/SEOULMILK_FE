import Button from "../common/button/Button";
import HistoryPicker from "../common/control/HistoryPicker";
import Picker from "../common/control/Picker";

const SubmitHeader = () => {
  return (
    <div className="w-full">
      <h1 className="h1 text-grayScale-900">세금 계산서</h1>
      <div className="mt-[6px] flex justify-between">
        <div className="flex gap-2 items-end">
          <HistoryPicker />
          <Picker totalCount={314} correctCount={300} inCorrectCount={14} />
          <div className="w-[104px] h-8 center gap-1 text-grayScale-600 b3 cursor-pointer">
            <img src="/assets/icons/sliders.svg" alt="슬라이더"  width={24} height={24}/>
            조회 조건
          </div>
        </div>
        <div className="flex gap-4">
          <div className="b5 flex items-end text-grayScale-500">
            마지막 업데이트: 오늘 13:27
          </div>
          <div className="w-[137px] h-[50px] ">
            <Button size="medium" color="green" disabled={true}>
              <div className="exist-icon">
                <img src="/assets/icons/csvExport.svg" alt="csv추출" />
                <div>CSV 추출</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitHeader;
