import NavigationBar from "@/components/common/header/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // 이 부분 고쳐야함..!! 스크롤 생기는 것 싫어서 일단 둠
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Layout;
