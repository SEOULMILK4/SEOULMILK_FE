import Pagination from "@/components/common/control/Pagination";
import SubmitHeader from "@/components/submit/SubmitHeader";
import SubmitTable from "@/components/submit/SubmitTable";

const SubmitPage = () => {
  return (
    <div className="w-screen center flex-col h-full">
      <div className="w-[1240px] center flex-col mt-[35px]">
        <SubmitHeader />
        <div className="mt-4">
          <SubmitTable />
        </div>
        <div className="mt-8">
          <Pagination totalPage={12} />
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
