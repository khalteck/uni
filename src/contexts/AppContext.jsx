import { createContext, useContext, useEffect, useState } from "react";
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
