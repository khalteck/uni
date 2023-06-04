import { useState } from "react";

const StaffDocSign = ({ item }) => {
  const [signMod, setSignMod] = useState(false);
  function toggleMod() {
    setSignMod((prev) => !prev);
  }
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
        onClick={toggleMod}
        className="w-fit bg-[#006701]/70 hover:opacity-70 border-[#fdc901] border text-white py-1 px-5 text-[.75rem] rounded-md cursor-pointer flex gap-2 items-center justify-center"
      >
        Sign
      </button>

      {signMod && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/60 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] h-[150px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 relative scale">
            <div
              onClick={toggleMod}
              className="absolute top-3 right-3 bg-[#006701]/80 rounded-full cursor-pointer"
            >
              <img
                alt=""
                src="/images/icons8-cancel-white-48.png"
                className="w-7 h-7"
              />
            </div>
            <h2 className="text-[1rem] lg:text-[1.5rem]">
              Sign Funmi Adams' {item?.name}?
            </h2>
            <button
              // onClick={toggleMod}
              className="w-fit bg-[#006701]/70 hover:opacity-70 border-[#fdc901] border text-white py-2 px-8 rounded-md cursor-pointer flex gap-2 items-center justify-center"
            >
              Sign
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDocSign;
