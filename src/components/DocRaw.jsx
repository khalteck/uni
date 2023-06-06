import { useState } from "react";
import BiodataCard from "./BiodataCard";
import FileDisplay from "./FileDisplay";
import ReceiptCard from "./ReceiptCard";

const DocRaw = ({ item }) => {
  const [viewFile, setViewFile] = useState(false);
  function toggleView() {
    setViewFile((prev) => !prev);
  }
  return (
    <>
      <div
        onClick={toggleView}
        className="min-w-[250px] bg-[#006701]/70 hover:border-[#fdc901] border-2 border-[#006701] cursor-pointer pl-6 pr-4 py-4 flex flex-col justify-between rounded-lg text-white"
      >
        <div className="flex gap-4">
          <img
            alt=""
            src="/images/icons8-document-64.png"
            className="w-12 h-12"
          />
          <div>
            <p className="w-full text-[1.5rem] font-bold">{item}</p>
            <div className={`mb-auto text-[.85rem]`}>
              <p>Created: 21-12-2023</p>
            </div>
          </div>
        </div>
      </div>
      {viewFile && (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#006701]/60 px-4 py-[100px] flex justify-center items-start z-40 overflow-y-auto">
          <div className="w-full sm:w-[550px] h-[700px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] px-5 pt-10 scale relative">
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
            {/* <h2 className="font-medium text-[1rem] lg:text-[1.5rem]">{item}</h2> */}
            <div className="w-full mt-2">
              {item === "Receipt" ? (
                <ReceiptCard />
              ) : item === "Biodata" ? (
                <BiodataCard />
              ) : null}
              {/* <FileDisplay filePath={item?.file} /> */}
            </div>
            <button
              // onClick={toggleMod}
              className="w-fit mx-auto border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer flex gap-2 items-center justify-center"
            >
              <img
                alt="building"
                src="/images/icons8-download-24.png"
                className="w-5 h-5"
              />
              Download {item}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DocRaw;
