import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage, openContact, toggleLoginMod, toggleRegMod } =
    useAppContext();

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
        <div className="w-[30%] h-full bg-[#fe7250] flex items-center justify-center">
          Follow us
        </div>
        <div className="w-[70%] h-full bg-[#135874] flex items-center justify-center">
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
            <img alt="" src="/images/logo.png" className="w-14 h-14" />
            <div className="font-bold text-[1.25rem] md:text-[1.75rem] text-[#135874]">
              Uni
            </div>
          </div>
        </Link>
        <nav className="flex items-center uppercase">
          <div className="h-[64px] flex items-center gap-3 lg:gap-8 mr-auto text-slate-700 text-[0.9rem]">
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/" && "font-bold text-[#fe7250]"
              } rounded-md hover:text-[#fe7250] hover:scale-[1.2] transition-all duration-300`}
            >
              Home
            </Link>
            <div
              onClick={toggleLoginMod}
              className={`cursor-pointer px-2 py-1 ${
                (currentPage === "/login" || currentPage === "/login-staff") &&
                "font-bold text-[#fe7250]"
              } rounded-md whitespace-nowrap hover:text-[#fe7250] hover:scale-[1.2] transition-all duration-300`}
            >
              Login
            </div>
            <div
              onClick={toggleRegMod}
              className={`cursor-pointer px-2 py-1 ${
                (currentPage === "/register" ||
                  currentPage === "/register-staff") &&
                "font-bold text-[#fe7250]"
              } rounded-md whitespace-nowrap hover:text-[#fe7250] hover:scale-[1.2] transition-all duration-300`}
            >
              Register
            </div>
            <div
              onClick={openContact}
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact" && "font-bold text-[#fe7250]"
              } rounded-md whitespace-nowrap hover:text-[#fe7250] hover:scale-[1.2] transition-all duration-300`}
            >
              Contact
            </div>
            <div className="w-fit h-full px-5 bg-[#fe7250] flex items-center justify-center font-bold text-white">
              ADMISSION OPEN
            </div>
            {/* <div
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact" && "bg-[#3b82f6] text-white"
              } rounded-md hover:bg-[#3b82f6] hover:text-white hover:translate-y-[6px] transition-all duration-300`}
            >
              Contact
            </div> */}
            {/* {!userData?.token && (
              <>
                <Link to="/login">
                  <div
                    className={`cursor-pointer px-2 py-1 ${
                      currentPage === "/login" && "bg-[#3b82f6] text-white"
                    } rounded-md hover:bg-[#3b82f6] hover:text-white hover:translate-y-[6px] transition-all duration-300`}
                  >
                    Login
                  </div>
                </Link>
                <Link to="/register">
                  <div
                    className={`cursor-pointer px-2 py-1 ${
                      currentPage === "/register" && "bg-[#3b82f6] text-white"
                    } rounded-md hover:bg-[#3b82f6] hover:text-white hover:translate-y-[6px] transition-all duration-300`}
                  >
                    Register
                  </div>
                </Link>
              </>
            )}
            {userData?.token && (
              <div
                onClick={toggleLogout}
                className="py-2 px-5 border-2 border-blue-500 bg-blue-400/30 flex gap-3 rounded-sm cursor-pointer relative"
              >
                <p className="whitespace-nowrap">Logged in:</p>
                <div className="flex gap-2">
                  <div className="text-blue-500 font-bold">
                    {userData?.first_name}
                  </div>
                  <img
                    alt=""
                    src="/images/icons8-sort-down-26.png"
                    className={`${
                      showLogout ? "rotate-180" : "rotate-0"
                    } w-4 h-4 transition-all duration-300`}
                  />
                </div>
                {showLogout && (
                  <ul className="w-full border absolute top-[65px] left-0 bg-white slide">
                    <li onClick={logout} className="p-4 hover:bg-blue-500/30">
                      Log out
                    </li>
                  </ul>
                )}
              </div>
            )} */}
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
            <img alt="" src="/images/logo.png" className="w-8 h-8" />
            <div className="font-bold text-[1.25rem] md:text-[1.75rem]">
              Uni
            </div>
          </div>{" "}
        </Link>
        {/* {userData?.token && (
          <div
            onClick={toggleOnOff}
            className="flex items-center border border-blue-500 rounded-full px-2 py-1 mr-3 text-[0.75rem]"
          >
            <img
              alt=""
              src="/images/icons8-user-67.png"
              className="w-5 h-5 mr-2"
            />
            <img
              alt=""
              src="/images/icons8-sort-down-26.png"
              className={`${
                showDrop ? "rotate-180" : "rotate-0"
              } w-3 h-3 transition-all duration-300`}
            />
            {showDrop && (
              <ul className="w-[180px] absolute top-[65px] right-0 text-[1rem] bg-white shadow-md slide">
                <li className="p-2 border-b border-slate-500 bg-blue-400/30 text-gray-600 flex gap-3 items-center">
                  <img
                    alt=""
                    src="/images/icons8-user-67.png"
                    className="w-5 h-5"
                  />
                  <p>
                    {userData?.is_medic && "Dr."} {userData?.first_name}
                  </p>
                </li>
                <li onClick={logout} className="p-2">
                  Log out
                </li>
              </ul>
            )}
          </div>
        )} */}
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
            <ul className="slide float-right w-full h-fit bg-[#135874] px-[30px] text-[1.3rem] text-white pt-[100px] pb-10 uppercase">
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
                <Link to="/register" onClick={hideDropdown}>
                  <div className="w-full">Register</div>
                </Link>
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

              {/* {userData?.token && (
              <li className="py-2 px-5 border-2 border-blue-500 bg-blue-400/30 flex gap-3 rounded-sm cursor-pointer">
                <div className="whitespace-nowrap">Logged in:</div>
                <div className="flex gap-2">
                  <div className="text-blue-500 font-bold">
                    {userData?.first_name}
                  </div>
                  <img
                    alt=""
                    src="/images/icons8-sort-down-26.png"
                    className="w-4 h-4"
                  />
                </div>
              </li>
            )} */}
            </ul>
          </div>
        )}
      </div>
      {/*mobile header */}

      {/* {loggedOut && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 p-4 flex justify-center items-center z-40 scale">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg p-5">
            <img
              alt=""
              src="/images/icons8-info-black-64.png"
              className="w-10 h-10"
            />
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Logged out!
            </h3>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
