import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import MovingImage from './Components/StartMenu/MovingImage';

export default function App() {
  const [orientation, setOrientation] = useState(1);

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
      const o = await ScreenOrientation.getOrientationAsync();
      setOrientation(o);
    };

    lockOrientation(); // Lock the orientation when the component mounts
  }, []);

  return (
      <View style={styles.container}>
        <MovingImage />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
