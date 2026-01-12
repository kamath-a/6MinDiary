import { Link } from "react-router-dom";
import { MorningEntry } from "../components/MorningEntry";
import { EveningEntry } from "../components/EveningEntry";
export function WriteEntry() {
  return (
    <>
      <h1>This is where you write a new entry!</h1>
      <MorningEntry />
      <EveningEntry />
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
