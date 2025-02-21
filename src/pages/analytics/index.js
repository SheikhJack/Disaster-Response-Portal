import { Routes, Route } from "react-router-dom";
import Reports from "./reports";
import Trends from "./trends";

const AnalyticsReports = () => {
  return (
    <Routes>
      <Route path="reports" element={<Reports />} />
      <Route path="trends" element={<Trends />} />
    </Routes>
  );
};

export default AnalyticsReports;
