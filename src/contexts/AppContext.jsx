import Compressor from "compressorjs";
import { createContext, useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  let navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [contactMod, setContactMod] = useState(false);
  function openContact() {
    setContactMod(true);
  }
  function closeContact() {
    setContactMod(false);
  }

  const [loginMod, setLoginMod] = useState(false);
  function toggleLoginMod() {
    setLoginMod((prev) => !prev);
  }

  function studentLogin() {
    navigate("/login");
    toggleLoginMod();
  }
  function staffLogin() {
    navigate("/login-staff");
    toggleLoginMod();
  }

  const [regMod, setRegMod] = useState(false);
  function toggleRegMod() {
    setRegMod((prev) => !prev);
  }

  function studentReg() {
    navigate("register");
    toggleRegMod();
  }
  function staffReg() {
    navigate("/register-staff");
    toggleRegMod();
  }

  const [openSearch, setOpenSearch] = useState(false);
  function toggleSearch() {
    setOpenSearch((prev) => !prev);
  }

  const [submitDoc, setSubmitDoc] = useState({
    doc_name: "",
    document: null,
  });
  // console.log(submitDoc);

  function handlesubmitDocChange(event) {
    const { id, value } = event.target;
    setSubmitError("");
    setSubmitDoc((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSubmitDoc({
      ...submitDoc,
      document: file,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "*",
    multiple: false,
    onDrop: handleDrop,
  });

  const [validationEror, setValidationEror] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  //to register student
  const [formDataStudentReg, setFormDataStudentReg] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    address: "",
    contact: "",
    date_of_birth: "",
    passport: {},
    nok_name: "",
    relationship: "",
    nok_contact: "",
    department: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValidationEror(false);
    setFormDataStudentReg((prevFormDataStudentReg) => ({
      ...prevFormDataStudentReg,
      [id]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setValidationEror(false);
    setFormDataStudentReg((prev) => {
      return {
        ...prev,
        passport: file,
      };
    });
  };

  const [registerSuccessData, setRegisterSuccessData] = useState({});

  const registerStudent = async () => {
    setLoader(true);
    try {
      const form = new FormData();
      form.append("first_name", formDataStudentReg.first_name);
      form.append("middle_name", formDataStudentReg.middle_name);
      form.append("last_name", formDataStudentReg.last_name);
      form.append("address", formDataStudentReg.address);
      form.append("contact", formDataStudentReg.contact);
      form.append("date_of_birth", formDataStudentReg.date_of_birth);
      form.append("passport", formDataStudentReg.passport);
      form.append("nok_name", formDataStudentReg.nok_name);
      form.append("relationship", formDataStudentReg.relationship);
      form.append("nok_contact", formDataStudentReg.nok_contact);
      form.append("department", formDataStudentReg.department);
      form.append("email", formDataStudentReg.email);

      const response = await fetch(
        "https://student-management-system-production-54cf.up.railway.app/api/conn/register/student",
        {
          method: "POST",
          body: form,
        }
      );

      if (response?.ok) {
        console.log("Registration successful");
        const data = response?.json();
        setRegisterSuccessData(await data);
        return data;
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    } finally {
      setLoader(false);
    }
  };

  //to register student
  const [formDataStudentLogin, setFormDataStudentLogin] = useState({
    matric_number: "",
    password: "",
  });

  const handleLoginInputChange = (e) => {
    const { id, value } = e.target;
    setValidationEror(false);
    setFormDataStudentLogin((prevFormDataStudentLogin) => ({
      ...prevFormDataStudentLogin,
      [id]: value,
    }));
  };

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );
  //to send student login data to endpoint
  const loginStudent = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://student-management-system-production-54cf.up.railway.app/api/conn/login/student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataStudentLogin),
        }
      );
      if (response?.ok) {
        const data = response?.json();
        localStorage.setItem("userData", JSON.stringify(await data));
        setUserData(await data);
        // console.log("data =>", await data);
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    } finally {
      setLoader(false);
    }
  };

  //to get all students
  const [studentsList, setStudentsList] = useState([]);
  // console.log("students list => ", studentsList);

  useEffect(() => {
    const getstudentsList = async () => {
      setLoader(true);
      try {
        const response = await fetch(
          "https://student-management-system-production-54cf.up.railway.app/api/conn/all/student?page=1"
        );
        const data = await response?.json();
        setStudentsList(data?.yct_students);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    getstudentsList();
  }, [registerSuccessData]);

  //to get all students in a department
  // const [deptStudentsList, setDeptStudentsList] = useState([]);
  // // console.log("students list => ", deptStudentsList);

  // useEffect(() => {
  //   const getdeptStudentsList = async () => {
  //     setLoader(true);
  //     try {
  //       const token = userData?.token;
  //       const response = await fetch(
  //         "https://student-management-system-production-54cf.up.railway.app/api/conn/my/students",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       const data = await response?.json();
  //       setDeptStudentsList(data?.yct_students);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoader(false);
  //     }
  //   };

  //   getdeptStudentsList();
  // }, [registerSuccessData, userData?.token]);

  //to get all bursars
  const [bursarsList, setBursarsList] = useState([]);
  useEffect(() => {
    const getbursarsList = async () => {
      setLoader(true);
      try {
        const response = await fetch(
          "https://student-management-system-production-54cf.up.railway.app/api/conn/all/bursar"
        );
        const data = await response?.json();
        // console.log("bursars list", data);
        setBursarsList(await data?.yct_students);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    getbursarsList();
  }, []);

  //to get student biodata
  const [studentBio, setstudentBio] = useState([]);
  useEffect(() => {
    const getstudentBio = async () => {
      setLoader(true);
      try {
        const response = await fetch(
          `https://student-management-system-production-54cf.up.railway.app/api/conn/biodata/${userData?.student_data?.id}`
        );
        const data = await response?.json();
        console.log("my biodata", data);
        // setstudentBio(await data?.yct_students);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    getstudentBio();
  }, []);

  //to register student
  const [formDataStaffReg, setFormDataStaffReg] = useState({
    first_name: "",
    last_name: "",
    staff_number: "",
    address: "",
    contact: "",
    date_of_birth: "",
    passport: {},
    department: "",
    email: "",
  });

  const handleInputChangeStaff = (e) => {
    const { id, value } = e.target;
    setValidationEror(false);
    setFormDataStaffReg((prevFormDataStaffReg) => ({
      ...prevFormDataStaffReg,
      [id]: value,
    }));
  };

  const handleFileChangeStaff = (event) => {
    const file = event.target.files[0];
    setValidationEror(false);
    setFormDataStaffReg((prev) => {
      return {
        ...prev,
        passport: file,
      };
    });
  };

  const [regStaffSuccessData, setRegStaffSuccessData] = useState({});

  const registerStaff = async () => {
    setLoader(true);
    try {
      const form = new FormData();
      form.append("first_name", formDataStaffReg.first_name);
      form.append("last_name", formDataStaffReg.last_name);
      form.append("staff_number", formDataStaffReg.staff_number);
      form.append("address", formDataStaffReg.address);
      form.append("contact", formDataStaffReg.contact);
      form.append("date_of_birth", formDataStaffReg.date_of_birth);
      form.append("passport", formDataStaffReg.passport);
      form.append("department", formDataStaffReg.department);
      form.append("email", formDataStaffReg.email);

      const response = await fetch(
        "https://student-management-system-production-54cf.up.railway.app/api/conn/register/bursar",
        {
          method: "POST",
          body: form,
        }
      );

      if (response?.ok) {
        console.log("Registration successful");
        const data = response?.json();
        setRegStaffSuccessData(await data);
        return data;
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    } finally {
      setLoader(false);
    }
  };

  //to logout user
  const [loggedOut, setLoggedOut] = useState(false);

  function logout() {
    localStorage.removeItem("userData");
    setUserData({});
    navigate("/");
    window.scrollTo(0, 0);
    setLoggedOut(true);
    setTimeout(() => {
      setLoggedOut(false);
    }, 3000);
  }

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigate,
        contactMod,
        openContact,
        closeContact,
        loginMod,
        toggleLoginMod,
        studentLogin,
        staffLogin,
        regMod,
        toggleRegMod,
        studentReg,
        staffReg,
        openSearch,
        toggleSearch,
        handlesubmitDocChange,
        submitDoc,
        getRootProps,
        getInputProps,
        formDataStudentReg,
        handleInputChange,
        handleFileChange,
        registerStudent,
        registerSuccess,
        setRegisterSuccess,
        validationEror,
        setValidationEror,
        loader,
        handleLoginInputChange,
        formDataStudentLogin,
        loginStudent,
        registerSuccessData,
        studentsList,
        userData,
        formDataStaffReg,
        registerStaff,
        regStaffSuccessData,
        loggedOut,
        logout,
        handleInputChangeStaff,
        handleFileChangeStaff,
        // deptStudentsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
