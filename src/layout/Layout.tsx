import NavigationBar from "@/components/common/header/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Layout;
