import { Link } from "react-router-dom";
export function MakeEntry() {
  return (
    <>
      <h1>This is where you make an entry!</h1>
      <Link to="/write">Write a new entry</Link>
      <br />
      <Link to="/upload">Upload an existing entry</Link>
      <br />
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
