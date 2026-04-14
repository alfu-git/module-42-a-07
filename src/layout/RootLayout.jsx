import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <div>navbar</div>

      <Outlet />
      
      <div>footer</div>
    </div>
  );
};

export default RootLayout;
