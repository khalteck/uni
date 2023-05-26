import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const StaffLogin = () => {
  const { loader } = useAppContext();
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
                  name=""
                  id=""
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
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
              <button
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
    </>
  );
};

export default StaffLogin;
