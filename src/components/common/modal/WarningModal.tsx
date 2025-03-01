import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

interface WarningModalProps {
  onClose: () => void;
}

/**
 *
 * @param onClose - 모달 닫는 함수
 * @returns
 */
const WarningModal = ({ onClose }: WarningModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal onClose={onClose}>
      <div className="flex-col center gap-[10px] w-[354px]">
        <img
          src="/assets/icons/warningFace.svg"
          alt="success"
          className="mb-[6px]"
        />
        <span className="font-bold text-h2 text-grayScale-900">
          공동인증서 만료
        </span>
        <p className="font-semibold text-center text-b2 text-grayScale-500">
          공동인증서가 만료되어 로그인이 해제 되었습니다. <br />
          관리자(02-0000-0000)에게 문의하세요.
        </p>
        <button
          className="w-full px-[22px] py-3 bg-secondary-500 rounded-lg text-b1 font-semibold text-white hover:bg-secondary-700 mt-[22px]"
          onClick={() => navigate("/home")}
        >
          메인 화면으로
        </button>
      </div>
    </Modal>
  );
};

export default WarningModal;
