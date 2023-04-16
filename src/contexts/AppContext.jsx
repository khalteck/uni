import Compressor from "compressorjs";
import { createContext, useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  let navigate = useNavigate();

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
