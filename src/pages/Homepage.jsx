import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  const { navigate, openContact, loader, toggleRegMod, loggedOut } =
    useAppContext();

  return (
    <>
      <Header />
      {loader && <Loader />}

      <div className="w-full h-[100vh] bg-home bg-cover bg-center overflow-x-hidden">
        <div className="overlay w-full h-[100vh] pt-[180px] md:pt-[260px] pb-8 lg:px-[15%] px-4 bg-gradient-to-b from-[#006701]/40 to-[#006701]/10 flex flex-col justify-between">
          <div className="first-section-text mr-auto text-white">
            <p className="text-[1.2rem] tracking-widest uppercase">
              WELCOME TO RegisPro
            </p>
            <h1 className="text-[1.7rem] font-bold uppercase md:text-[2rem] lg:text-[2.75rem]">
              education is the best <br /> key success to life!!
            </h1>
            <div className="pb-3 my-3 font-medium text-[0.95rem] md:text-[1.23rem] uppercase">
              <p>
                the foundation for achieving success <br /> in various aspects
                of life
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={toggleRegMod}
                className="text-sm bg-[#fdc901] px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] border-2 tracking-widest rounded-md transition-all duration-300"
              >
                Register
              </button>
              <button
                onClick={openContact}
                className="text-sm bg-transparent px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-white hover:border-[#fdc901] border-2 rounded-md transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center text-white">
            <div
              onClick={() => navigate("/login")}
              className="md:w-1/3 min-h-fit md:min-h-[120px] px-3 py-4 hover:bg-[#006701] bg-[#006701]/90 rounded-lg flex gap-4 hover:scale-[1.1] cursor-pointer transition-all duration-300"
            >
              <img
                alt=""
                src="/images/icons8-student-64.png"
                className="w-12 h-12"
              />
              <div>
                <h2 className="font-bold text-[1.25rem]">Student Dashboard</h2>
                <p className="font-light">
                  Login to the student <br /> dashboard
                </p>
              </div>
            </div>
            <div
              onClick={() => navigate("/login-staff")}
              className="md:w-1/3 min-h-fit md:min-h-[120px] px-3 py-4 hover:bg-[#fdc901] bg-[#fdc901]/90 rounded-lg flex gap-4 hover:scale-[1.1] cursor-pointer transition-all duration-300"
            >
              <img
                alt=""
                src="/images/icons8-reciept-64.png"
                className="w-12 h-12"
              />
              <div>
                <h2 className="font-bold text-[1.25rem]">Staff Dashboard</h2>
                <p className="font-light">
                  Login to the staff <br /> dashboard
                </p>
              </div>
            </div>
            <div
              onClick={toggleRegMod}
              className="w-1/3 min-h-[120px] px-3 py-4 hover:bg-[#006701] bg-[#006701]/90 rounded-lg md:flex gap-4 hover:scale-[1.1] cursor-pointer transition-all duration-300 hidden"
            >
              <img
                alt=""
                src="/images/icons8-sign-up-64.png"
                className="w-12 h-12"
              />
              <div>
                <h2 className="font-bold text-[1.25rem]">Register</h2>
                <p className="font-light">
                  Student & Staff <br /> Registration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />

      {loggedOut && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/40 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale">
            <h2 className="font-medium text-[1rem] lg:text-[1.5rem]">
              Logged Out!
            </h2>
            {/* <p className="text-[#006701] font-medium">Redirecting...</p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
