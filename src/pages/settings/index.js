import { Routes, Route } from "react-router-dom";
import General from "./general";
import Privacy from "./privacy";

const Settings = () => {
  return (
    <Routes>
      <Route path="general" element={<General />} />
      <Route path="privacy" element={<Privacy />} />
    </Routes>
  );
};
export default Settings;
