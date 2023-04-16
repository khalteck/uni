import { useAppContext } from "../contexts/AppContext";

const HeaderDashboard = () => {
  const { toggleNotifsBoard, toggleDropBoard, openSearch, toggleSearch } =
    useAppContext();

  return (
    <>
      {/* desktop ui */}
      {/* desktop ui */}
      {/* desktop ui */}

      <header className="w-full text-white/80 py-6 sm:pl-[232px] lg:pl-[282px] pr-[32px] lg:pr-[332px] bg-[#006701] fixed left-0 top-0 border-b-2 border-[#fdc901]/40 hidden md:flex items-center z-10">
        <div className="flex lg:gap-4 md:gap-3 items-center mr-auto">
          <img
            alt="user"
            src="/images/icons8-dashboard-48.png"
            className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
          />
          <h1 className="uppercase">Student Dashboard</h1>
        </div>
      </header>

      {/* small screens ui */}
      {/* small screens ui */}
      {/* small screens ui */}

      <header className="w-full text-white/80 py-6 sm:pl-[225px] lg:pl-[282px] pr-[25px] lg:pr-[332px] bg-[#006701] fixed left-0 top-0 border-b-2 border-[#fdc901]/40 hidden sm:flex md:hidden items-center z-10">
        <div className="flex gap-3 items-center mr-auto">
          <img
            alt="user"
            src="/images/icons8-dashboard-48.png"
            className="w-6 h-6 cursor-pointer"
          />
          <h1 className="uppercase">Student Dashboard</h1>
        </div>
      </header>

      {/* Mobile UI */}
      {/* Mobile UI */}
      {/* Mobile UI */}

      <header className="w-full text-white/80 py-4 px-5 bg-[#006701] fixed left-0 top-0 border-b-2 border-[#fdc901]/40 flex sm:hidden items-center z-10 transition-all duration-300">
        <div className="flex gap-3 items-center mx-auto">
          <img
            alt="user"
            src="/images/icons8-dashboard-48.png"
            className="w-6 h-6 cursor-pointer"
          />
          <h1 className="uppercase">Student Dashboard</h1>
        </div>
      </header>
    </>
  );
};

export default HeaderDashboard;
