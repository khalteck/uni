import { useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import { useAppContext } from "../contexts/AppContext";

const StudentPayment = () => {
  const { userData } = useAppContext();

  const user = userData?.student_data;
  console.log(user);
  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] lg:pr-[330px] py-[80px] sm:py-[110px] bg-white flex flex-col gap-6 md:gap-12">
        {/* Heading */}
        <div className="w-full">
          <div className="flex gap-2 items-center text-black text-[1.5rem] font-medium">
            <h2>Payment</h2>
          </div>
        </div>

        <div className="w-full p-4 text-[.9rem] md:text-[1.2rem] bg-white border border-[#006701] text-[#006701] rounded-lg">
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-center">
              <p>Full Name:</p>
              <p className="font-bold">
                {user?.first_name} {user?.middle_name} {user?.last_name}
              </p>
            </li>
            <li className="flex gap-3 items-center">
              <p>Department:</p>
              <p className="font-bold">{user?.department}</p>
            </li>
            <li className="flex gap-3 items-center">
              <p>Matric No:</p>
              <p className="font-bold">{user?.matric_no}</p>
            </li>
            <li className="flex gap-3 items-center">
              <p>School Fees:</p>
              <p className="font-bold">{user?.is_paid ? "Paid" : "Unpaid"}</p>
            </li>
          </ul>
        </div>

        <div className="w-full min-h-[200px] bg-[#006701]/10 border border-[#006701] text-[#006701] rounded-lg flex flex-col gap-5 justify-center items-center">
          {/* <h3>You have not paid your school fees...</h3> */}
          <p>
            Total amount due:{" "}
            <span className="font-bold text-[1.5rem]">NGN 20, 000</span>
          </p>
          <button className="w-fit mx-auto border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer flex gap-2 items-center justify-center">
            <img
              alt="building"
              src="/images/icons8-payment-48.png"
              className="w-5 h-5"
            />
            Pay now
          </button>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default StudentPayment;
