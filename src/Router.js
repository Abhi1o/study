import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

import "./assets/scss/style.scss"

const Router = () => {
  return (
    <div className="main-wrapper">
        
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      
    </div>
  );
};

export default Router;
