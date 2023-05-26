import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const {
    currentPage,
    openContact,
    toggleLoginMod,
    toggleRegMod,
    contactMod,
    loginMod,
    regMod,
    closeContact,
    studentLogin,
    staffLogin,
    studentReg,
    staffReg,
  } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  //to close the dropdown after clicking a link
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  //to show logout tray
  const [showLogout, setShowLogout] = useState(false);
  function toggleLogout() {
    setShowLogout((prev) => !prev);
  }

  // function toggleLogoutOff() {
  //   setShowLogout(false);
  // }

  const [showDrop, setShowDrop] = useState(false);

  function toggleOnOff() {
    setShowDrop((prev) => !prev);
  }

  return (
    <header>
      <div className="w-full h-[75px] flex justify-between fixed top-0 left-0">
        <div className="w-[30%] h-full bg-[#fdc901] flex items-center justify-center">
          Follow us
        </div>
        <div className="w-[70%] h-full bg-[#006701] flex items-center justify-center">
          Contact us
        </div>
      </div>
      {/* desktop header */}
      <div
        className={`sm:w-full md:w-full h-[64px] top-[15px] bg-white lg:px-[15%] px-12 fixed left-[50%] translate-x-[-50%] md:flex items-center z-30 hidden transition-all duration-500 shadow-md`}
      >
        <Link to="/" className="mr-auto">
          {/* <img alt="" src="/images/logo.png" className="w-28 h-20" /> */}
          <div className="flex items-center gap-2">
            <img alt="" src="/images/logo2.png" className="w-12 h-12" />
            <div className="font-bold text-[1.25rem] md:text-[1.75rem] text-[#006701]">
              RegisPro
            </div>
          </div>
        </Link>
        <nav className="flex items-center uppercase">
          <div className="h-[64px] flex items-center gap-3 lg:gap-8 mr-auto text-slate-700 text-[0.9rem]">
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/" && "font-bold text-[#fdc901]"
              } rounded-md hover:text-[#fdc901] hover:scale-[1.2] transition-all duration-300`}
            >
              Home
            </Link>
            <div
              onClick={toggleLoginMod}
              className={`cursor-pointer px-2 py-1 ${
                (currentPage === "/login" || currentPage === "/login-staff") &&
                "font-bold text-[#fdc901]"
              } rounded-md whitespace-nowrap hover:text-[#fdc901] hover:scale-[1.2] transition-all duration-300`}
            >
              Login
            </div>
            <div
              onClick={toggleRegMod}
              className={`cursor-pointer px-2 py-1 ${
                (currentPage === "/register" ||
                  currentPage === "/register-staff") &&
                "font-bold text-[#fdc901]"
              } rounded-md whitespace-nowrap hover:text-[#fdc901] hover:scale-[1.2] transition-all duration-300`}
            >
              Register
            </div>
            <div
              onClick={openContact}
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact" && "font-bold text-[#fdc901]"
              } rounded-md whitespace-nowrap hover:text-[#fdc901] hover:scale-[1.2] transition-all duration-300`}
            >
              Contact
            </div>
            <div className="w-fit h-full px-5 bg-[#fdc901] flex items-center justify-center font-bold text-white">
              ADMISSION OPEN
            </div>
          </div>
        </nav>
      </div>

      {/* mobile header */}
      <div
        className={`bg-white  md:hidden w-full h-[65px] px-6 fixed top-[12px] left-0 z-30 border-b-[0px] border-b-[#47a3b3] flex justify-between items-center shadow-md transition-all duration-500`}
      >
        <Link to="/" className="mr-auto">
          {/* <img alt="" src="/images/logo.png" className="w-16 h-auto" /> */}
          <div className="flex items-center gap-2">
            <img alt="" src="/images/logo2.png" className="w-7 h-7" />
            <div className="font-bold text-[1.25rem] md:text-[1.75rem]">
              RegisPro
            </div>
          </div>{" "}
        </Link>
        <img
          alt="hamburger"
          src="/images/icons8-menu-30.png"
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={handleClick}
        />

        {openMenu && (
          <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
            <img
              className="w-[30px] h-[30px] cursor-pointer mr-[25px] absolute top-[30px] right-[10px] text-white"
              alt=""
              src="/images/icons8-cancel-white-48.png"
              onClick={() => {
                setShowDrop(false);
                handleClick();
              }}
            />
            {/* <div
              onClick={hideDropdown}
              className="w-[35%] h-full float-left bg-transparent"
            ></div> */}
            <ul className="slide float-right w-full h-fit bg-[#006701] px-[30px] text-[1.3rem] text-white pt-[100px] pb-10 uppercase">
              <li className="my-4">
                <Link to="/" onClick={hideDropdown}>
                  <div className="w-full">Home</div>
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="/login"
                  onClick={() => {
                    hideDropdown();
                    toggleLoginMod();
                  }}
                >
                  <div className="w-full">Login</div>
                </Link>
              </li>
              <li className="my-4">
                <div
                  onClick={() => {
                    hideDropdown();
                    toggleRegMod();
                  }}
                >
                  <div className="w-full">Register</div>
                </div>
              </li>

              <li className="my-4">
                <div
                  onClick={() => {
                    hideDropdown();
                    openContact();
                  }}
                >
                  <div className="w-full">Contact</div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/*mobile header */}

      {contactMod && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/90 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale">
            <h2 className="font-bold text-[1.5rem]">Contact Us</h2>
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Email: regispro@email.com
            </h3>
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Call: 08112345678
            </h3>
            <button
              onClick={closeContact}
              className="text-sm bg-[#fdc901] px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] text-white border-2 tracking-widest rounded-md transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {loginMod && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/90 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale">
            <h2 className="font-bold text-[1.5rem]">Login</h2>
            <button
              onClick={studentLogin}
              className="w-full text-sm bg-transparent px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] text-[#006701] font-medium border-2 tracking-widest rounded-md transition-all duration-300"
            >
              Student login
            </button>
            <button
              onClick={staffLogin}
              className="w-full text-sm bg-transparent px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] text-[#006701] font-medium border-2 tracking-widest rounded-md transition-all duration-300"
            >
              Staff login
            </button>
            <button
              onClick={toggleLoginMod}
              className="text-sm bg-[#fdc901] px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] text-white border-2 tracking-widest rounded-md transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {regMod && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/90 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale">
            <h2 className="font-bold text-[1.5rem]">Register</h2>
            <button
              onClick={studentReg}
              className="w-full text-sm bg-transparent px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] text-[#006701] font-medium border-2 tracking-widest rounded-md transition-all duration-300"
            >
              Student Registration
            </button>
            <button
              onClick={staffReg}
              className="w-full text-sm bg-transparent px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] text-[#006701] font-medium border-2 tracking-widest rounded-md transition-all duration-300"
            >
              Staff Registration
            </button>
            <button
              onClick={toggleRegMod}
              className="text-sm bg-[#fdc901] px-10 py-3 uppercase hover:bg-[#fdc901]/30 border-[#fdc901] text-white border-2 tracking-widest rounded-md transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
