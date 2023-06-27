import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";
import { MultiSelectCalendar } from "../components/Layout/CustomCalendar";

export const Avaliability = () => {
  return (
    <>
      <CenteredContent>
        <div className="m-4 min-grow">
          <div>
            Great so in that timeframe on what days is the first person
            avaliable?
          </div>
          <MultiSelectCalendar />
          {/* <button
            onClick={() => {
              setDates([]);
              setLatestDate(null);
            }}
          >
            Reset Dates
          </button> */}
        </div>
        <Link to="/result">
          <button>Continue</button>
        </Link>
      </CenteredContent>
    </>
  );
};
