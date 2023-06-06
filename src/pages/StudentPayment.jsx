import { useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import LeftSidebar from "../components/LeftSidebar";
import { useAppContext } from "../contexts/AppContext";
import { usePaystackPayment } from "react-paystack";
import ReceiptCard from "../components/ReceiptCard";
import Loader from "../components/Loader";

const StudentPayment = () => {
  const {
    userData,
    paid,
    setPaid,
    createDocs,
    receipt,
    bioData,
    loader,
    studentBio,
  } = useAppContext();

  console.log("receipt", receipt);
  // console.log("bioData", bioData);

  console.log("studentBio", studentBio);

  const user = userData?.student_data;

  const [payMod, setPayMod] = useState(false);
  function toggleMod() {
    setPayMod((prev) => !prev);
  }
  const price = "20000";

  //==================================== to handle payment
  // paystack integration
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: `test@gmail.com`, //user email
    amount: `${price}00`, //amount is in Kobo
    publicKey: "pk_test_c9e136db34c0d202081e2efdcb7d5c4d991d3bd6",
  };

  //to init paystack
  const initializePayment = usePaystackPayment(paystackConfig);

  //paystack functions
  const onSuccess = (transaction) => {
    console.log(transaction);
    setPaid(true);
    localStorage.setItem("paid", JSON.stringify(true));
    setPayMod(false);
    if (transaction) {
      createDocs(transaction);
    }
  };
  const onClose = () => {
    alert("Transaction was not completed, window closed.");
  };
  return (
    <>
      <LeftSidebar />
      <HeaderDashboard />
      {loader && <Loader />}

      <div className="w-full min-h-screen px-5 sm:pl-[230px] lg:pl-[280px] sm:pr-[30px] lg:pr-[330px] py-[80px] sm:py-[110px] bg-white flex flex-col gap-6 md:gap-12">
        {/* Heading */}
        <div className="w-full">
          <div className="flex gap-2 items-center text-black text-[1.5rem] font-medium">
            <h2>Payment</h2>
          </div>
        </div>

        <div className="w-full p-4 text-[.9rem] md:text-[1.2rem] bg-white border border-[#006701] text-[#006701] rounded-lg">
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-center">
              <p>Full Name:</p>
              <p className="font-bold">
                {user?.first_name} {user?.middle_name} {user?.last_name}
              </p>
            </li>
            <li className="flex gap-3 items-center">
              <p>Department:</p>
              <p className="font-bold">{user?.department}</p>
            </li>
            <li className="flex gap-3 items-center">
              <p>Matric No:</p>
              <p className="font-bold">{user?.matric_no}</p>
            </li>
            <li className="flex gap-3 items-center">
              <p>School Fees:</p>
              <p className="font-bold">{user?.is_paid ? "Paid" : "Unpaid"}</p>
            </li>
          </ul>
        </div>

        {!paid && (
          <div className="w-full min-h-[200px] bg-[#006701]/10 border border-[#006701] text-[#006701] rounded-lg flex flex-col gap-5 justify-center items-center">
            {/* <h3>You have not paid your school fees...</h3> */}
            <p>
              Total amount due:{" "}
              <span className="font-bold text-[1.5rem]">NGN {price}</span>
            </p>
            <button
              onClick={toggleMod}
              className="w-fit mx-auto border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer flex gap-2 items-center justify-center"
            >
              <img
                alt="building"
                src="/images/icons8-payment-48.png"
                className="w-5 h-5"
              />
              Pay fee
            </button>
          </div>
        )}

        {paid && (
          <div>
            <div className="w-full mb-4">
              <div className="flex gap-2 items-center text-black text-[1.5rem] font-medium">
                <h2>Payment Receipt</h2>
              </div>
              <p>You have paid your school fees!</p>
            </div>

            <ReceiptCard />

            <button
              // onClick={toggleMod}
              className="w-fit mx-auto mt-5 border border-[#006701] bg-[#006701]/70 text-white py-2 px-10 rounded-md cursor-pointer flex gap-2 items-center justify-center"
            >
              <img
                alt="building"
                src="/images/icons8-download-24.png"
                className="w-5 h-5"
              />
              Download Receipt
            </button>
          </div>
        )}

        {/* <Footer /> */}
      </div>

      {payMod && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/60 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] h-fit flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 relative scale">
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
              School fees payment
            </h2>
            <p>
              Total amount due:{" "}
              <span className="font-bold text-[1.5rem]">NGN 20, 000</span>
            </p>
            <button
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
              className="w-fit bg-[#006701]/70 hover:opacity-70 border-[#fdc901] border text-white py-2 px-8 rounded-md cursor-pointer flex gap-2 items-center justify-center"
            >
              Pay now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentPayment;
