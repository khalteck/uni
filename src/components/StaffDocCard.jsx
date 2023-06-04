import { useState } from "react";

const StaffDocCard = () => {
  const [signed, setSigned] = useState(false);

  return (
    <div className="min-w-[250px] bg-[#006701]/70 p-3 flex flex-col justify-between rounded-lg text-white cursor-pointer">
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
            Document: <span className="font-medium">Course Form</span>
          </p>
          <div className={`mb-auto text-[.85rem]`}>
            <p>Date: 21-12-2023</p>
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
  );
};

export default StaffDocCard;
