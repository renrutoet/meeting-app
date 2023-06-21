import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";

export const Welcome = () => {
  return (
    <CenteredContent>
      <div className="m-4 min-h-[200px] flex-grow">
        <h4>Welcome to Let's make a meeting!</h4>
        <div>
          You need to find a date for the two of you and it's a nightmare
          talking back and forth about when you are avaliable, sound familiar?
        </div>
        <div>Let me help you with that...</div>
      </div>
      <Link to="/timeframe">
        <button>Continue</button>
      </Link>
    </CenteredContent>
  );
};
