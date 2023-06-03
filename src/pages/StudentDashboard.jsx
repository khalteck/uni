import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DocRaw from "../components/DocRaw";
import DocumentCard from "../components/DocumentCard";
import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";

const StudentDashboard = () => {
  const {
    submitDoc,
    getRootProps,
    getInputProps,
    submittedDocs,
    DocSubmitSuccess,
    handlesubmitDocChange,
    handleSubmitDoc,
    bursarsList,
    submitError,
    loader,
    userData,
  } = useAppContext();
  // console.log(userData);

  const user = userData?.student_data;
  const paid = user?.is_paid;

  const navigate = useNavigate();
  function pay() {
    navigate("/student-payment");
  }
  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      {loader && <Loader />}

      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] lg:pr-[330px] py-[80px] sm:py-[110px] bg-white flex flex-col gap-14">
        {/* Heading */}
        <div className="w-full">
          <div className="w-full p-4 text-[.9rem] md:text-[1.2rem] bg-white border border-[#006701] text-[#006701] rounded-lg mb-10">
            <h2 className="text-center font-bold text-[1.2rem] md:text-[1.5rem] mb-3">
              Student details
            </h2>
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

          <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6">
            <h2>All Documents</h2>
          </div>

          {/* Event container */}
          {paid ? (
            <div className="w-full lg:max-w-[85%] lg:min-w-[500px] grid grid-flow-row-dense gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2">
              <DocRaw />
              <DocRaw />
              <DocRaw />
            </div>
          ) : (
            <div className="w-full min-h-[200px] bg-[#006701]/10 border border-[#006701] text-[#006701] rounded-lg flex flex-col gap-5 justify-center items-center">
              <p>Pay your school fees, to gain access...</p>
              <button
                onClick={pay}
                className="w-fit mx-auto border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer flex gap-2 items-center justify-center"
              >
                <img
                  alt="building"
                  src="/images/icons8-payment-48.png"
                  className="w-5 h-5"
                />
                Pay school fess
              </button>
            </div>
          )}
        </div>

        {paid && (
          <div className="w-full">
            <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6">
              <h2>Submitted Documents</h2>
            </div>

            {/* Event container */}
            {submittedDocs?.length > 0 ? (
              <div className="w-full lg:max-w-[85%] lg:min-w-[500px] grid grid-flow-row-dense gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2">
                {submittedDocs?.map((item, index) => {
                  return <DocumentCard key={index} item={item} />;
                })}
              </div>
            ) : (
              <div className="w-full min-h-[200px] bg-[#006701]/10 border border-[#006701] text-[#006701] rounded-lg flex justify-center items-center">
                No submitted documents yet...
              </div>
            )}
          </div>
        )}
        <div className="w-full">
          <div className="flex gap-2 items-center text-black text-[1.5rem] mb-6">
            <h2>Submit Documents</h2>
          </div>
          {paid ? (
            <form className="w-full lg:max-w-[85%] lg:min-w-[400px]">
              <label
                htmlFor="doc_name"
                className="mb-1 font-medium text-[1.2rem]"
              >
                Document Name
              </label>
              <div className="flex items-center border-2 py-2 px-3 mt-2 rounded-2xl mb-4">
                <select
                  className="w-full p-2 outline-none border-none"
                  id="name"
                  onChange={handlesubmitDocChange}
                >
                  <option value="" hidden>
                    Select name
                  </option>
                  <option value="School Fees Receipt">
                    School Fees Receipt
                  </option>
                  <option value="Biodata">Biodata</option>
                  <option value="Course Form">Course Form</option>
                </select>
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
                {submitDoc?.file ? (
                  <p className="w-fit mx-auto border border-[#006701] py-1 px-5 rounded-md cursor-pointer">
                    {submitDoc?.file.name}
                  </p>
                ) : (
                  <p className="w-fit mx-auto border border-[#006701] py-2 px-5 rounded-md cursor-pointer">
                    Upload Document
                  </p>
                )}
              </div>
              {submitError && (
                <div className="w-full p-2 border border-red-400 rounded-lg text-[.85rem] bg-red-400/30 my-4">
                  {submitError}
                </div>
              )}{" "}
              <div className="w-full text-center">
                <button
                  onClick={pay}
                  className="w-1/2 mx-auto border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="w-full min-h-[200px] bg-[#006701]/10 border border-[#006701] text-[#006701] rounded-lg flex flex-col gap-5 justify-center items-center">
              <p>Submit document is unavailable...</p>
              <button
                onClick={(e) => handleSubmitDoc(e)}
                className="w-fit mx-auto border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer flex gap-2 items-center justify-center"
              >
                <img
                  alt="building"
                  src="/images/icons8-payment-48.png"
                  className="w-5 h-5"
                />
                Pay school fess
              </button>
            </div>
          )}
        </div>
        {/* <Footer /> */}
      </div>

      {DocSubmitSuccess && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/60 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale">
            <h2 className="font-medium text-[1rem] lg:text-[1.5rem]">
              Document submitted Successfully!
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentDashboard;
