import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";

export const Avaliability = () => {
  return (
    <CenteredContent>
      <div className="m-4 min-h-[200px] flex-grow">
        <div>
          Great so in that timeframe on what days is the first person avaliable?
        </div>
        <div>SELECT DAYS</div>
      </div>
      <Link to="/result">
        <button>Continue</button>
      </Link>
    </CenteredContent>
  );
};
