import { useAppContext } from "../contexts/AppContext";

const itemCardStaff = ({ item, currentFile }) => {
  //   const { item } = useAppContext();

  const biodata = currentFile?.filter((file) => {
    return !file?.amount;
  })[0];

  return (
    <div className="w-full min-h-[550px] bg-white p-5 border border-[#006701] text-[#006701] rounded-lg flex flex-col gap-5">
      <div className="w-full flex justify-center items-center gap-3">
        <img alt="" src="/images/logo2.png" className="w-10 h-10" />
        <p className="font-bold text-[1.1rem]">RegisPro</p>
      </div>
      <div className="w-full py-3 relative text-center bg-[#006701]/50 text-white rounded-lg">
        <span className="font-bold text-[1.4rem]">Student Biodata</span>
      </div>
      <div className="w-fullrounded-lg flex flex-col gap-3 rounded-lg mb-auto">
        <p>
          Full name:{" "}
          <span className="font-bold text-[1rem]">
            {biodata?.first_name} {biodata?.middle_name} {biodata?.last_name}
          </span>
        </p>
        <p>
          Matric No:{" "}
          <span className="font-bold text-[1rem]">{biodata?.matric_no}</span>
        </p>
        <p>
          Email: <span className="font-bold text-[1rem]">{biodata?.email}</span>
        </p>
        <p>
          Department:{" "}
          <span className="font-bold text-[1rem]">{biodata?.department}</span>
        </p>
        <p>
          Date of Birth:{" "}
          <span className="font-bold text-[1rem]">
            {biodata?.date_of_birth}
          </span>
        </p>
        <p>
          Contact No:{" "}
          <span className="font-bold text-[1rem]">{biodata?.contact}</span>
        </p>
        <p>
          Address:{" "}
          <span className="font-bold text-[1rem]">
            {biodata?.student_address}
          </span>
        </p>
        <p>
          Next of Kin:{" "}
          <span className="font-bold text-[1rem]">{biodata?.next_of_kin}</span>
        </p>
        <p>
          Next of kin relationship:{" "}
          <span className="font-bold text-[1rem]">
            {biodata?.relationship_with_next_of_kin}
          </span>
        </p>
        <p>
          Next of kin contact:{" "}
          <span className="font-bold text-[1rem]">
            {biodata?.next_of_kin_contact}
          </span>
        </p>
      </div>
    </div>
  );
};

export default itemCardStaff;
