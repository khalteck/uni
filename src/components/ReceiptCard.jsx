import { useAppContext } from "../contexts/AppContext";

const ReceiptCard = () => {
  const { receipt } = useAppContext();

  return (
    <div className="w-full min-h-[550px] bg-white p-5 border border-[#006701] text-[#006701] rounded-lg flex flex-col gap-5">
      <div className="w-full flex justify-center items-center gap-3">
        <img alt="" src="/images/logo2.png" className="w-14 h-14" />
        <p className="font-bold text-[1.5rem]">RegisPro</p>
      </div>
      <div className="w-full py-5 relative border-b border-[#006701]/50">
        <span className="font-bold text-[1.4rem]">
          Receipt #{receipt?.txref?.slice(0, 6)}
        </span>
      </div>
      <div className="w-fullrounded-lg flex flex-col gap-3 rounded-lg mb-auto">
        <p>
          Student:{" "}
          <span className="font-bold text-[1rem]">
            {receipt?.name}- [{receipt?.matric_no}]
          </span>
        </p>
        <p>
          Email: <span className="font-bold text-[1rem]">{receipt?.email}</span>
        </p>
        <p>
          Department:{" "}
          <span className="font-bold text-[1rem]">{receipt?.department}</span>
        </p>
        <p>
          Payment Status:{" "}
          <span className="font-bold text-[1rem]">{receipt?.status}</span>
        </p>
        <p>
          Total amount paid:{" "}
          <span className="font-bold text-[1rem]">NGN {receipt?.amount}</span>
        </p>
        <p>
          Payment date:{" "}
          <span className="font-bold text-[1rem]">{receipt?.date}</span>
        </p>
        <p>
          Transaction Ref:{" "}
          <span className="font-bold text-[1rem]">{receipt?.txref}</span>
        </p>
      </div>
      <div className="w-fit px-3 bg-white rounded-lg text-center py-5 border border-[#006701]/50">
        <span className="font-bold text-[1.1rem]">
          Total Paid -{" "}
          <span className="font-bold md:text-[1.5rem] text-[1.25rem]">
            NGN {receipt?.amount}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ReceiptCard;
