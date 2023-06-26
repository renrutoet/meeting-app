import { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";

import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";

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
})) as React.ComponentType<CustomPickerDayProps>;

export function Day(props: CustomDayProps) {
  const { day, selectedDay, allSelectedDates, ...other } = props;

  if (selectedDay == null || allSelectedDates == null) {
    return <PickersDay day={day} {...other} />;
  }

  const formattedDay = day.toISOString();
  const mappedDates = allSelectedDates.map((day) => day.toISOString());
  const isSelected = mappedDates.includes(formattedDay);

  return <CustomPickersDay {...other} day={day} isSelected={isSelected} />;
}
