import { Outlet } from "react-router";
import Navbar from "../components/landing/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
