import { Link } from "react-router-dom";

export const DateResult = () => {
  return (
    <>
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
      <Link to="/confirm">
        <button>Continue</button>
      </Link>
    </>
  );
};
