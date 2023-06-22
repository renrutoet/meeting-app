import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";
import { useState } from "react";
import DatePicker from "react-datepicker";

export const Avaliability = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <CenteredContent>
        <div className="m-4 min-grow">
          <div>
            Great so in that timeframe on what days is the first person
            avaliable?
          </div>

          <div>SELECT DAYS</div>
        </div>
        <Link to="/result">
          <button>Continue</button>
        </Link>
      </CenteredContent>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        inline
      />
    </>
  );
};
