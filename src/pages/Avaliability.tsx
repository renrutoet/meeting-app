import { Link } from "react-router-dom";
import { CenteredContent } from "../components/Layout/CenterContent";
import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { CustomDayProps, Day } from "../components/Layout/CustomCalendar";
import { removeFromArr } from "../utils/arrUtils";

export const Avaliability = () => {
  const [dates, setDates] = useState<Dayjs[]>([]);
  const [lastestDate, setLatestDate] = useState<Dayjs | null>(null);

  const removeDate = removeFromArr(dates);

  const handleChange = (clickedDate: Dayjs | null) => {
    if (clickedDate === null) {
      throw new Error("null click");
    }
    if (dates === null) {
      throw new Error("no dates");
    }

    const mappedDates = dates.map((day) => day.toISOString());
    const formattedClickedDate = clickedDate.toISOString();
    const clickedDateIndex = mappedDates.indexOf(formattedClickedDate);

    const isNewSelection =
      !mappedDates.includes(formattedClickedDate) || lastestDate === null;

    if (isNewSelection) {
      setLatestDate(clickedDate);
      setDates((prevState) => [...prevState, clickedDate]);
    } else {
      const updatedDates = removeDate(clickedDateIndex);
      setDates(updatedDates);

      const areRemainingSelections =
        updatedDates.length !== 0 &&
        formattedClickedDate === lastestDate.toISOString();

      if (areRemainingSelections) {
        setLatestDate(updatedDates[0]);
      } else if (updatedDates.length === 0) {
        setLatestDate(null);
      }
    }
  };

  return (
    <>
      <CenteredContent>
        <div className="m-4 min-grow">
          <div>
            Great so in that timeframe on what days is the first person
            avaliable?
          </div>
          <DateCalendar
            value={lastestDate}
            onChange={handleChange}
            slots={{ day: Day }}
            slotProps={{
              day: {
                selectedDay: lastestDate,
                allSelectedDates: dates,
              } as CustomDayProps,
            }}
          />
          <button
            onClick={() => {
              setDates([]);
              setLatestDate(null);
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
