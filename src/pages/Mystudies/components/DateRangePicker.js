import { useState } from "react";
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

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <StyledDateRangePicker>
      {startDate == null ? (
        <DatePicker
          className="date-picker"
          onChange={onChange}
          minDate={new Date()}
          maxDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          isClearable={true}
          placeholderText="Select a date range"
          dateFormat="yyyy-MM-dd"
        />
      ) : (
        <DatePicker
          className="date-picker"
          onChange={onChange}
          minDate={startDate}
          maxDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          isClearable={true}
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
