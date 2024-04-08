import { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDateRangePicker = styled.div`
  .date-picker {
    background-color: transparent;
    font-family: roboto;
    font-size: 1.25rem;
    width: 18rem;
    color: #ffffff;
    border: none;
    $::focus {
      outline: none;
    }
  }
  .react-datepicker__close-icon {
    &::after {
      background-color: transparent;
      color: #ffffff;
    }
  }
`;

function DateRangePicker({ isEditable, setDate, date }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setDate(dates);
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (isEditable === false) {
      setStartDate(date[0]);
      setEndDate(date[1]);
    }
  });

  return (
    <StyledDateRangePicker>
      {startDate == null ? (
        <DatePicker
          readOnly={!isEditable}
          className="date-picker"
          onChange={onChange}
          minDate={new Date()}
          maxDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select a date range"
          dateFormat="yyyy-MM-dd"
        />
      ) : (
        <DatePicker
          readOnly={!isEditable}
          className="date-picker"
          onChange={onChange}
          minDate={startDate}
          maxDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          isClearable={isEditable}
          placeholderText="Select a date range"
          dateFormat="yyyy-MM-dd"
          calendarClassName="rasta-stripes"
          excludeDates={[].concat(
            Array.from(
              { length: 30 },
              (_, i) =>
                new Date(new Date().setDate(startDate.getDate() + 7 + i * 7)),
            ),
            Array.from(
              { length: 30 },
              (_, i) =>
                new Date(new Date().setDate(startDate.getDate() + i * 7 + 1)),
            ),
            Array.from(
              { length: 30 },
              (_, i) =>
                new Date(new Date().setDate(startDate.getDate() + i * 7 + 2)),
            ),
            Array.from(
              { length: 30 },
              (_, i) =>
                new Date(new Date().setDate(startDate.getDate() + i * 7 + 3)),
            ),
            Array.from(
              { length: 30 },
              (_, i) =>
                new Date(new Date().setDate(startDate.getDate() + i * 7 + 4)),
            ),
            Array.from(
              { length: 30 },
              (_, i) =>
                new Date(new Date().setDate(startDate.getDate() + i * 7 + 5)),
            ),
          )}
        />
      )}
    </StyledDateRangePicker>
  );
}

export default DateRangePicker;
