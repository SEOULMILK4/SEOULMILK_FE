import useTaxInvoiceStore, { TaxInvoiceDetails } from "@/stores/useDrawerStore";

const EditableInvoiceDetails = () => {
  const { invoice, updateInvoice } = useTaxInvoiceStore(); // 스토어에서 데이터와 업데이트 함수 사용

  if (!invoice) {
    return <div className="my-4 text-center">데이터가 없습니다.</div>;
  }

  const handleInputChange = (field: keyof TaxInvoiceDetails, value: string) => {
    // 승인번호 입력 시, 8자리마다 '-'을 추가하는 로직
    if (field === "issueId") {
      value = value.replace(/\D/g, ""); // 숫자만 허용
      if (value.length > 8) {
        value = value.slice(0, 8); // 최대 8자리까지만 입력
      }
      value = value.replace(/(\d{4})(\d{4})/, "$1-$2"); // 8자리마다 '-' 추가
    }
    updateInvoice(field as keyof TaxInvoiceDetails, value); // Cast the field to keyof TaxInvoiceDetails
  };

  const primaryData = {
    labels: [
      "승인번호",
      "전자세금계산서 작성일자",
      "공급자 사업등록번호",
      "공급 받는자 사업자등록번호",
      "공급가액",
    ],
    fields: [
      "issueId",
      "issueAt",
      "suId",
      "ipId",
      "chargeTotal",
    ] as (keyof TaxInvoiceDetails)[],
    values: [
      invoice.issueId,
      invoice.issueAt,
      invoice.suId,
      invoice.ipId,
      invoice.chargeTotal,
    ],
    placeholders: [
      "승인번호를 입력하세요",
      "작성일자를 입력하세요",
      "공급자 사업등록번호를 입력하세요",
      "공급 받는자 사업자등록번호를 입력하세요",
      "공급가액을 입력하세요",
    ],
    validations: [
      (value: string) => value.trim() !== "", // 필수 입력
      (value: string) => /^[\d-]+$/.test(value), // 날짜 형식 검증 (예: yyyy-mm-dd)
      (value: string) => /^[0-9]{10}$/.test(value), // 사업자등록번호 (예: 10자리 숫자)
      (value: string) => /^[0-9]{10}$/.test(value), // 사업자등록번호 (예: 10자리 숫자)
      (value: string) => !isNaN(Number(value)) && Number(value) > 0, // 숫자만 허용
    ],
  };

  const secondaryData = {
    labels: ["총세액 합계", "합계금액", "매출매입구분", "생성일", "생성시간"],
    fields: [
      "taxTotal",
      "grandTotal",
      "ar",
      "createdDate",
      "createdTime",
    ] as (keyof TaxInvoiceDetails)[],
    values: [
      invoice.taxTotal,
      invoice.grandTotal,
      invoice.ar,
      invoice.createdDate,
      invoice.createdTime.slice(0, 5),
    ],
    placeholders: [
      "총세액 합계를 입력하세요",
      "합계금액을 입력하세요",
      "매출매입구분을 선택하세요",
      "", // 생성일은 static이므로 placeholder가 필요 없음
      "", // 생성시간은 static이므로 placeholder가 필요 없음
    ],
    validations: [
      (value: string) => !isNaN(Number(value)) && Number(value) > 0, // 총세액 합계는 숫자만 허용
      (value: string) => !isNaN(Number(value)) && Number(value) > 0, // 합계금액은 숫자만 허용
      (value: string) => value.trim() !== "", // 매출매입구분 필수 입력
      () => true, // 생성일은 static이므로 검증 필요 없음
      () => true, // 생성시간은 static이므로 검증 필요 없음
    ],
  };

  return (
    <div>
      {/* Primary Data Section */}
      <div className="flex items-center justify-center mt-4">
        <div className="w-full bg-white border border-solid border-grayScale-200 h-[186px] rounded-lg flex">
          <div className="w-[174px]">
            <div className="ml-[18px] mr-[26px] my-[7px] b5 text-grayScale-600 flex flex-col gap-2">
              {primaryData.labels.map((label, index) => (
                <div key={index} className="w-[130px] h-7 flex items-center">
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-l border-solid rounded-r-lg border-grayScale-200 bg-grayScale-25">
            <div className="ml-[18px] mr-[26px] my-[7px] b5 flex flex-col gap-2">
              {primaryData.fields.map((field, index) => (
                <div key={index} className="w-full flex flex-col gap-1">
                  <input
                    type="text"
                    value={primaryData.values[index]}
                    placeholder={primaryData.placeholders[index]}
                    onChange={(e) => {
                      const value = e.target.value;
                      const isValid = primaryData.validations[index](value);
                      if (isValid) {
                        handleInputChange(field, value);
                      } else {
                        alert(
                          `${primaryData.labels[index]} 입력이 유효하지 않습니다.`
                        );
                      }
                    }}
                    className="w-full px-[10px] border border-solid rounded h-7 bg-inherit border-grayScale-300 text-grayScale-900 focus:ring-1 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Data Section */}
      <div className="mt-2 b5 text-secondary-500">
        *홈택스로 검증한 필수데이터입니다.
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-full bg-white border border-solid border-grayScale-200 h-[186px] rounded-lg flex">
          <div className="w-[174px]">
            <div className="ml-[18px] mr-[26px] my-[7px] b5 text-grayScale-600 flex flex-col gap-2">
              {secondaryData.labels.map((label, index) => (
                <div key={index} className="w-[130px] h-7 flex items-center">
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-l border-solid rounded-r-lg border-grayScale-200 bg-grayScale-25">
            <div className="ml-[18px] mr-[26px] my-[7px] b5 flex flex-col gap-2">
              {secondaryData.fields.map((field, index) =>
                index >= 2 ? ( // From "매출매입구분" onwards, use static div instead of input
                  <div key={index} className="flex items-center w-full h-7">
                    {secondaryData.values[index]}
                  </div>
                ) : (
                  <input
                    key={index}
                    type="text"
                    value={secondaryData.values[index]}
                    placeholder={secondaryData.placeholders[index]}
                    onChange={(e) => {
                      const value = e.target.value;
                      const isValid = secondaryData.validations[index](value);
                      if (isValid) {
                        handleInputChange(field, value);
                      } else {
                        alert(
                          `${secondaryData.labels[index]} 입력이 유효하지 않습니다.`
                        );
                      }
                    }}
                    className="w-full px-[10px] border border-solid rounded h-7 bg-inherit border-grayScale-300 text-grayScale-900 focus:ring-1 focus:ring-secondary-500 focus:outline-none focus:caret-secondary-500"
                  />
                )
              )}
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
