import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../../constants/colors';
import { useEventsStore } from '../../store/eventStore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventsStackType } from '../../navigation/types';
import React, { useState } from 'react';
import IUserEvent from '../../types/userEvent';
import { DatePickerComponent, SharedButton, SharedText, TitleBlock } from '../shared';
import SharedInput from '../shared/SharedInput';
import { buttonStyle } from '../../utils/styles';

const EditEventScreen = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const event = useEventsStore(state => state.events.find(e => e.id === id));
  const [formData, setFormData] = useState<Partial<IUserEvent>>({
    name: event?.name ?? '',
    description: event?.description ?? '',
    date: event?.date ?? '',
    time: event?.time ?? '',
  });
  const updateEvent = useEventsStore(state => state.updateEvent);
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

    updateEvent({
      id,
      name: formData.name,
      description: formData.description ?? '',
      date: formData.date,
      time: formData.time,
    });

    navigation.navigate('MY_EVENTS_SCREEN');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TitleBlock title="Edit the event" />
        <ScrollView contentContainerStyle={styles.content}>
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
              value={formData.time ?? ''}
              onChange={(value) => handleInputChange('time', value)}
              keyboardType="numeric"
              maxLength={5}
              isTime
            />

          </View>
          <SharedButton
            style={buttonStyle}
            onPress={handleAdd}
            >
            <SharedText text="Next" subTitle style={styles.btnText} />
          </SharedButton>
        </ScrollView>
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
});

export default EditEventScreen;
