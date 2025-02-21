import { Routes, Route } from "react-router-dom";
import Assign from "./assign";
import Manage from "./manage";
import Performance from "./perfomanceMonitoring";

const ITExpertManagement = () => {
  return (
    <Routes>
      <Route path="assign" element={<Assign />} />
      <Route path="manage" element={<Manage />} />
      <Route path="perfomance" element={<Performance />} />
    </Routes>
  );
};

export default ITExpertManagement;
