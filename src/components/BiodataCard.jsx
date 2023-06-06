import { useAppContext } from "../contexts/AppContext";

const BiodataCard = () => {
  const { bioData } = useAppContext();

  return (
    <div className="w-full min-h-[550px] bg-white p-5 border border-[#006701] text-[#006701] rounded-lg flex flex-col gap-5">
      <div className="w-full flex justify-center items-center gap-3">
        <img alt="" src="/images/logo2.png" className="w-10 h-10" />
        <p className="font-bold text-[1.1rem]">RegisPro</p>
      </div>
      <div className="w-full py-3 relative text-center bg-[#006701]/50 text-white rounded-lg">
        <span className="font-bold text-[1.4rem]">My Biodata</span>
      </div>
      <div className="w-fullrounded-lg flex flex-col gap-3 rounded-lg mb-auto">
        <p>
          Full name:{" "}
          <span className="font-bold text-[1rem]">
            {bioData?.first_name} {bioData?.middle_name} {bioData?.last_name}
          </span>
        </p>
        <p>
          Matric No:{" "}
          <span className="font-bold text-[1rem]">{bioData?.matric_no}</span>
        </p>
        <p>
          Email: <span className="font-bold text-[1rem]">{bioData?.email}</span>
        </p>
        <p>
          Department:{" "}
          <span className="font-bold text-[1rem]">{bioData?.department}</span>
        </p>
        <p>
          Date of Birth:{" "}
          <span className="font-bold text-[1rem]">
            {bioData?.date_of_birth}
          </span>
        </p>
        <p>
          Contact No:{" "}
          <span className="font-bold text-[1rem]">{bioData?.contact}</span>
        </p>
        <p>
          Address:{" "}
          <span className="font-bold text-[1rem]">
            {bioData?.student_address}
          </span>
        </p>
        <p>
          Next of Kin:{" "}
          <span className="font-bold text-[1rem]">{bioData?.next_of_kin}</span>
        </p>
        <p>
          Next of kin relationship:{" "}
          <span className="font-bold text-[1rem]">
            {bioData?.relationship_with_next_of_kin}
          </span>
        </p>
        <p>
          Next of kin contact:{" "}
          <span className="font-bold text-[1rem]">
            {bioData?.next_of_kin_contact}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BiodataCard;
