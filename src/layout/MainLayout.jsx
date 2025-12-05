import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
      return (
            <div className="">
                 <div>
                   <Navbar/>
                 </div>
                  <div className="min-h-[calc(100vh-307px)]">
                        <Outlet/>
                  </div>
                  <div>
                        <Footer/>
                  </div>
            </div>
      );
};

export default MainLayout;