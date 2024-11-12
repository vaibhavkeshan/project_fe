import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Project.jsx";
import Scan from "./pages/Scan.jsx";
import SignIn from "./pages/SignIn.jsx";
import "./style/Pricing.css";
import "./style/Dashboard.css";
import "./style/Sidebar.css";
import "./style/hero.css";
import "./style/profile.css";
import "./style/scan.css";
import "./style/artWork.css";
import "./style/notFound.css";
import "./style/AdminSidebar.css";
import "./style/Profilesetting.css";
import "./style/dashboardAdmin.css";
import "./style/adminBuilder.css";
import "./style/article.css";
import "./components/Layout/layout.css";
import "./components/Layout/sidebar.css";

import Register from "./pages/Register.jsx";
import Forget from "./pages/Forget.jsx";
import UserDashboard from "./pages/Dashboard/UserDashboard.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import Profilesetting from "./pages/user/Profilesetting.jsx";
import UserProvider from "./context/UserProvider.js";
import { UserContext } from "./context/MyContext.js";
import ResetPassword from "./pages/ResetPassword.jsx";
import Pricing from "./pages/Pricing.jsx";

import { PrivateRoute } from "./routes/PrivateRoutes.js";
import { PrivateAuth } from "./routes/PrivateAuth.js";
import ProjectScan from "./pages/ProjectScan.jsx";
import NotFound from "./pages/NotFound.jsx";
import Builder from "./pages/Admin/Builder.jsx";
import { AdminRoute } from "./routes/AdminRoute.js";
import Users from "./pages/Admin/Users.jsx";
import AllProject from "./pages/Admin/AllProject.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Article from "./pages/Article";
import Privicy from "./pages/Policy/Privicy.jsx";
import Terms from "./pages/Policy/Terms.jsx";

function App() {
  const { handleLoad, authenticate } = useContext(UserContext);
  useEffect(() => {
    const loadData = async () => {
      await handleLoad();
    };
    loadData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const { authenticate, isUpdate, getAllProjectController } =
    useContext(UserContext);

  const [showHeader, setShowHeader] = useState(false);
  const [showScan, setShowscan] = useState(false);

  // Array of paths where the header should not be shown
  const pathsWithoutHeader = [
    "/",
    "/signin",
    "/register",
    "/contact",
    "/pricing",
    "/forgot-password",
    "/builder",
    "/dashboard/user",
    "/dashboard/project",
    "/dashboard/admindashboard",
    "/userdashboard",
    "/privicy",
    "/terms",
  ];
  const shouldShowHeader = !pathsWithoutHeader.includes(location.pathname);

  useEffect(() => {
    const pathname = window.location.pathname;
    setShowHeader(!pathname.startsWith("/resetpassword/"));
    setShowscan(!pathname.startsWith("/scan/"));
  }, [location]);
  useEffect(() => {
    const fetchProject = async () => {
      await getAllProjectController();
    };
    fetchProject();
  }, [isUpdate]);
  const combinedShowHeader = shouldShowHeader && showHeader && showScan;
  return (
    <>
      {combinedShowHeader && authenticate && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route element={<PrivateAuth />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forget />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profilesetting" element={<Profilesetting />} />
          <Route path="/project" element={<Profile />} />
        </Route>
        <Route path="/scan/:projectid" element={<Scan />} />
        <Route path="/privicy" element={<Privicy />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/projectbuild/:projectid" element={<ProjectScan />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route element={<AdminRoute />}>
          <Route path="/builder" element={<Builder />} />
          <Route path="/dashboard/user" element={<Users />} />
          <Route path="/dashboard/project" element={<AllProject />} />
          <Route
            path="/dashboard/admindashboard"
            element={<AdminDashboard />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
