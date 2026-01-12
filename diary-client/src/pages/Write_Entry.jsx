import { Link } from "react-router-dom";
export function Write_Entry() {
  return (
    <>
      <h1>This is where you write a new entry!</h1>
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
