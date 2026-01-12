import { Link } from "react-router-dom";
export function Make_Entry() {
  return (
    <>
      <h1>This is where you make an entry!</h1>
      <Link to="/write">Write a new extry</Link>
      <br />
      <Link to="/upload">Upload an existing entry</Link>
      <br />
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
