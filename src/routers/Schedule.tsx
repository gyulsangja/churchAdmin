import React, {useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Schedule = () => {
    const [value, onChange] = useState<Value>(new Date());
    const example = [
        '2024-06-19',
        '2024-06-20',
        '2024-06-02',
        '2024-06-30',
        '2024-06-23'
    ]
  return (
    <div>
      <Calendar 
        onChange={onChange}
        value={value}
        
        calendarType="gregory" 
        view="month"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatMonthYear={(locale, date) => moment(date).format("MMMM YYYY")}
        formatDay={(locale, date) => moment(date).format("DD")}
        formatShortWeekday={(locale, date) => moment(date).format("ddd")}
        onClickDay={(date) => console.log(moment(date).format("yyyy-MM-DD"))}
        tileContent={({ activeStartDate, date, view }) => {
            const find = example.find(i=>i === moment(date).format("yyyy-MM-DD"));
            let html = [];
            if(find){
                html.push(<div className="rounded-[50%] bg-[#000] w-[5px] h-[5px] mx-[auto]"></div>)
            }
            return(
                <>{html}</>
            )
        }}
        
        />
    </div>
  );
}

export default Schedule;
