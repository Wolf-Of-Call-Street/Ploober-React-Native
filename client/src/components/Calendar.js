import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Context as AppointmentContext } from '../context/AppointmentContext';



const CalendarModule = () => {

  const {state} = useContext(AppointmentContext);
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
      {/* <select value={this.state.gender} onChange={this.handleChange}>
        <option name="male"> Male</option>
        <option name="female">Female</option>
      </select> */}
    </View>
  )
};

export default CalendarModule;