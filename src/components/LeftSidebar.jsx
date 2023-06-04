import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const LeftSidebar = () => {
  const { logout, currentPage, openDropdown, toggleDropdown, userData } =
    useAppContext();
  return (
    <>
      {/* medium to large screens UI */}
      {/* medium to large screens UI */}
      {/* medium to large screens UI */}

      <div className="sm:w-[200px] lg:w-[250px] h-screen px-6 py-7 bg-[#006701] sm:text-[.8rem] lg:text-[1rem] fixed left-0 top-0 border-r-2 border-[#fdc901]/40 z-20 sm:flex flex-col hidden overflow-y-auto">
        {/* logo */}
        <div className="flex items-center gap-3">
          <img alt="" src="/images/logo2.png" className="w-10 h-10" />
          <h1 className="text-white h-fit">RegisPro</h1>
        </div>

        {/* Dashboards */}
        <Link
          to={
            userData?.student_data ? "/student-dashboard" : "/staff-dashboard"
          }
        >
          <div className="mt-16">
            <div
              className={`flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300 ${
                (currentPage === "/student-dashboard" ||
                  currentPage === "/staff-dashboard") &&
                "border border-[#fdc901]"
              }`}
            >
              <img
                alt="building"
                src="/images/icons8-dashboard-48.png"
                className="w-6 h-6"
              />

              <p className="text-white">Dashboard</p>
            </div>
          </div>
        </Link>

        <Link
          to={userData?.student_data ? "/student-payment" : "/staff-review"}
        >
          <div className="mt-4">
            <div
              className={`flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300 ${
                (currentPage === "/student-payment" ||
                  currentPage === "/staff-review") &&
                "border border-[#fdc901]"
              }`}
            >
              <img
                alt="building"
                src={
                  userData?.student_data
                    ? "/images/icons8-payment-48.png"
                    : "/images/icons8-stamp-50.png"
                }
                className="w-6 h-6"
              />

              <p className="text-white">
                {userData?.student_data ? "Payment" : "Review Docs"}
              </p>
            </div>
          </div>
        </Link>
        <div className="mt-4">
          <div
            onClick={logout}
            className={`flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300`}
          >
            <img
              alt="building"
              src="/images/icons8-log-out-64.png"
              className="w-6 h-6"
            />

            <p className="text-white">Log out</p>
          </div>
        </div>
      </div>

      {/* mobile and small screens UI */}
      {/* mobile and small screens UI */}
      {/* mobile and small screens UI */}

      {openDropdown && (
        <div className="w-[70%] h-screen pl-6 pr-4 py-5 bg-[#006701] fixed left-0 top-0 border-r-2 border-[#282929] z-30 flex flex-col sm:hidden slideR overflow-y-auto">
          {/* logo */}
          <div className="w-full flex items-center gap-3">
            <img alt="" src="/images/logo2.png" className="w-10 h-10" />
            <h1 className="text-white h-fit mr-auto"> RegisPro</h1>
            <img
              onClick={toggleDropdown}
              alt=""
              src="/images/icons8-cancel-white-48.png"
              className="w-7 h-7"
            />
          </div>

          {/* Dashboards */}
          <Link
            onClick={toggleDropdown}
            to={
              userData?.student_data ? "/student-dashboard" : "/staff-dashboard"
            }
          >
            <div className="mt-16">
              <div
                className={`flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300 ${
                  (currentPage === "/student-dashboard" ||
                    currentPage === "/staff-dashboard") &&
                  "border border-[#fdc901]"
                }`}
              >
                <img
                  alt="building"
                  src="/images/icons8-dashboard-48.png"
                  className="w-6 h-6"
                />

                <p className="text-white">Dashboard</p>
              </div>
            </div>
          </Link>

          <Link
            onClick={toggleDropdown}
            to={userData?.student_data ? "/student-payment" : "/staff-review"}
          >
            <div className="mt-4">
              <div
                className={`flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300 ${
                  (currentPage === "/student-payment" ||
                    currentPage === "/staff-review") &&
                  "border border-[#fdc901]"
                }`}
              >
                <img
                  alt="building"
                  src={
                    userData?.student_data
                      ? "/images/icons8-payment-48.png"
                      : "/images/icons8-stamp-50.png"
                  }
                  className="w-6 h-6"
                />

                <p className="text-white">
                  {userData?.student_data ? "Payment" : "Review Docs"}
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-4">
            <div
              onClick={logout}
              className={`flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300`}
            >
              <img
                alt="building"
                src="/images/icons8-log-out-64.png"
                className="w-6 h-6"
              />

              <p className="text-white">Log out</p>
            </div>
          </div>
        </div>
      )}
      {openDropdown && (
        <div
          onClick={toggleDropdown}
          className="w-full h-screen block sm:hidden fixed left-0 top-0 bg-black/60 z-20 appear"
        ></div>
      )}
    </>
  );
};

export default LeftSidebar;
