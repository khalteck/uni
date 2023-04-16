import { useState } from "react";

const DocumentCard = () => {
  const [signed, setSigned] = useState(false);

  return (
    <div className="min-w-[200px] min-h-[150px] max-w-full bg-[#006701]/70 pl-6 pr-4 py-4 flex flex-col justify-between rounded-lg text-white">
      <div className="flex gap-4">
        <img
          alt=""
          src="/images/icons8-document-64.png"
          className="w-12 h-12"
        />
        <div>
          <p className="w-full text-[1.5rem] font-bold">Course form</p>
          <div className={`mb-auto text-[.85rem]`}>
            <p>Submitted: 21-12-2023</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center mt-4">
        <img
          alt=""
          src="/images/icons8-clock-50.png"
          className="w-7 h-7 mr-2"
        />
        {signed ? (
          <div className="uppercase text-[1rem] font-bold">Signed</div>
        ) : (
          <div className="uppercase text-[1rem] font-bold">Under review</div>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;
