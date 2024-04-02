import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const screenWidth = Dimensions.get('window').width;

const MovingImage = () => {
    const [positionX, setPositionX] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPositionX(prevX => {
                let newPosition = prevX - 1; // Move image to the left

                // Reset position to create a seamless loop
                if (newPosition <= -screenWidth) {
                    newPosition = 0;
                }

                return newPosition;
            });
        }, 10); // Adjust the interval for smoother animation

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../Endless/Runner/Components/Images/background.jpg')}
                style={[styles.image, { left: positionX }]}
            />
            <Image
                source={require('../../../../Endless/Runner/Components/Images/background.jpg')}
                style={[styles.image, { left: positionX + screenWidth }]}
            />
            <BlurView
                style={{
                    position: 'absolute',
                    width: screenWidth,
                    height: '100%',
                }}
                blurType='light'
                blurAmount={10}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        width: screenWidth, // Set the width of the images to the screen width
        height: '100%',
        resizeMode: 'cover',
    },
});

export default MovingImage;
