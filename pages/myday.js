import { useContext } from "react";
import Dashboard from "../components/Dashboard";
import { AuthenticationContext } from "../utils/auth/authentication.context";
import Login from "../components/Login";

export default function MyDay() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </>
  )
}