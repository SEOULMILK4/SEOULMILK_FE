interface InvoiceDetailsProps {
  data: {
    labels: string[];
    values: string[];
    secondaryLabels: string[];
    secondaryValues: string[];
  } | null;
}

const InvoiceDetails = ({ data }: InvoiceDetailsProps) => {
  // 데이터가 없는 경우 처리
  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-full bg-white border border-solid border-grayScale-200 h-[186px] rounded-lg flex">
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
            <div className="ml-[18px] mr-[26px] my-[7px] b5 flex flex-col gap-2">
              {data.values.map((value, index) => (
                <div key={index} className="flex items-center w-full h-7">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 b5 text-secondary-500">
        *홈택스로 검증한 필수데이터입니다.
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-full bg-white border border-solid border-grayScale-200 h-[186px] rounded-lg flex">
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
            <div className="ml-[18px] mr-[26px] my-[7px] b5 flex flex-col gap-2">
              {data.secondaryValues.map((value, index) => (
                <div key={index} className="flex items-center w-full h-7">
                  {value}
                </div>
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

export default InvoiceDetails;
