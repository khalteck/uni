import { useState } from "react";

const StaffDocSign = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      <div className="min-w-[250px] bg-[#006701]/70 hover:border-[#fdc901] border-2 border-[#006701] p-3 flex flex-col justify-between rounded-lg text-white cursor-pointer">
        <div className="flex gap-3">
          <img
            alt=""
            src="/images/icons8-document-64.png"
            className="w-12 h-12"
          />
          <div>
            <p className="w-full text-[.85rem]">
              Student: <span className="font-medium">Funmi adams</span>
            </p>
            <p className="w-full text-[.85rem]">
              Document: <span className="font-medium">{item?.name}</span>
            </p>
            <div className={`mb-auto text-[.85rem]`}>
              <p>Date: 21-12-2023</p>
            </div>
          </div>
        </div>
      </div>
      <button
        // onClick={pay}
        className="w-fit bg-[#006701]/70 hover:opacity-70 border-[#fdc901] border text-white py-1 px-5 text-[.75rem] rounded-md cursor-pointer flex gap-2 items-center justify-center"
      >
        Sign
      </button>
    </div>
  );
};

export default StaffDocSign;
