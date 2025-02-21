import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Home/index";
import CaseManagement from "./pages/case-management";
import ITExpertManagement from "./pages/it-expert";
import AnalyticsReports from "./pages/analytics";
import UserManagement from "./pages/user-management";
import Notifications from "./pages/notifications";
import Settings from "./pages/settings";
import NotFound from "./pages/notFound"; // Optional 404 page
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pages/case-management" element={<CaseManagement />} />
            <Route path="/pages/it-expert" element={<ITExpertManagement />} />
            <Route path="/pages/analytics" element={<AnalyticsReports />} />
            <Route path="/pages/user-management" element={<UserManagement />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/pages/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all for unknown routes */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

