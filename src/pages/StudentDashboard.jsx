import { useState } from "react";
import DocumentCard from "../components/DocumentCard";
import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import { useAppContext } from "../contexts/AppContext";

const StudentDashboard = () => {
  const { submitDoc, getRootProps, getInputProps } = useAppContext();
  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] lg:pr-[330px] py-[80px] sm:py-[110px] bg-white flex flex-col">
        {/* Heading */}
        <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6">
          <h2>All Documents</h2>
        </div>

        {/* Event container */}
        <div className="w-full lg:max-w-[85%] lg:min-w-[400px] grid grid-flow-row gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2 grid-auto-rows-auto">
          <DocumentCard />
          <DocumentCard />
          <DocumentCard />

          {/* {eventsData &&
            eventsData.map((item, index) => {
              return <EventCard item={item} key={index} />;
            })} */}
        </div>
        <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6 mt-14">
          <h2>Submit Documents</h2>
        </div>
        <form className="">
          <label htmlFor="doc_name" className="mb-1 font-medium text-[1.2rem]">
            Document Name
          </label>
          <div className="flex items-center border-2 py-2 px-3 mt-2 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="doc"
              id="doc_name"
              placeholder="Document Title/Name"
            />
          </div>
          <label
            htmlFor="profile_image"
            className="mb-1 font-medium text-[1.2rem]"
          >
            Profile image
          </label>
          <div
            {...getRootProps({
              className:
                "w-full bg-[#006701]/20 mb-4 mt-2 p-3 outline-none rounded-lg",
            })}
          >
            <input {...getInputProps()} />
            {submitDoc?.document ? (
              <p className="w-fit mx-auto border border-[#006701] py-1 px-5 rounded-md cursor-pointer">
                {submitDoc?.document.name}
              </p>
            ) : (
              <p className="w-fit mx-auto border border-[#006701] py-2 px-5 rounded-md cursor-pointer">
                Upload Document
              </p>
            )}
          </div>
          <div className="w-full text-center">
            <button className="w-1/2 mx-auto border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer">
              Submit
            </button>
          </div>
        </form>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default StudentDashboard;
