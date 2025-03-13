import VerifyHeader from "@/components/verify/VerifyHeader";
import Pagination from "@/components/common/control/Pagination";
import { useEffect } from "react";
import { HomeNtsTaxData, useDataTaxStore } from "@/stores/useVerifyStore";
import SuccessRevalidationModal from "@/components/common/modal/SuccessRevalidationModal";
import useModalStore from "@/stores/useModalStore";
import SearchConditionModal from "@/components/common/modal/SearchConditionModal";
import VerifyTable from "@/components/verify/VerifyTable";
import useConditionSearchStore from "@/stores/useConditionSearchStore";
import SuccessModal from "@/components/common/modal/SuccessModal";

const VerifyPage = () => {
  const { data, fetchData, currentStatus, currentPage, setCurrentPage } =
    useDataTaxStore();
  const {
    isSuccessSubmit,
    isSuccessRevalidationModalOpen,
    isSearchConditionOpen,
  } = useModalStore();
  const { isSearchMode, fetchSearchData } = useConditionSearchStore();

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);
  useEffect(() => {
    const fetchAndSetData = async () => {
      if (!isSearchMode) fetchData(currentPage, currentStatus);
      else {
        const data = await fetchSearchData(
          currentPage,
          "employee",
          currentStatus
        );
        useDataTaxStore.getState().setData(data as HomeNtsTaxData);
      }
    };
    fetchAndSetData();
  }, [currentPage, currentStatus, fetchData, isSearchMode, fetchSearchData]);

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-4 bg-grayScale-25">
      <VerifyHeader
        totalElements={data?.totalElements}
        successElements={data?.successElements}
        failedElements={data?.failedElements}
      />
      {data ? (
        <VerifyTable
          data={data.hometaxList ?? []}
          correctCount={data?.successElements}
          inCorrectCount={data?.failedElements}
        />
      ) : (
        <VerifyTable data={[]} />
      )}
      <Pagination
        totalPage={data?.totalPage || 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isSuccessRevalidationModalOpen && <SuccessRevalidationModal />}
      {isSearchConditionOpen && (
        <SearchConditionModal
          page={currentPage}
          status={currentStatus}
          userType="employee"
        />
      )}
      {isSuccessSubmit && <SuccessModal />}
    </div>
  );
};

export default VerifyPage;
