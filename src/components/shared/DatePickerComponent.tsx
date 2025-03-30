import React, { useState } from 'react';
import { Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../../constants/colors';

interface DatePickerProps {
  date: string;
  onChange: (newDate: string) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ date, onChange }) => {
  const [tempDate, setTempDate] = useState<Date | null>(null);

  const parsedDate = date
    ? new Date(Date.UTC(
        parseInt(date.split('-')[0], 10),
        parseInt(date.split('-')[1], 10) - 1,
        parseInt(date.split('-')[2], 10)
      ))
    : new Date();

    const [selectedDate, setSelectedDate] = useState<Date>(parsedDate);

  const handleChange = (event: any, pickedDate?: Date) => {
    if (pickedDate) {
      setTempDate(pickedDate);
    }
  };

  const handleConfirm = (pickedDate?: Date) => {
    if (pickedDate || tempDate) {
      const finalDate = pickedDate || tempDate!;
      const formattedDate = `${finalDate.getFullYear()}-${(finalDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${finalDate.getDate().toString().padStart(2, '0')}`;

      onChange(formattedDate);
      setSelectedDate(finalDate);
      setTempDate(null);
    }
  };

  return (
      <DateTimePicker
        value={tempDate || selectedDate}
        mode="date"
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        onChange={handleChange}
        onTouchEnd={() => handleConfirm()}
        textColor={colors.gold}
        style={styles.container}
        minimumDate={new Date(2025, 0, 1)}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.gold,
    alignSelf: 'center',
  },
});

export default DatePickerComponent;
