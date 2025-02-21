import { Routes, Route } from "react-router-dom";
import Assign from "./assignmet";
import Categories from "./categories";
import Escalation from "./escalation";
import Requests from "./requests";
import Tracking from "./tracking";

const CaseManagement = () => {
  return (
    <Routes>
      <Route path="assign" element={<Assign />} />
      <Route path="categories" element={<Categories />} />
      <Route path="escalation" element={<Escalation />} />
      <Route path="requests" element={<Requests />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  );
};

export default CaseManagement;
