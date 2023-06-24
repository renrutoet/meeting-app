import dayjs, { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { useState } from "react";

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  isSelected: boolean;
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
})) as React.ComponentType<CustomPickerDayProps>;

export function Day(
  props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null } & {
    allSelectedDates: Dayjs[] | null;
  }
) {
  const { day, selectedDay, allSelectedDates, ...other } = props;

  if (selectedDay == null || allSelectedDates == null) {
    return <PickersDay day={day} {...other} />;
  }

  const formatedDay = day.toISOString();
  const mappedDates = allSelectedDates.map((day) => day.toISOString());
  const isSelected = mappedDates.includes(formatedDay);

  return <CustomPickersDay {...other} day={day} isSelected={isSelected} />;
}

export default function CustomDay() {
  const [dates, setDates] = useState<Dayjs[] | null>([dayjs("2022-04-18")]);
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    </LocalizationProvider>
  );
}
