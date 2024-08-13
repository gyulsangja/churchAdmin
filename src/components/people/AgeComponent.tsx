import React from 'react';
import KoreanLunarCalendar from "korean-lunar-calendar";
import { useSelector } from "react-redux"


const AgeComponent = () => {
  const InputComponentVal = useSelector((state:any)=>state.InputComponentVal);

  const calculateAge = (birthDate: string | number) => {
    const today = new Date();
    let birth = new Date(birthDate);
    
    if(InputComponentVal.calendarType === '음력'){
      const calendar = new KoreanLunarCalendar();
      calendar.setLunarDate(birth.getFullYear(), birth.getMonth() + 1, birth.getDate(), false);
      const solarDate = calendar.getSolarCalendar();
      birth = new Date(solarDate.year, solarDate.month - 1, solarDate.day)

    }

    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
    
  };
  const age = calculateAge(InputComponentVal.birth);

  return (
    <span>
      ({age}세)
    </span>
  );
}

export default AgeComponent;