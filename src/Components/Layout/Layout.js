import React from "react";
import "./Layout.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
