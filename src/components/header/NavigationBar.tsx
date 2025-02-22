import { useLocation, useNavigate } from "react-router-dom";
import Upload from "@/assets/icons/upload.svg?react";
import File from "@/assets/icons/file.svg?react";
import Mail from "@/assets/icons/mail.svg?react";
import Clipboard from "@/assets/icons/clipboard.svg?react";
import FileSearch from "@/assets/icons/fileSearch.svg?react";

const navigationItem = [
  {
    text: "세금 계산서 업로드",
    url: "/upload",
    icon: Upload,
  },
  {
    text: "홈택스 검증결과",
    url: "/validation",
    icon: File,
  },
  {
    text: "지급결의서 요청",
    url: "/request",
    icon: Mail,
  },
  {
    text: "지급결의서 결재",
    url: "/approve",
    icon: Clipboard,
  },
  {
    text: "내역 통합 조회",
    url: "/history",
    icon: FileSearch,
  },
];

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (url: string) => {
    if (location.pathname === url) return;
    navigate(url);
  };

  console.log(location.pathname);
  return (
    <header className="w-full h-[70px] flex gap-10 p-5 items-center border-b border-b-grayScale-200">
      <img
        className="w-[110px] h-[30px]"
        src="/assets/logo.svg"
        alt="로고"
        onClick={() => {
          handleClick("/");
        }}
      />

      {navigationItem.map(({ text, url, icon: Icon }) => (
        <div
          key={text}
          className={`group flex items-center justify-center gap-2 px-5 py-3 hover:bg-grayScale-25 hover:rounded-xl text-grayScale-600 hover:text-grayScale-900
            ${location.pathname === url && "bg-grayScale-25 rounded-xl text-grayScale-900"}`}
          onClick={() => {
            handleClick(url);
          }}
        >
          <Icon />
          <span
            className={`${location.pathname === url ? "font-bold text-b1" : "text-b2 font-semibold group-hover:font-bold"}`}
          >
            {text}
          </span>
        </div>
      ))}
    </header>
  );
};

export default NavigationBar;
