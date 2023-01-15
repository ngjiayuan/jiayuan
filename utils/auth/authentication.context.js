import { createContext, useState } from "react";
import { signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthenticated, setIsAuthenticated } from "../redux/authSlice";

export const AuthenticationContext = createContext();

export function AuthenticationContextProvider({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const SignIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        const curr = u.user;
        setEmail(curr.email);
        dispatch(setIsAuthenticated(true));
      })
      .catch((e) => {
        setError(e.message.substring(9));
      })
  };

  const SignOut = async () => {
    signOut(auth).then(() => {
      dispatch(setIsAuthenticated(false));
    })
    .catch((e) => {
      console.log(e);
    })
  }

  return (
    <AuthenticationContext.Provider
      value={{
        name: email.split("@")[0],
        isAuthenticated, 
        error, 
        SignIn, 
        SignOut
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}