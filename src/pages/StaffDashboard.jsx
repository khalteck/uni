import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import DocumentCard from "../components/DocumentCard";
import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import Loader from "../components/Loader";
import StaffDocCard from "../components/StaffDocCard";
import { useAppContext } from "../contexts/AppContext";

const StaffDashboard = () => {
  const { loader, studentsList, docsReceived, userData, docsFromFirestore } =
    useAppContext();
  const user = userData?.bursar_data;
  // console.log("docsFromFirestore", docsFromFirestore);
  const navigate = useNavigate();

  //to handle registrations table pagination
  const [allStudentsPag, setallStudentsPag] = useState([]);
  useEffect(() => {
    setallStudentsPag(studentsList);
  }, [studentsList]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowPerPage = 10;
  const pagesVisited = pageNumber * rowPerPage;

  const displayRows = allStudentsPag
    ?.slice(pagesVisited, pagesVisited + rowPerPage)
    ?.map((item, index) => {
      return (
        <tr key={index}>
          <th className="border border-[#006701]/50 font-normal">
            {index + 1}
          </th>
          <th className="border border-[#006701]/50 font-normal">
            {item?.first_name} {item?.last_name}
          </th>
          <th className="border border-[#006701]/50 font-normal">
            {item?.matric_no}
          </th>
          <th className="border border-[#006701]/50 font-normal">
            {item?.department}
          </th>
        </tr>
      );
    });

  const pageCount = Math.ceil(allStudentsPag?.length / rowPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      {loader && <Loader />}

      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] py-[80px] sm:py-[110px] bg-white flex flex-col gap-10">
        <div className="w-full">
          <div className="flex gap-2 items-center text-black text-[1.5rem] mb-5 mt-8 font-medium">
            <h2>Documents Submitted for Review</h2>
          </div>
          <p className="mb-3">
            Welcome to your dashboard {user?.first_name}, <br /> you have{" "}
            {docsReceived?.length} submitted documents pending review...{" "}
          </p>
          {docsReceived?.length > 0 ? (
            <div className="w-full lg:min-w-[85%] grid grid-flow-row-dense gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#006701]/70 p-3 rounded-lg">
              {docsReceived?.map((item, index) => {
                return (
                  <StaffDocCard
                    item={item}
                    key={index}
                    docsFromFirestore={docsFromFirestore}
                  />
                );
              })}
            </div>
          ) : (
            <div className="w-full h-[100px] border border-[#006701]/70 rounded-lg flex justify-center items-center text-[#006701]/80">
              No submitted documents yet...
            </div>
          )}
          {docsReceived?.length > 0 && (
            <button
              onClick={() => navigate("/staff-review")}
              className="w-fit mx-auto mt-8 border border-[#006701] bg-[#006701]/70 hover:bg-[#006701]/50 text-white py-2 px-10 rounded-md cursor-pointer flex gap-2 items-center justify-center"
            >
              Take Action
            </button>
          )}
        </div>

        <div>
          {/* Heading */}
          <div className="flex gap-2 items-center text-black text-[1.5rem] mb-5 font-medium">
            <h2>All Registered Students</h2>
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden pb-3">
            {studentsList?.length < 1 ? (
              <div className="w-full min-h-[200px] border border-[#006701] rounded-xl flex justify-center items-center">
                No students yet..
              </div>
            ) : (
              <>
                <table className="w-full min-w-[900px] border border-[#006701]">
                  <thead>
                    <tr>
                      <th className="border border-[#006701]/50">S/N</th>
                      <th className="border border-[#006701]/50">Name</th>
                      <th className="border border-[#006701]/50">Matric No.</th>
                      <th className="border border-[#006701]/50">Department</th>
                    </tr>
                  </thead>
                  <tbody>{displayRows}</tbody>
                </table>
              </>
            )}
          </div>
          <div className="flex gap-2 justify-center">
            <ReactPaginate
              previousLabel={
                <img
                  alt="user"
                  src="/images/icons8-previous-50.png"
                  className="w-4 h-4 cursor-pointer rounded-lg hover:bg-[#006701]/30"
                />
              }
              nextLabel={
                <img
                  alt="user"
                  src="/images/icons8-next-50.png"
                  className="w-4 h-4 cursor-pointer rounded-lg hover:bg-[#006701]/30"
                />
              }
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                "h-6 flex items-center gap-2 mt-4 justify-end text-[.95rem] pag border border-[#006701] p-4 rounded-md"
              }
              activeClassName={"rounded-md bg-[#006701]/70 text-white"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
