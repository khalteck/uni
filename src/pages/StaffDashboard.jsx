import { useState } from "react";
import DocumentCard from "../components/DocumentCard";
import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import Loader from "../components/Loader";
import StaffDocCard from "../components/StaffDocCard";
import { useAppContext } from "../contexts/AppContext";

const StaffDashboard = () => {
  const { loader, studentsList, submittedDocs } = useAppContext();
  //   console.log(deptStudentsList);
  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      {loader && <Loader />}

      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] lg:pr-[330px] py-[80px] sm:py-[110px] bg-white flex flex-col">
        {/* Heading */}
        <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6">
          <h2>All students</h2>
        </div>

        <div className="w-full lg:max-w-[85%] lg:min-w-[500px]">
          {studentsList?.length < 1 ? (
            <div className="w-full min-h-[200px] border border-[#006701] rounded-xl flex justify-center items-center">
              No students yet..
            </div>
          ) : (
            <table className="w-full border border-[#006701]">
              <thead>
                <tr>
                  <th className="border border-[#006701]/50">S/N</th>
                  <th className="border border-[#006701]/50">Name</th>
                  <th className="border border-[#006701]/50">Matric No.</th>
                  <th className="border border-[#006701]/50">Department</th>
                </tr>
              </thead>
              <tbody>
                {studentsList?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th className="border border-[#006701]/50 font-normal">
                        {index + 1}
                      </th>
                      <th className="border border-[#006701]/50 font-normal">
                        {item?.student_data?.first_name}{" "}
                        {item?.student_data?.last_name}
                      </th>
                      <th className="border border-[#006701]/50 font-normal">
                        {item?.student_data?.matric_no}
                      </th>
                      <th className="border border-[#006701]/50 font-normal">
                        {item?.student_data?.department}
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {/* {eventsData &&
            eventsData.map((item, index) => {
              return <EventCard item={item} key={index} />;
            })} */}
        </div>

        <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6 mt-12">
          <h2>All Documents</h2>
        </div>
        <div className="w-full lg:max-w-[85%] lg:min-w-[500px] grid grid-flow-row-dense gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2">
          <StaffDocCard />
          <StaffDocCard />
          <StaffDocCard />

          {/* {eventsData &&
            eventsData.map((item, index) => {
              return <EventCard item={item} key={index} />;
            })} */}
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
