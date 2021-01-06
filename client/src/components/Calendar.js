import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



const CalendarModule = () => {

  const [dateTime, setDateTime] = useState(0);
  const [monthYear, setMonthYear] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <View>
      <CalendarList
        minDate={Date()}
        onDayPress={(day) => {
          setMonthYear(day.timestamp)
        }}
        monthFormat={'MMMM yyyy'}
        pastScrollRange={0}
        futureScrollRange={6}
        horizontal={true}
        pagingEnabled={true}
        hideExtraDays={true}
      />
    </View>
  )
};

export default CalendarModule;