import { useState } from "react";
import CheckBox from "../common/control/CheckBox";
import SubmitTableItem from "./SubmitTableltem";
//import SubmitDrawer from "./SubmitDrawer";
import { NtsTax } from "@/types/ntsTax";

interface SubmitTabelProps {
  data: NtsTax[];
}

const SubmitTable = ({ data }: SubmitTabelProps) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );
  // const [selectedItem, setSelectedItem] = useState<NtsTax | null>(null);
  // const [drawerOpen, setDrawerOpen] = useState(false);

  const handleItemClick = (item: NtsTax) => {
    console.log(item);
    // setSelectedItem(item);
    // setDrawerOpen(true);
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setCheckedItems(new Array(data.length).fill(checked));
  };

  const handleItemCheck = (index: number, checked: boolean) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = checked;
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="w-[1240px] 3xl:w-[1560px] max-h-[597px] h-fit 3xl:max-h-[664px] 3xl:h-fit border border-solid border-grayScale-200 rounded bg-white overflow-y-auto overflow-x-hidden mb-[49px]">
      <div className="sticky top-0 flex flex-wrap h-10 text-left bg-white border-b border-solid border-grayScale-200 b5 text-grayScale-500">
        {/* 헤더 */}
        <div className="w-[34px] ml-[15px] flex items-center">
          <CheckBox
            checked={selectAll}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
        </div>
        <div className="w-[118px] 3xl:w-[200px] flex items-center">번호</div>
        <div className="w-[336px] 3xl:w-[400px] flex items-center">공급자</div>
        <div className="w-[300px] 3xl:w-[400px] flex items-center">
          공급 받는자
        </div>
        <div className="w-[174px] 3xl:w-[250px] flex items-center">
          작성일자
        </div>
        <div className="w-[164px] 3xl:w-[180px] flex items-center">
          공급가액
        </div>
        <div className="w-[61px] flex items-center text-center">변환 결과</div>
      </div>
      <div>
        {/* 테이블 항목 반복 */}
        <div className="w-[1220x] 3xl:w-[1560px] mb-[6px]">
          {data.map((item, index) => (
            <SubmitTableItem
              key={index}
              check={checkedItems[index]}
              number={item.ntsTaxId}
              supplier={item.suName}
              retailer={item.ipName}
              date={item.issueDate}
              amount={item.grandTotal}
              validationResult={item.isSuccess === "SUCCESS"}
              onCheckChange={(checked) => handleItemCheck(index, checked)}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>
      {/* <SubmitDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={selectedItem}
      /> */}
      {selectAll && (
        <div className="absolute top-[43px] left-1/2 transform -translate-x-1/2 flex px-5 py-[9px] bg-white rounded-xl shadow-[0px_3px_15px_0px_rgba(0,0,0,0.10),_0px_10px_30px_8px_rgba(0,0,0,0.05)] items-center">
          <img src="/assets/icons/info.svg" alt="info" className="mr-[6px]" />
          <p className="mr-2 b4 text-grayScale-700">
            이 페이지 있는 항목 {data.length}건이 모두 선택되었습니다.
          </p>
          <p className="b3 text-secondary-500">
            전체 {data.length}건 모두 선택
          </p>
        </div>
      )}
    </div>
  );
};

export default SubmitTable;
