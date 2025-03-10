import { useState } from "react";
import { useDrawerStore } from "@/stores/useDrawerStore";
import Drawer from "./Drawer";
import Button from "../common/button/Button";
import NotiMessage from "../common/notification/NotiMessage";
import InvoiceDetails from "../verify/InvoiceDetails";
import EditableInvoiceDetails from "../verify/EditableInvoiceDetails";

interface VerifyDrawerProps {
  data: {
    number: number;
    supplier: string;
    retailer: string;
    date: string;
    amount: number;
    validationResult: boolean;
    newly: boolean;
    fileLink: string; // Assuming this is where your link is stored
  } | null;
}

const VerifyDrawer = ({ data }: VerifyDrawerProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [invoiceData, setInvoiceData] = useState({
    labels: [
      "승인번호",
      "전자세금계산서 작성일자",
      "공급자 사업등록번호",
      "공급 받는자 사업자등록번호",
      "공급가액",
    ],
    values: [
      "20240680-41000005-78475918",
      "2024.06.30",
      "306-28-70320",
      "308-85-09085",
      "23,930,493",
    ],
    secondaryLabels: [
      "총세액 합계",
      "합계금액",
      "매출매입구분",
      "생성일",
      "생성시간",
    ],
    secondaryValues: ["23,179,824", "26,323,542", "AR", "2025.02.22", "13:00"],
  });
  const { closeVerifyDrawer, isVerifyDrawerOpen } = useDrawerStore();
  if (!data) return <div>No data available.</div>;

  const formattedNumber = data.number.toString().padStart(3, "0");
  const fileType = data.fileLink.endsWith(".pdf") ? "pdf" : "image";
  const fileURL = data.fileLink;

  const HandleEdit = () => {
    setIsEdit(true);
  };

  return (
    <Drawer onClose={closeVerifyDrawer}>
      <div
        className={`flex-col h-screen center drawer ${isVerifyDrawerOpen ? "open" : ""} relative`}
      >
        <div className="absolute w-[784px] p-3 center flex-col h-[562px] gap-[10px] -left-[820px] bg-white rounded-[14px]">
          {fileType === "image" ? (
            <img src={fileURL} alt="Document" className="w-full h-full" />
          ) : (
            <object
              data={fileURL}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                Your browser does not support PDFs.{" "}
                <a href={fileURL}>Download the PDF</a>.
              </p>
            </object>
          )}
          <div className="center gap-1 rounded-[8px] bg-grayScale-25 w-full h-8">
            <img src="/assets/icons/download.svg" alt="Download original" />
            원본 다운로드
          </div>
        </div>
        <div className="w-[421px]">
          <div>
            <div className="text-grayScale-400 b2">{formattedNumber}</div>
            <div className="h2">{data.supplier}</div>
            <div className="h2">{data.retailer}</div>
          </div>
          <div className="mt-10">
            {data.validationResult ? (
              <NotiMessage
                type="success"
                text="홈택스 검증결과, 발급된 사실이 있습니다. "
              />
            ) : (
              <NotiMessage type="error" text="No valid tax record found." />
            )}
          </div>
          {!isEdit ? (
            <InvoiceDetails data={invoiceData} />
          ) : (
            <EditableInvoiceDetails data={invoiceData} />
          )}

          {!data.validationResult && (
            <div className="flex gap-2 mt-[14px]">
              <Button size="medium" color="green" onClick={HandleEdit}>
                <div className="exist-icon">
                  <img src="/assets/icons/edit.svg" alt="Edit" />
                  {isEdit ? "저장" : "편집"}
                </div>
              </Button>
              <Button size="medium" color="black" disabled={isEdit}>
                <div className="exist-icon">
                  <img src="/assets/icons/checkVerified.svg" alt="Verify" />
                  홈택스 검증
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default VerifyDrawer;
