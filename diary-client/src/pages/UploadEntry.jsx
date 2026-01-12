import { Link } from "react-router-dom";
export function UploadEntry() {
  return (
    <>
      <h1>This is where you upload an entry!</h1>
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
