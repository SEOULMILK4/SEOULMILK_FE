import useModalStore from "@/stores/useModalStore";
import UploadModal from "@/components/submit/modal/UploadModal";
import ConvertModal from "@/components/submit/modal/ConvertModal";
import CheckModal from "@/components/submit/modal/CheckModal";
import SubmitHeader from "@/components/submit/SubmitHeader";
import SubmitTable from "@/components/submit/SubmitTable";
import Pagination from "@/components/common/control/Pagination";
import SuccessModal from "@/components/common/modal/SuccessModal";
import { useEffect, useState } from "react";
import { getNtsTax } from "@/api/ntsTax";
import { NtsTax } from "@/types/ntsTax";

interface NtsTaxData {
  listSize: number;
  ntsTaxList: NtsTax[];
  successElements: number;
  failedElements: number;
  totalPage: number;
}

const SubmitPage = () => {
  const [data, setData] = useState<NtsTaxData | null>(null);
  const [isSuccess, setIsSuccess] = useState("SUCCESS");
  const [currentPage, setCurrentPage] = useState(1);
  const { isUploadOpen, isConvertOpen, isSaveCheckOpen, isSuccessSubmit } =
    useModalStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNtsTax(currentPage - 1, isSuccess);
      setData(response);
    };

    fetchData();
  }, [currentPage, isSuccess]);

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-4 bg-grayScale-25">
      <SubmitHeader
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        correctCount={data?.successElements || 0}
        inCorrectCount={data?.failedElements || 0}
      />
      {data ? (
        <SubmitTable data={data?.ntsTaxList ?? []} />
      ) : (
        <p>데이터 없음</p>
      )}
      <Pagination
        totalPage={data?.totalPage || 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isUploadOpen && <UploadModal />}
      {isConvertOpen && <ConvertModal />}
      {isSaveCheckOpen && <CheckModal count={13} />}
      {isSuccessSubmit && <SuccessModal count={13} />}
    </div>
  );
};

export default SubmitPage;
