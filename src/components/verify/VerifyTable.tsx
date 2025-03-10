import { useState } from "react";
import CheckBox from "../common/control/CheckBox";
import VerifyTableItem from "./VerifyTableItem";
import VrifyDrawer from "../drawer/VerifyDrawer";
import { useDrawerStore } from "@/stores/useDrawerStore";

interface ItemData {
  number: number;
  supplier: string;
  retailer: string;
  date: string;
  amount: number;
  validationResult: boolean;
  newly: boolean;
  fileLink: string;
}

const tableData: ItemData[] = [
  {
    number: 1,
    supplier: "서울우유 대전 대리점",
    retailer: "부산 중구 갈매기 마트 서면점",
    date: "2025.02.25",
    amount: 9965000,
    validationResult: true,
    newly: true,
    fileLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    number: 2,
    supplier: "롯데마트 서울역점",
    retailer: "인천 미추홀구 청라 마트",
    date: "2025.02.26",
    amount: 12875000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://cdn013.negagea.net/dgsmidc/omr/seoul/web/univ_info2024/%ED%95%9C%EA%B5%AD%EA%B3%B5%ED%95%99%EB%8C%80%ED%95%99%EA%B5%90/%ED%95%9C%EA%B5%AD%EA%B3%B5%ED%95%99%EB%8C%80%ED%95%99%EA%B5%90_2025%ED%95%99%EB%85%84%EB%8F%84_%EC%88%98%EC%8B%9C%EB%AA%A8%EC%A7%91%EC%9A%94%EA%B0%95.pdf",
  },
  {
    number: 3,
    supplier: "GS25 서울 강남역점",
    retailer: "대구 북구 하이마트",
    date: "2025.02.27",
    amount: 7450000,
    validationResult: true,
    newly: true,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
  {
    number: 4,
    supplier: "CU 동대문점",
    retailer: "광주 서구 푸드마트",
    date: "2025.02.28",
    amount: 8900000,
    validationResult: false,
    newly: false,
    fileLink:
      "https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EB%A1%9C%EA%B3%A0#/media/%ED%8C%8C%EC%9D%BC:Google_2015_logo.svg",
  },
];

const VerifyTable = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(tableData.length).fill(false)
  );
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const { isVerifyDrawerOpen, openVerifyDrawer } = useDrawerStore();

  const handleItemClick = (item: ItemData) => {
    setSelectedItem(item);
    openVerifyDrawer();
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setCheckedItems(new Array(tableData.length).fill(checked));
  };

  const handleItemCheck = (index: number, checked: boolean) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = checked;
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="relative w-[1240px] 3xl:w-[1560px] h-[597px] 3xl:h-[644px] border border-solid border-grayScale-200 rounded bg-white overflow-y-auto overflow-x-hidden mb-[49px]">
      <div className="sticky top-0 flex flex-wrap h-10 text-left bg-white border-b border-solid border-grayScale-200 b5 text-grayScale-500">
        {/* 헤더 */}
        <div className="w-[34px] ml-[15px] flex items-center">
          <CheckBox
            checked={selectAll}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
        </div>
        <div className="w-[39px] 3xl:w-[50px] flex items-center">번호</div>
        <div className="min-w-[79px] flex items-center "></div>
        <div className="w-[336px] 3xl:w-[400px] flex items-center">공급자</div>
        <div className="w-[300px] 3xl:w-[400px] flex items-center">
          공급 받는자
        </div>
        <div className="w-[174px] 3xl:w-[250px] flex items-center">
          작성일자
        </div>
        <div className="w-[164px] 3xl:w-[250px] flex items-center">
          공급가액
        </div>
        <div className="w-[61px] flex items-center text-center">검증결과</div>
      </div>
      <div>
        {/* 테이블 항목 반복 */}
        <div className="w-[1220x] 3xl:w-[1560px]">
          {tableData.map((item, index) => (
            <VerifyTableItem
              key={index}
              check={checkedItems[index]}
              newly={item.newly}
              number={item.number}
              supplier={item.supplier}
              retailer={item.retailer}
              date={item.date}
              amount={item.amount}
              validationResult={item.validationResult}
              onCheckChange={(checked) => handleItemCheck(index, checked)}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>
      {isVerifyDrawerOpen && <VrifyDrawer data={selectedItem} />}
    </div>
  );
};

export default VerifyTable;
