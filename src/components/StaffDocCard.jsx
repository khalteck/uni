import { useState } from "react";
import BiodataCardStaff from "./BiodataCardStaff";
import ReceiptCardStaff from "./ReceiptCardStaff";

const StaffDocCard = ({ item, docsFromFirestore }) => {
  const [viewFile, setViewFile] = useState(false);
  function toggleView() {
    setViewFile((prev) => !prev);
  }

  const currentFile = docsFromFirestore?.filter((file) => {
    return file?.matric_no === item?.student_matric_no;
  });

  // console.log("currentFile", currentFile);

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
              Submitted by:{" "}
              <span className="font-medium">{item?.submitted_by}</span>
            </p>
            <p className="w-full text-[.85rem]">
              Document: <span className="font-medium">{item?.name}</span>
            </p>
            <div className={`mb-auto text-[.85rem]`}>
              <p>Date: {item?.date_submitted}</p>
            </div>
          </div>
        </div>
      </div>
      {viewFile && (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#006701]/60 px-4 py-[100px] flex justify-center items-start z-40 overflow-y-auto">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale relative">
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
              {item?.submitted_by}'s {item?.name}
            </h2>
            <div className="w-full mt-2">
              <div className="w-full mt-2">
                {item?.name === "School Fees Receipt" ? (
                  <div>
                    <ReceiptCardStaff item={item} currentFile={currentFile} />
                  </div>
                ) : (
                  <div>
                    <BiodataCardStaff item={item} currentFile={currentFile} />
                  </div>
                )}
              </div>
              {/* <FileDisplay filePath={item?.file} /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffDocCard;
