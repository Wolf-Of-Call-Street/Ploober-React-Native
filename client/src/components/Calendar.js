import React, {useState, useContext} from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Context as AppointmentContext } from '../context/AppointmentContext';



const CalendarModule = ({dateTime, setDateTime, styles}) => {

  const {state} = useContext(AppointmentContext);
  const [monthYear, setMonthYear] = useState(0);
  const [time, setTime] = useState(0);


  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setDateTime(currentDate.getTime());

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <Text style={styles.genericText}>{date.toLocaleDateString()} at {date.toLocaleTimeString()}</Text>
      <View>
        <Button
        style={styles.caldendarButton}
        onPress={showDatepicker}
        title="Choose Date" />
      </View>
      <View>
        <Button
        style={styles.caldendarButton}
        onPress={showTimepicker}
        title="Choose Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          date={new Date()}
          minimumDate={new Date()}
          onChange={onChange}
        />
      )}
    </View>
  )
};

export default CalendarModule;