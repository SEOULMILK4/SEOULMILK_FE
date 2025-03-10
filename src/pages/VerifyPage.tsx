import useModalStore from "@/stores/useModalStore";
import UploadModal from "@/components/submit/modal/UploadModal";
import ConvertModal from "@/components/submit/modal/ConvertModal";
import CheckModal from "@/components/submit/modal/CheckModal";
import VerifyHeader from "@/components/verify/VerifyHeader";
import Pagination from "@/components/common/control/Pagination";
import SuccessModal from "@/components/common/modal/SuccessModal";
import { useEffect, useState } from "react";
import { getEmployeeTax } from "@/api/employeeTax";
import { employeeTax } from "@/types/employeeTax";
import VerifyTable from "@/components/verify/VerifyTable";
import { useTaxStore } from "@/stores/useVerifyStore";

interface NtsTaxData {
  listSize: number;
  hometaxList: employeeTax[];
  successElements: number;
  totalElements: number;
  failedElements: number;
  totalPage: number;
}

const VerifyPage = () => {
  const [data, setData] = useState<NtsTaxData | null>(null);
  const currentStatus = useTaxStore((state) => state.currentStatus);
  const [currentPage, setCurrentPage] = useState(1);
  const { isUploadOpen, isConvertOpen, isSaveCheckOpen, isSuccessSubmit } =
    useModalStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployeeTax(currentPage - 1, currentStatus);
      setData(response);

      if (response) {
        console.log(data);
      }
    };

    fetchData();
  }, [currentPage, currentStatus]);

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-4 bg-grayScale-25">
      <VerifyHeader
        totalElements={data?.totalElements}
        successElements={data?.successElements}
        failedElements={data?.failedElements}
      />
      {data ? (
        <VerifyTable data={data?.hometaxList ?? []} />
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

export default VerifyPage;
