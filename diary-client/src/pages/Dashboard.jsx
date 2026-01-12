import { Link } from "react-router-dom";
export function Dashboard() {
  return (
    <>
      <h1>This is where you view your progress!</h1>
      <Link to="/create">Make a new entry</Link>
      <br></br>
      <Link to="/view">View your previous entries</Link>
    </>
  );
}
