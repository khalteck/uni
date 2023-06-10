import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const HeaderDashboard = () => {
  const { toggleNotifsBoard, toggleDropdown, userData, toggleSearch } =
    useAppContext();

  const user = userData?.student_data;
  const userStaff = userData?.bursar_data;

  const [openStudent, setOpenStudent] = useState(false);
  function toggleStudent() {
    setOpenStudent((prev) => !prev);
  }

  return (
    <>
      {/* desktop ui */}
      {/* desktop ui */}
      {/* desktop ui */}

      <header className="w-full text-white/80 py-6 sm:pl-[232px] lg:pl-[282px] pr-[50px] font-medium bg-[#006701] fixed left-0 top-0 border-b-2 border-[#fdc901]/40 hidden md:flex justify-between items-center z-10">
        <div className="flex lg:gap-4 md:gap-3 items-center mr-auto">
          <img
            alt="user"
            src="/images/icons8-dashboard-48.png"
            className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
          />
          {user ? (
            <h1 className="uppercase">Student Dashboard</h1>
          ) : (
            <h1 className="uppercase">Staff Dashboard</h1>
          )}
        </div>

        <div className="flex lg:gap-4 md:gap-3 items-center">
          {user ? (
            <h1 className="uppercase">
              {user?.first_name} {user?.last_name} - {user?.department} - [{" "}
              {user?.matric_no} ]
            </h1>
          ) : (
            <h1 className="uppercase">
              {userStaff?.first_name} {userStaff?.last_name} -{" "}
              {userStaff?.department} - [ {userStaff?.staff_number} ]
            </h1>
          )}
        </div>
      </header>

      {/* small screens ui */}
      {/* small screens ui */}
      {/* small screens ui */}

      <header className="w-full text-white/80 py-6 sm:pl-[225px] lg:pl-[282px] pr-[25px] lg:pr-[332px] bg-[#006701] fixed left-0 top-0 border-b-2 border-[#fdc901]/40 hidden sm:flex md:hidden items-center z-10">
        <div className="w-full flex gap-3 items-center mr-auto relative">
          <img
            alt="user"
            src="/images/icons8-dashboard-48.png"
            className="w-6 h-6 cursor-pointer"
          />

          {userData?.student_data ? (
            <h1 className="uppercase mr-auto">Student Dashboard</h1>
          ) : (
            <h1 className="uppercase mr-auto">Bursar Dashboard</h1>
          )}
          <div className="relative">
            <img
              onClick={toggleStudent}
              alt="user"
              src="/images/icons8-student-50.png"
              className="w-8 h-8 cursor-pointer"
            />
            {openStudent && (
              <div className="w-[200px] flex lg:gap-4 md:gap-3 items-center bg-[#006701] shadow absolute right-0 top-[60px] p-5 rounded-lg">
                {user ? (
                  <h1 className="uppercase">
                    {user?.first_name} {user?.last_name} <br /> [{" "}
                    {user?.matric_no} ] <br />
                    {user?.department}
                  </h1>
                ) : (
                  <h1 className="uppercase">
                    {userStaff?.first_name} {userStaff?.last_name} <br /> [{" "}
                    {userStaff?.staff_number} ] <br />
                    {userStaff?.department}
                  </h1>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile UI */}
      {/* Mobile UI */}
      {/* Mobile UI */}

      <header className="w-full text-white/80 py-4 px-5 bg-[#006701] fixed left-0 top-0 border-b-2 border-[#fdc901]/40 flex sm:hidden items-center z-10 transition-all duration-300">
        <img
          onClick={toggleDropdown}
          alt="user"
          src="/images/icons8-dashboard-48.png"
          className="w-6 h-6 cursor-pointer"
        />
        <div className="flex gap-3 items-center mx-auto">
          {userData?.student_data ? (
            <h1 className="uppercase mr-auto">Student Dashboard</h1>
          ) : (
            <h1 className="uppercase mr-auto">Bursar Dashboard</h1>
          )}
        </div>
        <div className="relative">
          <img
            onClick={toggleStudent}
            alt="user"
            src={
              user
                ? "/images/icons8-student-50.png"
                : "/images/icons8-staff-50.png"
            }
            className="w-7 h-7 cursor-pointer"
          />
          {openStudent && (
            <div className="w-[200px] text-[.85rem] flex lg:gap-4 md:gap-3 items-center bg-[#006701] shadow absolute right-0 top-[60px] p-5 rounded-lg">
              {user ? (
                <h1 className="uppercase">
                  {user?.first_name} {user?.last_name} <br /> [{" "}
                  {user?.matric_no} ] <br />
                  {user?.department}
                </h1>
              ) : (
                <h1 className="uppercase">
                  {userStaff?.first_name} {userStaff?.last_name} <br /> [{" "}
                  {userStaff?.staff_number} ] <br />
                  {userStaff?.department}
                </h1>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderDashboard;
