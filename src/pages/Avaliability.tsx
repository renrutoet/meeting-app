import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";
import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { Day } from "../components/Layout/CustomCalendar";

export const Avaliability = () => {
  const [dates, setDates] = useState<Dayjs[] | null>([]);
  const [value, setValue] = useState<Dayjs | null>(null);

  // console.log("value", value);
  console.log("dates", dates);

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
              const mappedDates = dates?.map((day) => day.toISOString());
              const index =
                newValue && mappedDates?.indexOf(newValue?.toISOString());

              const isNewSelection = !(
                newValue && mappedDates?.includes(newValue.toISOString())
              );

              if (isNewSelection) {
                setValue(newValue);
                setDates((prevState) => [...(prevState as any), newValue]);
              } else {
                const temp = [...dates];
                temp.splice(index, 1);
                setDates(temp);

                if (
                  temp.length !== 0 &&
                  newValue.toISOString() === value?.toISOString()
                ) {
                  setValue(temp[0]);
                }

                if (temp.length === 0) {
                  setValue(null);
                }
              }
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
