// components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Child routes will render here */}
      <Footer />
    </>
  );
}

export default Layout;
