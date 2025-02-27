import NameTag from "../notification/NameTag";
import Modal from "./Modal";

interface SuccessModalProps {
  onClose: () => void;
  name: string;
  count: number;
}

/**
 *
 * @param onClose - 모달을 닫는 함수
 * @param name - 요청자의 이름
 * @param count - 요청 건수
 * @returns
 */
const SuccessModal = ({ onClose, name, count }: SuccessModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex-col center gap-[10px] w-[316px]">
        <img
          src="/assets/requestSuccess.svg"
          alt="success"
          className="mb-[6px]"
        />
        <span className="font-bold text-h2 text-grayScale-900">요청 완료</span>
        <div className="flex-col font-semibold center text-b2 text-grayScale-500">
          <div className="flex gap-[2px] items-center">
            <NameTag name={name} />
            에게
          </div>
          지급 결의 {count}건이 요청되었습니다.
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
