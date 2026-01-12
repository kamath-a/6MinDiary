import { Link } from "react-router-dom";
export function View_Entry() {
  return (
    <>
      <h1>This is where you view entries!</h1>
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
