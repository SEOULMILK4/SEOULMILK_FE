import { navigationItems } from "@/constants/navigation";
import { roleNames, useUserStore } from "@/stores/useUserStore";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "../common/control/Dropdown";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role, name, profileImage } = useUserStore();
  const [openDropdown, setOpenDropdown] = useState(false);

  const filteredNavItems = navigationItems.filter((item) =>
    item.roles.includes(role)
  );

  const handleClick = (url: string) => {
    if (location.pathname === url) return;
    navigate(url);
  };

  return (
    <>
      <nav className="w-full h-[70px] flex gap-[10px] px-5 py-[15px] items-center bg-secondary-500">
        {filteredNavItems.map(({ text, url, icon: Icon }) => (
          <div
            key={text}
            className={`group flex items-center justify-center gap-2 px-5 py-3 hover:bg-secondary-600 hover:rounded-xl text-secondary-50 hover:text-white 
          ${location.pathname === url && "bg-secondary-300 rounded-xl text-white"}`}
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
      </nav>
      <header className="flex justify-between w-full px-[30px] py-2 border-b border-b-grayScale-200">
        <img
          src="/assets/logo.svg"
          alt="서울우유협동조합"
          onClick={() => handleClick("/")}
        />
        <div className="flex items-center gap-[10px]">
          <div className="px-3 py-[2px] border-secondary-500 border rounded-xl text-b5 font-medium text-secondary-500">
            {roleNames[role]}
          </div>
          <div></div>
          <div
            className={`relative flex gap-2 px-3 py-2 rounded-xl hover:bg-grayScale-50 ${location.pathname === "/my" && "bg-grayScale-50"}`}
            onClick={() => {
              setOpenDropdown((prev) => !prev);
            }}
          >
            <img
              className="w-6 h-6 rounded-full"
              src={profileImage ? profileImage : "/assets/profile.svg"}
              alt="마이페이지"
            />
            <span className="font-semibold text-b2 text-grayScale-500">
              {name}
            </span>
            <img src="/assets/toggle.svg" alt="toggle" />
            {openDropdown && (
              <Dropdown onClose={() => setOpenDropdown(false)} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
