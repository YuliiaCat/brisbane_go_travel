import cities from 'cities-list';

export const validateCity = (cityName: string) => {
  return Object.keys(cities).some(city => city.toLowerCase() === cityName.toLowerCase());
};

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export const formatPlayTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const h = hours > 0 ? `${hours}h ` : '';
  const m = `${minutes}m`;

  return `${h}${m}`;
};

