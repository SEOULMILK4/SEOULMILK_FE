import useModalStore from "@/stores/useModalStore";
import Modal from "./Modal";

const SearchConditionModal = () => {
  const { closeSearchCondition } = useModalStore();

  return (
    <Modal onClose={closeSearchCondition}>
      <div className="flex-col center gap-[10px] w-[493px] h-[517px]">
        <h1 className="h2 text-grayScale-900">조회 조건 설정</h1>
        <div>
          <div className="st3 text-grayScale-600">조회 기간</div>
          <div>
            <div>시작일</div>
          </div>
          <div>~</div>
          <div>
            <div>종료일</div>
          </div>
        </div>
        <div>
          <div className="st3 text-grayScale-600">공급자</div>
        </div>
        <div>
          <div className="st3 text-grayScale-600">공급 받는자</div>
        </div>
      </div>
    </Modal>
  );
};

export default SearchConditionModal;
