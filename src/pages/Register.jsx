import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Register = () => {
  const {
    loader,
    formDataStudentReg,
    handleInputChange,
    handleFileChange,
    registerStudent,
    validationEror,
    setValidationEror,
    registerSuccess,
    setRegisterSuccess,
    regError,
  } = useAppContext();

  const navigate = useNavigate();

  const departmentOptions = [
    { id: 1, name: "Computer Science" },
    { id: 2, name: "Hospitality Management & Technology" },
    { id: 3, name: "Accounting" },
    { id: 4, name: "Office Technology Management" },
    { id: 5, name: "Mass Communication" },
    { id: 6, name: "Marketing" },
    { id: 7, name: "Civil Engineering" },
    { id: 8, name: "Mechanical Engineering" },
    { id: 9, name: "Electrical Engineering" },
    { id: 10, name: "Mechanical Engineering" },
    { id: 11, name: "Mathematics" },
    { id: 12, name: "Statistics" },
    { id: 13, name: "Computer Engineering" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDataStudentReg);

    if (
      formDataStudentReg?.first_name &&
      formDataStudentReg?.last_name &&
      formDataStudentReg?.middle_name &&
      formDataStudentReg?.address &&
      formDataStudentReg?.contact &&
      formDataStudentReg?.date_of_birth &&
      formDataStudentReg?.passport &&
      formDataStudentReg?.nok_name &&
      formDataStudentReg?.relationship &&
      formDataStudentReg?.nok_contact &&
      formDataStudentReg?.department &&
      formDataStudentReg?.email
    ) {
      await registerStudent();
      // setTimeout(() => {
      //   setRegisterSuccess(true);
      //   navigate("/login");
      // }, 3000);
    } else {
      setValidationEror(true);
    }
  };

  return (
    <>
      <Header />
      {loader && <Loader />}

      <div className="pt-[80px]">
        <div className="h-screen flex flex-col gap-6 md:gap-0 md:flex-row">
          <div className="flex w-full md:w-[40%] py-5 px-5 bg-gradient-to-tr from-[#006701] to-[#006701]/60 justify-start md:justify-around items-center">
            <div>
              <h1 className="text-white font-bold text-4xl font-sans">
                Regispro
              </h1>
              <p className="text-white mt-1">
                The foundation for achieving success
              </p>
              <Link to="/">
                <button className="block w-32 bg-white text-[#135874] mt-4 py-2  rounded-2xl font-bold mb-2">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-full md:w-[60%] justify-center items-center bg-white pt-10 pb-10 my-10">
            <form className="bg-white min-w-[300px] w-[50%]">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Student Registration
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-7">Welcome!</p>
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="text"
                id="first_name"
                value={formDataStudentReg.first_name}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="text"
                id="middle_name"
                value={formDataStudentReg.middle_name}
                onChange={handleInputChange}
                placeholder="Middle Name"
              />
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="text"
                id="last_name"
                value={formDataStudentReg.last_name}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="text"
                id="address"
                value={formDataStudentReg.address}
                onChange={handleInputChange}
                placeholder="Address"
              />
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="number"
                id="contact"
                value={formDataStudentReg.contact}
                onChange={handleInputChange}
                placeholder="Contact"
              />
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="date"
                id="date_of_birth"
                value={formDataStudentReg.date_of_birth}
                onChange={handleInputChange}
                placeholder="date of birth"
              />
              <label htmlFor="doc_file" className="mb-1">
                Upload Passport<span className="text-gray-500"> ( Image )</span>
              </label>
              <input
                id="passport"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
              />

              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="text"
                id="nok_name"
                value={formDataStudentReg.nok_name}
                onChange={handleInputChange}
                placeholder="Next of kin Name"
              />
              <select
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                id="relationship"
                value={formDataStudentReg.relationship}
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  Select Relationship
                </option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="number"
                id="nok_contact"
                value={formDataStudentReg.nok_contact}
                onChange={handleInputChange}
                placeholder="Next of Kin Contact"
              />
              <select
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                id="department"
                value={formDataStudentReg.department}
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  Select Department
                </option>
                {departmentOptions.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
              <input
                className="w-full border-2 py-2 px-3 rounded-2xl mb-4 outline-none"
                type="text"
                id="email"
                value={formDataStudentReg.email}
                onChange={handleInputChange}
                placeholder="Email"
              />

              {validationEror && (
                <div className="w-full p-2 border border-red-400 rounded-2xl text-[.85rem] bg-red-400/30">
                  Please fill all fields
                </div>
              )}
              {regError && (
                <div className="w-full p-2 border border-red-400 rounded-2xl text-[.85rem] bg-red-400/30">
                  {regError}
                </div>
              )}
              <button
                type="submit"
                onClick={handleSubmit}
                className="block w-full bg-[#fdc901] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Register
              </button>
              <span className="text-sm ml-2 cursor-pointer">
                Already registered?{" "}
                <Link to="/login" className="text-[#fdc901]">
                  Login
                </Link>
              </span>
            </form>
          </div>
        </div>{" "}
      </div>
      <ScrollToTop />

      {registerSuccess && (
        <div className="w-full h-full fixed top-0 left-0 bg-[#006701]/60 p-4 flex justify-center items-center z-40">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg border border-[#fdc901] p-5 scale">
            <h2 className="font-medium text-[1rem] lg:text-[1.5rem]">
              Student Registration Successfull
            </h2>
            <p className="text-[#006701] font-medium">Redirecting...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
