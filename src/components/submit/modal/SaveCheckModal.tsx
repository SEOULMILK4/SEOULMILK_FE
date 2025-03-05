import Button from "@/components/common/button/Button";
import Modal from "@/components/common/modal/Modal";
import Tag from "@/components/common/notification/Tag";
import useModalStore from "@/stores/useModalStore";

interface SaveCheckModalProps {
  count: number;
}

/**
 *
 * @param count - 세금 계산서 제출 건수
 * @returns
 */
const SaveCheckModal = ({ count }: SaveCheckModalProps) => {
  const { closeSaveCheck } = useModalStore();
  return (
    <Modal>
      <div className="center flex-col w-[407px] gap-2">
        <img src="/assets/icons/saveCheckWarning.svg" alt="warning" />
        <span className="text-center h2 text-grayScale-900">
          세금 계산서 제출
        </span>
        <div className="flex items-center gap-1 text-grayScale-600 st4">
          <Tag text={`${count}건`} />을 정말 제출하시겠습니까?
        </div>
        <div className="flex w-full gap-2 mt-6">
          <Button size="large" color="gray" onClick={closeSaveCheck}>
            취소
          </Button>
          <Button size="large" color="green">
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SaveCheckModal;
