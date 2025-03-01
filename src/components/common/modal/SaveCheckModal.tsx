import Button from "../button/Button";
import Modal from "./Modal";

interface SaveCheckModalProps {
  onClose: () => void;
}

const SaveCheckModal = ({ onClose }: SaveCheckModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="center flex-col w-[316px] gap-4">
        <img src="/assets/icons/saveCheckWarning.svg" alt="warning" />
        <span className="text-center st1 text-grayScale-900">
          진행 중인 작업이 저장되지 않아요.
          <br /> 그래도 나가시겠어요?
        </span>
        <div className="flex w-full gap-5 mt-4">
          <Button size="medium" color="gray">
            취소
          </Button>
          <Button size="medium" color="green">
            나가기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SaveCheckModal;
