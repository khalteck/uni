import { useState } from "react";
import FileDisplay from "./FileDisplay";

const StaffDocCard = ({ item }) => {
  const [viewFile, setViewFile] = useState(false);
  function toggleView() {
    setViewFile((prev) => !prev);
  }
  return (
    <>
      {" "}
      <div
        onClick={toggleView}
        className="min-w-[250px] bg-[#006701]/70 hover:border-[#fdc901] border-2 border-[#006701] p-3 flex flex-col justify-between rounded-lg text-white cursor-pointer"
      >
        <div className="flex gap-3">
          <img
            alt=""
            src="/images/icons8-document-64.png"
            className="w-12 h-12"
          />
          <div>
            <p className="w-full text-[.85rem]">
              Submitted by: <span className="font-medium">Funmi adams</span>
            </p>
            <p className="w-full text-[.85rem]">
              Document: <span className="font-medium">{item?.name}</span>
            </p>
            <div className={`mb-auto text-[.85rem]`}>
              <p>Date: {item?.date_submitted}</p>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex justify-end items-center mt-4">
   <img
     alt=""
     src="/images/icons8-clock-50.png"
     className="w-7 h-7 mr-2"
   />
   {signed ? (
     <div className="uppercase text-[1rem] font-bold">Signed</div>
   ) : (
     <div className="uppercase text-[1rem] font-bold">Pending review</div>
   )}
 </div> */}
      </div>
      {viewFile && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/60 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] h-[600px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale relative">
            <div
              onClick={toggleView}
              className="absolute top-3 right-3 bg-[#006701]/80 rounded-full cursor-pointer"
            >
              <img
                alt=""
                src="/images/icons8-cancel-white-48.png"
                className="w-7 h-7"
              />
            </div>
            <h2 className="font-medium text-[1rem] lg:text-[1.5rem]">
              Funmi Adams' {item?.name}
            </h2>
            <div className="border border-green-600 w-full h-full mt-2">
              <FileDisplay filePath={item?.file} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffDocCard;
