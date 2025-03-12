import { deleteNtsTaxIds, getAdminNtsTax } from "@/api/admin";
import AdminHubHeader from "@/components/adminHub/AdminHubHeader";
import AdminHubTable from "@/components/adminHub/AdminHubTable";
import Pagination from "@/components/common/control/Pagination";
import CheckModal from "@/components/submit/modal/CheckModal";
import { useAdminPickerStore } from "@/stores/useAdminStore";
import useModalStore from "@/stores/useModalStore";
import { NtsTaxHubData } from "@/types/ntsTax";
import { useEffect, useState } from "react";

const AdminHubPage = () => {
  const [data, setData] = useState<NtsTaxHubData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedItem, setCheckedItem] = useState<number[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const { currentStatus } = useAdminPickerStore();
  const { isSaveCheckOpen, closeSaveCheck } = useModalStore();

  const fetchData = async () => {
    const response = await getAdminNtsTax(currentPage - 1, currentStatus);
    if (response) {
      setData(response);
    }
  };

  const handleDelete = async () => {
    try {
      const success = await deleteNtsTaxIds(checkedItem);
      if (success) {
        closeSaveCheck();
        setCheckedItem([]);
        setIsAllChecked(false);
        setOpenInfo(false);
        fetchData();
        setData((prevData) =>
          prevData
            ? {
                ...prevData,
                ntsTaxList: prevData.ntsTaxList.filter(
                  (item) => !checkedItem.includes(item.ntsTaxId!)
                ),
              }
            : null
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      setCheckedItem([]);
      setIsAllChecked(false);
      setOpenInfo(false);
      closeSaveCheck();
      fetchData();
    } catch (error) {
      console.error("제출 실패:", error);
      return false;
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentStatus, currentPage]);

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-4 bg-grayScale-25">
      <AdminHubHeader
        totalCount={data?.totalCnt || 0}
        correctCount={data?.approvedCnt || 0}
        inCorrectCount={data?.rejectedCnt || 0}
        checkedItem={checkedItem}
      />
      {data ? (
        <AdminHubTable
          data={data?.ntsTaxList ?? []}
          checkedItem={checkedItem}
          setCheckedItem={setCheckedItem}
          totalCount={data.totalCnt}
          correctCount={data.approvedCnt}
          inCorrectCount={data.rejectedCnt}
          isAllChecked={isAllChecked}
          setIsAllChecked={setIsAllChecked}
          openInfo={openInfo}
          setOpenInfo={setOpenInfo}
        />
      ) : (
        <p>데이터 없음</p>
      )}
      <Pagination
        totalPage={data?.totalPage || 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isSaveCheckOpen && (
        <CheckModal
          count={checkedItem.length}
          onDelete={handleDelete}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default AdminHubPage;
