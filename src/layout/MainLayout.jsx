import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
      return (
            <div className="inter">
                  <Navbar/>
                  <div className="h-[calc(100vh-219px + 88px)]">
                        <Outlet/>
                  </div>
                  <Footer/>
            </div>
      );
};

export default MainLayout;