import { Routes, Route } from "react-router-dom";
import "./output.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { useAppContext } from "./contexts/AppContext";
import Homepage from "./pages/Homepage";
import StaffDashboard from "./pages/StaffDashboard";

const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const StudentPayment = lazy(() => import("./pages/StudentPayment"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const StaffReg = lazy(() => import("./pages/StaffReg"));
const StaffLogin = lazy(() => import("./pages/StaffLogin"));
const StaffReview = lazy(() => import("./pages/StaffReview"));

function App() {
  const { userData } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/student-dashboard"
          element={userData?.student_data ? <StudentDashboard /> : <Login />}
        />
        <Route
          path="/student-payment"
          element={userData?.student_data ? <StudentPayment /> : <Login />}
        />
        <Route
          path="/staff-dashboard"
          element={userData?.bursar_data ? <StaffDashboard /> : <StaffLogin />}
        />
        <Route
          path="/staff-review"
          element={userData?.bursar_data ? <StaffReview /> : <StaffLogin />}
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-staff" element={<StaffReg />} />
        <Route path="/login-staff" element={<StaffLogin />} />
      </Routes>
    </Suspense>
  );
}

export default App;
