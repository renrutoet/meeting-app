import { Link } from "react-router-dom";

export const Timeframe = () => {
  return (
    <>
      <div>You want the meeting in the next?</div>
      <div>TIMEFRAME SELECTOR</div>
      <Link to="/avaliability/1">
        <button>Continue</button>
      </Link>
    </>
  );
};
