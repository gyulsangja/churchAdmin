import React, {useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Schedule = () => {
    const [value, setValue] = useState<Value>(new Date());
    const example = [
        {
          id: 0,
          date: '2024-06-01',
          anniversary: ['기념일1314', '기념일2'],
          todolist: ['해야rwq할일1', '해야할sdf일2', '해야할일3'],
          memo: ['메모1', '메sdf모2', '메sdf모3']
        },
        {
          id: 1,
          date: '2024-06-05',
          anniversary: ['기념sd일1', '기념일2'],
          todolist: ['해야할일1', '해야할일2', '해야할일3'],
          memo: ['메모1', 'sdf메모2', '메모3']
        },
        {
          id: 2,
          date: '2024-06-15',
          anniversary: ['기념일1', '기념일2'],
          todolist: ['해야할일1', '해야할일2', '해야할일3'],
          memo: ['메모1', '메모2', '메모3']
        },
        {
          id: 3,
          date: '2024-06-20',
          anniversary: ['기념일1', '기념일2'],
          todolist: ['해야할일1', '해야할일2', '해야할일3'],
          memo: ['메모1', '메모2', '메모3']
        },
    ]

    const formatValue = (value: Value) => {
      if (Array.isArray(value)) {
        return `${value[0] ? moment(value[0]).format('YYYY-MM-DD') : 'null'} - ${value[1] ? moment(value[1]).format('YYYY-MM-DD') : 'null'}`;
      } else {
        return value ? moment(value).format('YYYY-MM-DD') : 'null';
      }
    };

  return (
    <div>
      <Calendar 
        onChange={setValue}
        value={value}
        calendarType="gregory" 
        view="month"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatMonthYear={(locale, date) => moment(date).format("MMMM YYYY")}
        formatDay={(locale, date) => moment(date).format("DD")}
        formatShortWeekday={(locale, date) => moment(date).format("ddd")}
        // onClickDay={(date) => console.log(moment(date).format("yyyy-MM-DD"))}
        // tileContent={({ activeStartDate, date, view }) => {
        //     const find = example.find(i=>i === moment(date).format("yyyy-MM-DD"));
        //     let html = [];
        //     if(find){
        //         html.push(<div className="rounded-[50%] bg-[#000] w-[5px] h-[5px] mx-[auto]"></div>)
        //     }
        //     return(
        //         <>{html}</>
        //     )
        // }}
        
        />


          {
            example.map((item, index)=>(
              item.date === formatValue(value) ? (
                <section key={index}>
                  <p>날짜: {item.date}</p>
                  <p>기념일: {item.anniversary.map((i, index)=>(
                    <p key={index}>{i}</p>
                    ))}
                  </p>
                  <h6>해야할일</h6>
                    {item.todolist.map((i, index)=>(
                    <p key={index}>{i}</p>
                    ))}
                  <h6>메모</h6>
                    {item.memo.map((i, index)=>(
                    <p key={index}>{i}</p>
                    ))}
                  
                </section>
              ) : ''
            ))
          }
    </div>
  );
}

export default Schedule;
