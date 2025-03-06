import Pagination from "@/components/common/control/Pagination";
import SubmitHeader from "@/components/verify/VerifyHeader";
import SubmitTable from "@/components/verify/VerifyTable";

const SubmitPage = () => {
  return (
    <div className="flex-col w-screen h-full center">
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
