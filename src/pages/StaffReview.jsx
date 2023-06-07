import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import StaffDocSign from "../components/StaffDocSign";
import { useAppContext } from "../contexts/AppContext";

const StaffReview = () => {
  const { userData, docsReceived, bursarSgnature, docsFromFirestore } =
    useAppContext();
  // console.log("bursarSgnature", bursarSgnature);
  // console.log("docsReceived", docsReceived);

  const user = userData?.bursar_data;
  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] py-[80px] sm:py-[110px] bg-white flex flex-col gap-10">
        {/* Heading */}
        <div className="w-full">
          <div className="flex gap-2 items-center text-black text-[1.5rem] font-medium">
            <h2>Review Documents</h2>
          </div>
        </div>

        <div className="w-full">
          <p className="mb-3">
            Welcome to your review page {user?.first_name}, <br /> Here you can
            review and stamp/sign submitted documents.. <br />
            <br /> you have {docsReceived?.length} submitted documents pending
            review...{" "}
          </p>
          {docsReceived?.length > 0 ? (
            <div className="w-full lg:min-w-[85%] grid grid-flow-row-dense gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#006701]/70 p-3 rounded-lg">
              {docsReceived?.map((item, index) => {
                return (
                  <StaffDocSign
                    item={item}
                    key={index}
                    docsFromFirestore={docsFromFirestore}
                  />
                );
              })}
            </div>
          ) : (
            <div className="w-full h-[100px] border border-[#006701]/70 rounded-lg flex justify-center items-center text-[#006701]/80">
              No submitted documents yet...
            </div>
          )}
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default StaffReview;
