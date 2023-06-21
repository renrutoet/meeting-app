import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";

export const ConfirmDate = () => {
  return (
    <CenteredContent>
      <div className="m-4 min-grow">
        <div>It's a date! We hope you have a great time.</div>
      </div>
      <Link to="/">
        <button>Find another date</button>
      </Link>
    </CenteredContent>
  );
};
