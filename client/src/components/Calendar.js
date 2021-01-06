import React from 'react';
import { View, Text } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



const CalendarModule = () => {
  return (
    <View>
      <CalendarList
        minDate={Date()}
        onDayPress={(day) => {

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