// 路由配置

import React from "react";
import { Route, Routes } from "react-router-dom";

// 引入页面
import Graph from "../pages/Graph";
import Tools from "../pages/Tools";


function RouteConfig() {
  return (
    <Routes>
      <Route path="/graph" element={<Graph />} />
     
      <Route path="/tools/:id" element={<Tools />} />

      {/* <Route path="/jobs" element={<Jobs />} /> */}
    </Routes>
  );
}

export default RouteConfig;