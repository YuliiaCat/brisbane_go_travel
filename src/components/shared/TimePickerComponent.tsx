import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../../constants/colors';

interface TimePickerProps {
  time: string;
  onChange: (newTime: string) => void;
}

const TimePickerComponent: React.FC<TimePickerProps> = ({ time, onChange }) => {
  const initialTime = time
    ? new Date(new Date().setHours(parseInt(time.split(':')[0], 10), parseInt(time.split(':')[1], 10), 0))
    : new Date();
    const [selectedTime, setSelectedTime] = useState<Date>(initialTime);
  const [tempTime, setTempTime] = useState<Date | null>(null);

  const handleChange = (event: any, pickedTime?: Date) => {
    if (pickedTime) {
      setTempTime(pickedTime);
    }
  };

  const handleConfirm = () => {
    if (tempTime) {
      const formattedTime = tempTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      onChange(formattedTime);
      setSelectedTime(tempTime);
      setTempTime(null);
    }
  };

  return (
    <DateTimePicker
      value={tempTime || selectedTime}
      mode="time"
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      onChange={handleChange}
      style={styles.container}
      textColor={colors.gold}
      onTouchEnd={() => handleConfirm()}
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

export default TimePickerComponent;
