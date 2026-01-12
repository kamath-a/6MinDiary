import { Link } from "react-router-dom";
export function Login() {
  return (
    <>
      <h1>Log in here!</h1>
      <Link to="/dashboard">Log into your account</Link>
    </>
  );
}
