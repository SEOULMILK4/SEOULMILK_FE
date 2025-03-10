import React, { ChangeEvent, useState, useEffect } from "react";

interface InvoiceDetailsProps {
  data: {
    labels: string[];
    values: string[];
    secondaryLabels: string[];
    secondaryValues: string[];
  } | null;
  onSave: (newData: {
    labels: string[];
    values: string[];
    secondaryLabels: string[];
    secondaryValues: string[];
  }) => void;
}

const EditableInvoiceDetails = ({ data: initialData, onSave }: InvoiceDetailsProps) => {
  // 초기 데이터를 내부 상태로 설정
  const [data, setData] = useState(initialData);

  // props에서 데이터가 변경되면 내부 상태 업데이트
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  // 값이 변경될 때 상태를 업데이트하는 함수
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (!data) return; // 데이터가 없는 경우 함수 종료
    const newValues = [...data.values];
    newValues[index] = event.target.value;
    setData({ ...data, values: newValues });
  };

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-full bg-white border border-solid border-secondary-500 h-[186px] rounded-lg flex">
          <div className="w-[174px]">
            <div className="ml-[18px] mr-[26px] my-[7px] b5 text-grayScale-600 flex flex-col gap-2">
              {data.labels.map((label, index) => (
                <div key={index} className="w-[130px] h-7 flex items-center">
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-l border-solid rounded-r-lg border-grayScale-200 bg-grayScale-25">
            <div className="ml-[7px] mr-[7px] my-[7px] b5 flex flex-col gap-2">
              {data.values.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-full px-[10px] border border-solid rounded h-7 bg-inherit border-grayScale-300 text-grayScale-900 focus:ring-1 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 b5 text-secondary-500">
        *홈택스로 검증한 필수데이터입니다.
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-full bg-white border border-solid border-secondary-500 h-[186px] rounded-lg flex">
          <div className="w-[174px]">
            <div className="ml-[18px] mr-[26px] my-[7px] b5 text-grayScale-600 flex flex-col gap-2">
              {data.secondaryLabels.map((label, index) => (
                <div key={index} className="w-[130px] h-7 flex items-center">
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-l border-solid rounded-r-lg border-grayScale-200 bg-grayScale-25">
            <div className="ml-[7px] mr-[7px] my-[7px] b5 flex flex-col gap-2">
              {data.secondaryValues.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-full border border-solid rounded px-[10px] h-7 bg-inherit border-grayScale-300 text-grayScale-900 focus:ring-1 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 b5 text-secondary-500">
        *잠깐! 잘 옮겨졌는지 확인해주세요.
      </div>
    </div>
  );
};

export default EditableInvoiceDetails;
