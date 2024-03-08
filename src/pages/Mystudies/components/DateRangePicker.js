import { useState, useEffect } from "react";
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

function DateRangePicker({ value }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (value) {
      setStartDate(value[0]);
      setEndDate(value[1]);
    }
  }, [value]);
  return (
    <StyledDateRangePicker>
      (
      <DatePicker
        readOnly={true}
        className="date-picker"
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="yyyy-MM-dd"
      />
      )
    </StyledDateRangePicker>
  );
}

export default DateRangePicker;
