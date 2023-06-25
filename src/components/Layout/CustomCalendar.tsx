import dayjs, { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { useState } from "react";

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  isSelected: boolean;
  isRemoving: boolean;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== "isSelected" && prop !== "isRemoving",
})<CustomPickerDayProps>(({ theme, isSelected, isRemoving }) => ({
  ...(isSelected && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isRemoving && {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.black,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.light,
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

  const formattedDay = day.toISOString();
  const mappedDates = allSelectedDates.map((day) => day.toISOString());
  const isSelected = mappedDates.includes(formattedDay);
  const formattedSelectedDay = selectedDay.toISOString();

  const toRemove = formattedSelectedDay === formattedDay;

  //   if (toRemove) {
  //     console.log("formattedSelectedDay", formattedSelectedDay);
  //     console.log("isSelected", isSelected);
  //     console.log("condition", toRemove);
  //   }
  return (
    <CustomPickersDay
      {...other}
      day={day}
      isSelected={isSelected}
      isRemoving={toRemove}
    />
  );
}

//IGNORE FOR NOW
// export default function CustomDay() {
//   const [dates, setDates] = useState<Dayjs[] | null>([dayjs("2022-04-18")]);
//   const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

//   console.log("Render");
//   //   const formattedDay = value?.toISOString();
//   //   const mappedDates = dates?.map((day) => day.toISOString());
//   //   const index = mappedDates?.indexOf(formattedDay);
//   //   const isSelected = mappedDates?.includes(formattedDay);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar
//         value={value}
//         // onChange={(newValue) => {
//         //   //   setValue(newValue);
//         //   //   setDates((prevState) => [...(prevState as any), newValue]);
//         // }}
//         slots={{ day: Day }}
//         slotProps={{
//           day: {
//             selectedDay: value,
//             allSelectedDates: dates,
//           } as any,
//         }}
//       />
//     </LocalizationProvider>
//   );
// }
