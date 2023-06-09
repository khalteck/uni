import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const StaffLogin = () => {
  const {
    loader,
    regStaffSuccessData,
    loginSuccess,
    formDataStaffLogin,
    validationEror,
    loginError,
    setValidationEror,
    loginStaff,
    handleStaffLoginChange,
  } = useAppContext();

  // console.log("formDataStaffLogin", formDataStaffLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formDataStaffLogin?.staff_number && formDataStaffLogin?.password) {
      await loginStaff();
    } else {
      setValidationEror(true);
    }
  };

  // console.log(regStaffSuccessData);
  return (
    <>
      <Header />
      {loader && <Loader />}

      <div className="pt-[80px] md:pt-0">
        <div className="h-screen flex flex-col gap-6 md:gap-0 md:flex-row">
          <div className="flex w-full md:w-[40%] py-5 px-5 bg-gradient-to-tr from-[#006701] to-[#006701]/60 justify-start md:justify-around items-center">
            <div>
              <h1 className="text-white font-bold text-4xl font-sans">
                Regispro
              </h1>
              <p className="text-white mt-1">
                The foundation for achieving success
              </p>
              <Link to="/">
                <button className="block w-32 bg-white text-[#006701] mt-4 py-2  rounded-2xl font-bold mb-2">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-full md:w-[60%] justify-center items-center bg-white">
            <form className="bg-white">
              {regStaffSuccessData?.bursar_data && (
                <div className="w-full my-4 text-[#006701]">
                  <h3>Staff Registered!</h3>
                  <p>
                    Staff ID:{" "}
                    <span className="font-bold">
                      {regStaffSuccessData?.bursar_data?.staff_number}
                    </span>
                  </p>
                  <p>
                    Password: <span className="font-bold">Staff Surname</span>{" "}
                    (Case sensitive)
                  </p>
                </div>
              )}
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Staff Login
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-7">
                Welcome back!
              </p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  id="staff_number"
                  value={formDataStaffLogin.staff_number}
                  onChange={handleStaffLoginChange}
                  placeholder="Staff ID"
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  id="password"
                  value={formDataStaffLogin.password}
                  onChange={handleStaffLoginChange}
                  placeholder="Password"
                />
              </div>
              {validationEror && (
                <div className="w-full p-2 border border-red-400 rounded-2xl text-[.85rem] bg-red-400/30 mt-4">
                  Please fill all fields
                </div>
              )}
              {loginError && (
                <div className="w-full p-2 border border-red-400 rounded-2xl text-[.85rem] bg-red-400/30 mt-4">
                  {loginError}
                </div>
              )}
              <button
                onClick={handleSubmit}
                type="submit"
                className="block w-full bg-[#fdc901] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Login
              </button>
              <span className="text-sm ml-2 cursor-pointer">
                Not registered?{" "}
                <Link to="/register-staff" className="text-[#fdc901]">
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </div>{" "}
      </div>
      <ScrollToTop />

      {loginSuccess && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/60 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale">
            <h2 className="font-medium text-[1rem] lg:text-[1.5rem]">
              Staff Login Successfull
            </h2>
            <p className="text-[#006701] font-medium">Redirecting...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffLogin;
