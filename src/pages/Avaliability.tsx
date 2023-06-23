import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";
import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const Avaliability = () => {
  const [selectedDates, setSelectedDates] = useState(null);

  console.log("DATES", selectedDates);

  return (
    <>
      <CenteredContent>
        <div className="m-4 min-grow">
          <div>
            Great so in that timeframe on what days is the first person
            avaliable?
          </div>

          <div>SELECT DAYS</div>
          <DateCalendar
            value={selectedDates}
            onChange={(newValue) => setSelectedDates(newValue)}
          />
        </div>
        <Link to="/result">
          <button>Continue</button>
        </Link>
      </CenteredContent>
    </>
  );
};
