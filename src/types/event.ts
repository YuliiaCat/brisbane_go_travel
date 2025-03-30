interface IEvent {
  id: number;
  image: number | { uri: string };
  title: string;
  date: string;
  time: string;
  description: string;
  category?: string;
}

export default IEvent;
