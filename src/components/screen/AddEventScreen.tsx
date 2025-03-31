import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../../constants/colors';
import { DatePickerComponent, SharedButton, SharedText, TitleBlock } from '../shared';
import { buttonStyle, buttonStyleDisabled } from '../../utils/styles';
import SharedInput from '../shared/SharedInput';
import IUserEvent from '../../types/userEvent';
import { useState } from 'react';
import { useEventsStore } from '../../store/eventStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventsStackType } from '../../navigation/types';

const AddEventScreen = () => {
  const [formData, setFormData] = useState<Partial<IUserEvent>>({
    name: '',
    description: '',
    date: '',
    time: '',
  });
  const addEvent = useEventsStore(state => state.addEvent);
  const isDisabled = !formData.name || !formData.date || !formData.time || !formData.description;
  const navigation = useNavigation<NativeStackNavigationProp<EventsStackType>>();
  const [showDate, setShowDate] = useState(false);

  const handleInputChange = (key: keyof IUserEvent, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAdd = () => {
    if (!formData.name || !formData.date || !formData.time) {
      return;
    }

    addEvent({
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description ?? '',
      date: formData.date,
      time: formData.time,
    });

    setFormData({ name: '', description: '', date: '', time: '' });
    navigation.navigate('MY_EVENTS_SCREEN');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TitleBlock title="Add an event" />
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <SharedInput
              label="Name of event"
              placeholder="Enter name"
              value={formData.name ?? ''}
              onChange={(value) => handleInputChange('name', value)}
            />
            <SharedInput
              label="Description"
              placeholder="Enter description"
              value={formData.description ?? ''}
              onChange={(value) => handleInputChange('description', value)}
            />

            <SharedInput
              label="Date"
              placeholder="DD.MM.YYYY"
              value={formData.date?.split('-').reverse().join('.') ?? ''}
              onPress={() => setShowDate(!showDate)}
              editable={false}
              isDate
            />

            {showDate && (
              <DatePickerComponent
                date={formData.date || ''}
                onChange={(newDate) => {
                  handleInputChange('date', newDate);
                  setShowDate(false);
                }}
              />
            )}

            <SharedInput
              label="Start time"
              placeholder="HH:MM"
              keyboardType="numeric"
              maxLength={5}
              value={formData.time ?? ''}
              onChange={(value) => handleInputChange('time', value)}
              isTime
            />
          </View>
          <SharedButton
            style={!isDisabled ? buttonStyle : buttonStyleDisabled}
            onPress={handleAdd}
            >
            <SharedText text="Next" subTitle style={!isDisabled ? styles.btnText : styles.btnDisabled} />
          </SharedButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 34,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  inputContainer: {
    gap: 20,
  },
  btnText: {
    color: colors.white,
    letterSpacing: 0,
    textAlign: 'center',
  },
  btnDisabled: {
    color: colors.black,
    opacity: 0.5,
    letterSpacing: 0,
    textAlign: 'center',
  },
});

export default AddEventScreen;
