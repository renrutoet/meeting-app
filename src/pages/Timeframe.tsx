import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";

export const Timeframe = () => {
  return (
    <CenteredContent>
      <div className="m-4 min-h-[200px] flex-grow">
        <div>You want the meeting in the next?</div>
        <div>TIMEFRAME SELECTOR</div>
      </div>
      <Link to="/avaliability/1">
        <button>Continue</button>
      </Link>
    </CenteredContent>
  );
};
