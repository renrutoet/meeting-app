import { Link } from "react-router-dom";

export const ConfirmDate = () => {
  return (
    <div>
      <div>It's a date! We hope you have a great time.</div>
      <Link to="/">
        <button>Find another date</button>
      </Link>
    </div>
  );
};
