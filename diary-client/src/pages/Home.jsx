import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>This is the current Home Page!</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/create">Make an entry</Link>
      <br />
      <Link to="/view">View your entries</Link>
    </>
  );
}
