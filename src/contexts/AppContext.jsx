import Compressor from "compressorjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase-config";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  let navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(false);
  function toggleDropdown() {
    setOpenDropdown((prev) => !prev);
  }

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

  const [registerSuccessData, setRegisterSuccessData] = useState(
    JSON.parse(localStorage.getItem("loginDetails")) || {}
  );
  const [regError, setRegError] = useState("");

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
        "https://student-management-system-production-54cf.up.railway.app/api/v1/register/student",
        {
          method: "POST",
          body: form,
        }
      );
      const data = await response?.json();

      if (response?.ok) {
        // console.log("Registration successful");
        localStorage.setItem("loginDetails", JSON.stringify(data));
        setRegisterSuccessData(await data);
        setRegisterSuccess(true);
        setTimeout(() => {
          setRegisterSuccess(false);
          navigate("/login");
        }, 3000);
      } else {
        // console.log("Registration failed");
        setRegError(data?.message);
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    } finally {
      setLoader(false);
    }
  };

  //to login student
  const [formDataStudentLogin, setFormDataStudentLogin] = useState({
    matric_number: "",
    password: "",
  });

  const handleLoginInputChange = (e) => {
    const { id, value } = e.target;
    setValidationEror(false);
    setLoginError("");
    setFormDataStudentLogin((prevFormDataStudentLogin) => ({
      ...prevFormDataStudentLogin,
      [id]: value?.replace(/ /g, ""),
    }));
  };

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  //to send student login data to endpoint
  const loginStudent = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://student-management-system-production-54cf.up.railway.app/api/v1/login/student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataStudentLogin),
        }
      );
      const data = await response?.json();

      if (response?.ok) {
        localStorage.setItem("userData", JSON.stringify(await data));
        setUserData(await data);
        setLoginSuccess(true);
        setTimeout(() => {
          setLoginSuccess(false);
          navigate("/student-dashboard");
          window.location.reload();
        }, 3000);
      } else {
        setLoginError(data?.message);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    } finally {
      setLoader(false);
    }
  };

  // to get submitted documents list
  const [submittedDocs, setSubmittedDocs] = useState([]);

  useEffect(() => {
    if (userData?.student_data) {
      const getSubmittedDocs = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            "https://student-management-system-production-54cf.up.railway.app/api/v1/all/documents",
            {
              headers: {
                Authorization: `Bearer ${userData?.token}`,
              },
            }
          );
          const data = await response.json();

          if (response?.ok) {
            // console.log("docs data", data);
            setSubmittedDocs(data);
          } else {
            console.log("failed to get submitted docs");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };
      getSubmittedDocs();
    }
  }, [userData]);

  //to get all students
  const [studentsList, setStudentsList] = useState([]);
  // console.log("students list => ", studentsList);

  useEffect(() => {
    const getstudentsList = async () => {
      setLoader(true);
      try {
        const response = await fetch(
          "https://student-management-system-production-54cf.up.railway.app/api/v1/all/student?page=1"
        );
        const data = await response?.json();
        setStudentsList(await data?.student_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    getstudentsList();
  }, [userData]);

  //to get all bursars
  const [bursarsList, setBursarsList] = useState([]);
  useEffect(() => {
    const getbursarsList = async () => {
      setLoader(true);
      try {
        const response = await fetch(
          "https://student-management-system-production-54cf.up.railway.app/api/v1/all/bursar"
        );
        const data = await response?.json();
        // console.log("bursars list", data);
        setBursarsList(await data?.bursars);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    getbursarsList();
  }, []);

  const [payTrack, setpayTrack] = useState(false);

  //to get student biodata
  const [studentBio, setstudentBio] = useState({});
  // console.log("studentBio", studentBio);
  useEffect(() => {
    if (userData?.student_data) {
      const getstudentBio = async () => {
        setLoader(true);
        try {
          const response = await fetch(
            `https://student-management-system-production-54cf.up.railway.app/api/v1/biodata/${userData?.student_data?.id}`
          );
          const data = await response?.json();
          if (response?.ok) {
            // console.log("my biodata", data);
            setstudentBio(await data?.biodata);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };

      getstudentBio();
    }
  }, [payTrack, userData]);

  //to register student
  const [formDataStaffReg, setFormDataStaffReg] = useState({
    first_name: "",
    last_name: "",
    staff_number: "",
    address: "",
    contact: "",
    date_of_birth: "",
    staff_passport: {},
    department: "",
    email: "",
    staff_signatures: {},
  });

  // console.log("formDataStaffReg", formDataStaffReg);

  const handleInputChangeStaff = (e) => {
    const { id, value } = e.target;
    setValidationEror(false);
    setFillInputsAbove(false);
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
        staff_passport: file,
      };
    });
  };
  const handleSigChangeStaff = (event) => {
    const file = event.target.files[0];
    setValidationEror(false);
    setFormDataStaffReg((prev) => {
      return {
        ...prev,
        staff_signatures: file,
      };
    });
  };

  const [fillInputsAbove, setFillInputsAbove] = useState(false);
  function notify() {
    setFillInputsAbove(true);
  }
  const storage = getStorage();

  function handleFileUpload(event) {
    const storageRef = ref(
      storage,
      `signatures/${formDataStaffReg.staff_number.replace(/\//g, "-")}`
    );
    const file = formDataStaffReg?.staff_signatures;
    setValidationEror(false);

    // Upload the file to Firebase Storage
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Uploaded a file!");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  }

  const [regStaffSuccessData, setRegStaffSuccessData] = useState(
    JSON.parse(localStorage.getItem("loginDetails")) || {}
  );

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
      form.append("staff_passport", formDataStaffReg.staff_passport);
      form.append("department", formDataStaffReg.department);
      form.append("email", formDataStaffReg.email);
      form.append("staff_signatures", formDataStaffReg.staff_signatures);

      const response = await fetch(
        "https://student-management-system-production-54cf.up.railway.app/api/v1/register/bursar",
        {
          method: "POST",
          body: form,
        }
      );
      const data = await response?.json();

      if (response?.ok) {
        handleFileUpload();
        console.log("Registration successful");
        localStorage.setItem("loginDetails", JSON.stringify(data));
        setRegStaffSuccessData(await data);
        setRegisterSuccess(true);
        setTimeout(() => {
          setRegisterSuccess(false);
          navigate("/login-staff");
        }, 3000);
      } else {
        console.log("Registration failed");
        setRegError(data?.message);
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    } finally {
      setLoader(false);
    }
  };

  //to login staff
  const [formDataStaffLogin, setFormDataStaffLogin] = useState({
    staff_number: "",
    password: "",
  });

  const handleStaffLoginChange = (e) => {
    const { id, value } = e.target;
    setValidationEror(false);
    setLoginError("");
    setFormDataStaffLogin((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // const [userData, setUserData] = useState(
  //   JSON.parse(localStorage.getItem("userData")) || {}
  // );
  // const [loginSuccess, setLoginSuccess] = useState(false);
  // const [loginError, setLoginError] = useState("");

  //to send student login data to endpoint
  const loginStaff = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://student-management-system-production-54cf.up.railway.app/api/v1/login/bursar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataStaffLogin),
        }
      );
      const data = await response?.json();

      if (response?.ok) {
        localStorage.setItem("userData", JSON.stringify(await data));
        setUserData(await data);
        setLoginSuccess(true);
        setTimeout(() => {
          setLoginSuccess(false);
          navigate("/staff-dashboard");
        }, 3000);
      } else {
        setLoginError(data?.message);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    } finally {
      setLoader(false);
    }
  };

  //to logout user
  const [loggedOut, setLoggedOut] = useState(false);

  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("loginDetails");
    setUserData({});
    navigate("/");
    window.scrollTo(0, 0);
    setLoggedOut(true);
    setTimeout(() => {
      setLoggedOut(false);
      window.location.reload();
    }, 3000);
  }

  const [submitError, setSubmitError] = useState(false);

  const [submitDoc, setSubmitDoc] = useState({
    name: "",
    file: null,
  });

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
      file: file,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "*",
    multiple: false,
    onDrop: handleDrop,
  });
  //to submit docs
  const [DocSubmitSuccess, setDocSubmitSuccess] = useState(false);

  const handleSubmitDoc = async (e) => {
    e.preventDefault();

    if (submitDoc?.name && submitDoc?.file) {
      setLoader(true);
      const bursar = bursarsList?.filter((item) => {
        return item?.department === userData?.student_data?.department;
      });

      try {
        const formDataToSend = new URLSearchParams();
        formDataToSend.append("name", submitDoc?.name);
        formDataToSend.append("file", submitDoc?.file);

        const response = await fetch(
          `https://student-management-system-production-54cf.up.railway.app/api/v1/submit/document/${bursar[0]?.id}`,
          {
            method: "POST",
            body: formDataToSend,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${userData?.token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          console.log("doc sent", data);
          setDocSubmitSuccess(true);
          setTimeout(() => {
            setDocSubmitSuccess(false);
            window.location.reload();
          }, 3000);
        } else {
          console.log("failed to send doc", data);

          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("An error occured");
      } finally {
        setLoader(false);
      }
    } else {
      setSubmitError("Please fill all fields");
    }
  };

  // to get all docs submitted to this bursar
  const [docsReceived, setDocsReceived] = useState([]);

  useEffect(() => {
    if (userData?.bursar_data) {
      const getDocsReceived = async () => {
        setLoader(true);
        try {
          const token = userData?.token;
          const response = await fetch(
            "https://student-management-system-production-54cf.up.railway.app/api/v1/my/docs",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response?.json();
          // console.log("docs submitted", data);
          setDocsReceived(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };

      getDocsReceived();
    }
  }, [userData]);

  // to get bursar signature
  const [bursarSgnature, setBursarSgnature] = useState([]);

  useEffect(() => {
    if (userData?.bursar_data) {
      const getBursarSgnature = async () => {
        setLoader(true);
        try {
          const token = userData?.token;
          const response = await fetch(
            "https://student-management-system-production-54cf.up.railway.app/api/v1/my-signature",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response?.json();
          // console.log("bursar signature", data);
          setBursarSgnature(data?.signature);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      };

      getBursarSgnature();
    }
  }, [userData]);

  //========================================================to handle payment
  // const [paid, setPaid] = useState(
  //   JSON.parse(localStorage.getItem("paid")) || false
  // );
  const [receipt, setReceipt] = useState({});

  useEffect(() => {
    if (userData) {
      const getReceipt = async () => {
        setLoader(true);
        try {
          const matric = userData?.student_data?.matric_no?.replace(/\//g, "-");
          const docSnap = await getDoc(doc(db, "receipts", `${matric}`));
          const data = docSnap?.data();
          setReceipt(data);
        } catch (error) {
          console.error("Error fetching receipt:", error);
        } finally {
          setLoader(false);
        }
      };

      getReceipt();
    }
  }, [userData]);

  const [bioData, setBioData] = useState({});

  useEffect(() => {
    if (userData) {
      const getBiodata = async () => {
        setLoader(true);
        try {
          const matric = userData?.student_data?.matric_no?.replace(/\//g, "-");
          const docSnap = await getDoc(doc(db, "biodata", `${matric}`));
          const data = docSnap?.data();
          setBioData(data);
        } catch (error) {
          console.error("Error fetching receipt:", error);
        } finally {
          setLoader(false);
        }
      };

      getBiodata();
    }
  }, [userData]);

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const validatePayment = async (transaction) => {
    if (transaction) {
      try {
        const formDataToSend = new URLSearchParams();
        formDataToSend.append("status", "Successful");
        formDataToSend.append("amount_paid", "20000");
        formDataToSend.append("transaction_reference", transaction?.reference);

        const response = await fetch(
          `https://student-management-system-production-54cf.up.railway.app/api/v1/validate_payment`,
          {
            method: "POST",
            body: formDataToSend,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${userData?.token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          console.log("payment validated", data);
        } else {
          console.log("failed to validate payment", data);
          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    }
  };

  const userCred = {
    matric_number: userData?.student_data?.matric_no,
    password: userData?.student_data?.last_name,
  };

  const loginDetails = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://student-management-system-production-54cf.up.railway.app/api/v1/login/student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCred),
        }
      );
      const data = await response?.json();

      if (response?.ok) {
        localStorage.setItem("userData", JSON.stringify(await data));
        setUserData(await data);
      } else {
        console.log("could not get login userdata");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    } finally {
      setLoader(false);
    }
  };

  async function createDocs(transaction) {
    setLoader(true);
    const newReceipt = {
      name:
        userData?.student_data?.first_name +
        " " +
        userData?.student_data?.last_name,
      matric_no: userData?.student_data?.matric_no,
      email: userData?.student_data?.email,
      department: userData?.student_data?.department,
      status: "Successful",
      amount: "20000",
      date: formattedDate,
      txref: transaction?.reference,
    };
    setReceipt(newReceipt);

    setBioData(studentBio);

    const matric = userData?.student_data?.matric_no?.replace(/\//g, "-");

    await setDoc(doc(db, "receipts", `${matric}`), {
      ...newReceipt,
    });

    await setDoc(doc(db, "biodata", `${matric}`), {
      ...studentBio,
    });

    await validatePayment(transaction);
    setpayTrack((prev) => !prev);
    await loginDetails();

    setLoader(false);
  }

  const submittedDocOwners = docsReceived.filter((obj2) =>
    studentsList.some((obj1) => obj1.matric_no === obj2.student_matric_no)
  );

  const [docsFromFirestore, setDocsFromFirestore] = useState([]);

  const getDataFromFirestore = async (array) => {
    const documents = [];

    for (const obj of array) {
      const { student_matric_no, name } = obj;

      let document;
      if (name === "School Fees Receipt") {
        document = doc(db, "receipts", student_matric_no?.replace(/\//g, "-"));
      } else {
        document = doc(db, "biodata", student_matric_no?.replace(/\//g, "-"));
      }

      try {
        const snapshot = await getDoc(document);
        if (snapshot.exists()) {
          documents.push(snapshot.data());
        } else {
          // Handle case when document does not exist
          console.log(
            `Document does not exist for matric no: ${student_matric_no?.replace(
              /\//g,
              "-"
            )}`
          );
        }
      } catch (error) {
        // Handle error
        console.log(
          `Error fetching document for matric no: ${student_matric_no?.replace(
            /\//g,
            "-"
          )}`,
          error
        );
      }
    }

    return documents;
  };

  useEffect(() => {
    getDataFromFirestore(submittedDocOwners)
      .then((documents) => {
        // console.log("Documents:", documents);
        setDocsFromFirestore(documents);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [userData, docsReceived]);

  const [signature, setSignature] = useState(null);

  useEffect(() => {
    if (userData?.bursar_data) {
      const fetchImage = async () => {
        try {
          const path = `signatures/${userData?.bursar_data.staff_number.replace(
            /\//g,
            "-"
          )}`;

          const imageRef = ref(storage, path);
          const downloadURL = await getDownloadURL(imageRef);
          setSignature(downloadURL);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      };

      fetchImage();
    }
  }, [userData]);

  //to submit docs
  const [signSucess, setSignSucess] = useState(false);

  const handleSignDoc = async (doc_id) => {
    if (signature) {
      setLoader(true);
      // const signatureFile = {
      //   data: signature,
      //   name: signature,
      // };

      try {
        const formDataToSend = new URLSearchParams();
        formDataToSend.append("signature", signature);

        const response = await fetch(
          `https://student-management-system-production-54cf.up.railway.app/api/v1/sign_doc/${doc_id}`,
          {
            method: "POST",
            body: formDataToSend,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${userData?.token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          // console.log("Signed successfully", data);
          setSignSucess(true);
          setTimeout(() => {
            setSignSucess(false);
            // window.location.reload();
          }, 3000);
        } else {
          // console.log("failed to sign doc", data);

          throw new Error("Server error.");
        }
      } catch (error) {
        console.error(error);
        setSubmitError("An error occured");
      } finally {
        setLoader(false);
      }
    }
  };

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
        loginSuccess,
        loginError,
        regError,
        submittedDocs,
        DocSubmitSuccess,
        handleSubmitDoc,
        bursarsList,
        submitError,
        toggleDropdown,
        openDropdown,
        handleSigChangeStaff,
        handleStaffLoginChange,
        formDataStaffLogin,
        loginStaff,
        docsReceived,
        bursarSgnature,
        docsFromFirestore,
        receipt,
        bioData,
        createDocs,
        studentBio,
        fillInputsAbove,
        notify,
        handleSignDoc,
        signSucess,
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
