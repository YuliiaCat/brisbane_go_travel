import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { colors } from '../../constants/colors';

interface DatePickerProps {
  date: string;
  onChange: (newDate: string) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ date, onChange }) => {

  return (
    <View style={styles.container}>
      <Calendar
        current={date}
        onDayPress={(day) => {
          onChange(day.dateString);
        }}
        minDate={'2025-01-01'}
        markedDates={{
          [date]: {
            selected: true,
            selectedColor: colors.gold,
            selectedTextColor: '#fff',
          },
        }}
        theme={{
          selectedDayBackgroundColor: colors.gold,
          selectedDayTextColor: '#fff',
          todayTextColor: colors.gold,
          arrowColor: colors.gold,
          textMonthFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.gold,
    alignSelf: 'center',
    padding: 5,
  },
});

export default DatePickerComponent;
