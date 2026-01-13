import { Link } from "react-router-dom";
export function UploadEntry() {
  return (
    <>
      <h1>This is where you upload an entry!</h1>
      <p>
        Here, the user would be able to upload an entry from their diary so that
        it is saved digitally.
      </p>
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
