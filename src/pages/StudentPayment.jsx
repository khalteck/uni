import { useState } from "react";
import DocRaw from "../components/DocRaw";
import DocumentCard from "../components/DocumentCard";
import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import { useAppContext } from "../contexts/AppContext";

const StudentPayment = () => {
  const { submitDoc, getRootProps, getInputProps, submittedDocs } =
    useAppContext();
  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] lg:pr-[330px] py-[80px] sm:py-[110px] bg-white flex flex-col gap-14">
        {/* Heading */}
        <div className="w-full">
          <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6">
            <h2>Payment</h2>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default StudentPayment;
