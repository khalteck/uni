import { Routes, Route } from "react-router-dom";
import "./output.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { useAppContext } from "./contexts/AppContext";
import Homepage from "./pages/Homepage";

const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const StaffReg = lazy(() => import("./pages/StaffReg"));
const StaffLogin = lazy(() => import("./pages/StaffLogin"));

function App() {
  const { userData } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        {/* <Route path="/about" element={<About />} />
        <Route
          path="/appointments"
          element={userData?.token ? <Appointments /> : <Login />}
        />
        <Route
          path="/doctor/:name"
          element={userData?.token ? <Doctor /> : <Login />}
        /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-staff" element={<StaffReg />} />
        <Route path="/login-staff" element={<StaffLogin />} />
      </Routes>
    </Suspense>
  );
}

export default App;
