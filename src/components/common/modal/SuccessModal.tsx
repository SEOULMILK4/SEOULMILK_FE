import useModalStore from "@/stores/useModalStore";
import Tag from "../notification/Tag";
import Modal from "./Modal";

interface SuccessModalProps {
  count: number;
}

/**
 *
 * @param onClose - 모달을 닫는 함수
 * @param count - 요청 완료 건수
 * @returns
 */
const SuccessModal = ({ count }: SuccessModalProps) => {
  const { closeSuccessSubmit } = useModalStore();
  return (
    <Modal onClose={closeSuccessSubmit}>
      <div className="flex-col center gap-[10px] w-[314px]">
        <img
          src="/assets/icons/requestSuccess.svg"
          alt="success"
          className="mb-[6px]"
        />
        <span className="h2 text-grayScale-900">제출 완료</span>
        <div className="flex-col font-semibold center text-b2 text-grayScale-500">
          <div className="flex gap-[2px] items-center">
            세금계산서 <Tag text={`${count}건`} />을
          </div>
          성공적으로 본사에 제출했습니다.
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
