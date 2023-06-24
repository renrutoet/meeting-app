import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";
import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Day } from "../components/Layout/CustomCalendar";

export const Avaliability = () => {
  const [dates, setDates] = useState<Dayjs[] | null>([dayjs("2022-04-18")]);
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <>
      <CenteredContent>
        <div className="m-4 min-grow">
          <div>
            Great so in that timeframe on what days is the first person
            avaliable?
          </div>
          <DateCalendar
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setDates((prevState) => [...(prevState as any), newValue]);
            }}
            slots={{ day: Day }}
            slotProps={{
              day: {
                selectedDay: value,
                allSelectedDates: dates,
              } as any,
            }}
          />
          <button
            onClick={() => {
              setDates([]);
              setValue(null);
            }}
          >
            Reset Dates
          </button>
        </div>
        <Link to="/result">
          <button>Continue</button>
        </Link>
      </CenteredContent>
    </>
  );
};
