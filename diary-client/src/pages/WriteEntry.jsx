import { Link } from "react-router-dom";
import { MorningEntry } from "../components/MorningEntry";
import { EveningEntry } from "../components/EveningEntry";
import { Button } from "../components/Button";

export function WriteEntry() {
  const currentHour = new Date().getHours();
  const isMorning = currentHour < 12;

  return (
    <>
      <h1>This is where you write a new entry!</h1>
      {isMorning ? <MorningEntry /> : <EveningEntry />}
      <Button />
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
