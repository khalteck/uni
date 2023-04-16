import { useAppContext } from "../contexts/AppContext";

const LeftSidebar = () => {
  const { toggleDropBoard, openDropBoard } = useAppContext();
  return (
    <>
      {/* medium to large screens UI */}
      {/* medium to large screens UI */}
      {/* medium to large screens UI */}

      <div className="sm:w-[200px] lg:w-[250px] h-screen px-6 py-7 bg-[#006701] sm:text-[.8rem] lg:text-[1rem] fixed left-0 top-0 border-r-2 border-[#fdc901]/40 z-20 sm:flex flex-col hidden overflow-y-auto">
        {/* logo */}
        <div className="flex items-center gap-3">
          <img alt="" src="/images/logo2.png" className="w-10 h-10" />
          <h1 className="text-white h-fit"> RegisPro</h1>
        </div>

        {/* Dashboards */}
        <div className="mt-16">
          {/* Dashboards list */}
          <div className="flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300">
            <img
              alt="building"
              src="/images/icons8-dashboard-48.png"
              className="w-6 h-6"
            />

            <p className="text-white">Dashboard</p>
          </div>
        </div>
        <div className="mt-4">
          {/* Dashboards list */}
          <div className="flex gap-2 items-center cursor-pointer hover:bg-[#fdc901]/60 bg-[#fdc901]/30 p-2 rounded-md transition-all duration-300">
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
      {/* {openDropBoard && (
        <div className="w-[70%] h-screen pl-6 pr-4 py-5 bg-[#006701] fixed left-0 top-0 border-r-2 border-[#282929] z-30 flex flex-col sm:hidden slideR overflow-y-auto">
          <div className="mb-5 flex justify-between">
            <div
              onClick={toggleDropBoard}
              className="w-6 h-6 flex justify-center items-center bg-white/80 rounded-full cursor-pointer"
            >
              <img
                alt="user"
                src="/images/icons8-close-50.png"
                className="w-4 h-4"
              />
            </div>
            <img alt="user" src="/images/Sun.png" className="w-6 h-6" />
          </div>
          <div className="flex item-center gap-3">
            <img alt="user" src="/images/ByeWind.png" className="w-6 h-6" />
            <h1 className="text-white text-[.9rem] mr-auto">Versastyle Inc.</h1>
          </div>

          <nav className="mt-8">
            <div>
              <div className="flex gap-4 ">
                <p className="text-white/40 cursor-pointer">Favorites</p>
                <p className="text-white/20 cursor-pointer">Recently</p>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2 cursor-pointer">
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <p>Versastyle: Toronto</p>
              </div>
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2 cursor-pointer">
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <p>Versastyle: Regina</p>
              </div>
            </div>
          </nav>

          <nav className="mt-10">
            <div>
              <div className="">
                <p className="text-white/40">Dashboards</p>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2">
                <img
                  alt="arrow"
                  src="/images/ArrowDown.png"
                  className="w-4 h-4"
                />
                <div className="flex gap-2 items-center cursor-pointer">
                  <img
                    alt="building"
                    src="/images/Buildings.png"
                    className="w-5 h-5"
                  />

                  <p>Event Selection</p>
                </div>
              </div>
              <div className="text-white/80 text-[.9rem] mb-2 ml-14 cursor-pointer">
                <p>Add Event</p>
              </div>
            </div>
          </nav>

          <nav className="mt-10">
            <div>
              <div className="">
                <p className="text-white/40">Global Settings</p>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex gap-2 items-center text-white/80 text-[.9rem] mb-2">
                <img
                  alt="arrow"
                  src="/images/ArrowDown.png"
                  className="w-4 h-4"
                />
                <div className="flex gap-2 items-center cursor-pointer">
                  <img
                    alt="building"
                    src="/images/GearSix.png"
                    className="w-5 h-5"
                  />

                  <p>Settings</p>
                </div>
              </div>
            </div>
          </nav>
          <div className="w-full h-[200px] mb-auto"></div>

          <img
            alt="building"
            src="/images/Logo.png"
            className="w-[130px] h-auto"
          />
        </div>
      )}
      {openDropBoard && (
        <div
          onClick={toggleDropBoard}
          className="w-full h-screen block sm:hidden fixed left-0 top-0 bg-black/60 z-20 appear"
        ></div>
      )} */}
    </>
  );
};

export default LeftSidebar;
