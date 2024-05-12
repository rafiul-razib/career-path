import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";

const DateSelector = ({ setApplicationDeadline }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  //   console.log(selectedDate);
  const date =
    selectedDate && moment(new Date(selectedDate.$d)).format("YYYY-MM-D");
  setApplicationDeadline(date);
  //   setJobPostingDate(date);
  return (
    <div>
      <DatePicker
        placeholder="Select Date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      ></DatePicker>
    </div>
  );
};

export default DateSelector;
