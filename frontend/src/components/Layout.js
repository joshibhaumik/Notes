import React from "react";

import Header from "./HeaderComponent";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
