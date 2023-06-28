import { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { removeFromArr } from "../../utils/arrUtils";
import { useContext, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar/DateCalendar";
import { AvaliabilityDispatchContext } from "../../contexts/AvaliabilityContext";

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  isSelected: boolean;
}

export interface CustomDayProps extends PickersDayProps<Dayjs> {
  selectedDay: Dayjs | null;
  allSelectedDates: Dayjs[] | null;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<CustomPickerDayProps>(({ theme, isSelected }) => ({
  ...(isSelected && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(!isSelected && {
    // backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
    },
  }),
})) as React.ComponentType<CustomPickerDayProps>;

export function Day(props: CustomDayProps) {
  const { day, selectedDay, allSelectedDates, ...other } = props;

  if (selectedDay === null || allSelectedDates === null) {
    return <PickersDay day={day} {...other} />;
  }

  const formattedDay = day.toISOString();
  const mappedDates = allSelectedDates.map((day) => day.toISOString());
  const isSelected = mappedDates.includes(formattedDay);

  return <CustomPickersDay {...other} day={day} isSelected={isSelected} />;
}

// TODO interface MultiSelectCalendarProps {

// }

export const MultiSelectCalendar = (props: any) => {
  const dispatch = useContext(AvaliabilityDispatchContext);
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
      dispatch({
        type: "ADD_DATES",
        payload: clickedDate,
      });
    } else {
      const updatedDates = removeDate(clickedDateIndex);
      setDates(updatedDates);

      dispatch({
        type: "REMOVE_DATE",
        payload: clickedDateIndex,
      });
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
  );
};
