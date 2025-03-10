import Pagination from "@/components/common/control/Pagination";
import SearchConditionModal from "@/components/common/modal/SearchConditionModal";
import VerifyHeader from "@/components/verify/VerifyHeader";
import VerifyTable from "@/components/verify/VerifyTable";
import useModalStore from "@/stores/useModalStore";

const VerifyPage = () => {
  const { isSearchConditionOpen } = useModalStore();
  return (
    <div className="flex flex-col items-center w-full h-full gap-4 bg-grayScale-25">
      <VerifyHeader />
      <VerifyTable />
      {isSearchConditionOpen && <SearchConditionModal />}
      <Pagination totalPage={12} />
    </div>
  );
};

export default VerifyPage;
