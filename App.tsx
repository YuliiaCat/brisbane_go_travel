import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
