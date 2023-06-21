import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";

export const DateResult = () => {
  return (
    <CenteredContent>
      <div className="m-4 min-h-[200px] flex-grow">
        <div>
          Thanks again! Hopefully there is a date which works for you both
        </div>
        <div>
          NO DATE - Oh no! sorry it seems like you don't have any overlapping
          dates to meet up on, sorry about that.
        </div>
        <div>
          DATE FOUND - We've found a date that you can meet on, which date would
          you like to meet up on?
        </div>
      </div>
      <Link to="/confirm">
        <button>Continue</button>
      </Link>
    </CenteredContent>
  );
};
