import React from 'react';
import styles from './styles';
import Animated, {
    withTiming,
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { 
    Gesture,
    GestureDetector, 
} from 'react-native-gesture-handler';
import { Colors } from '../../styles';
import { Image, TouchableOpacity } from 'react-native';


export default function AnimatedButton({onPress = () => {}, icon, viewStyle}) {

      const pressed = useSharedValue(false);

      const tap = Gesture.Tap()
        .onBegin(() => {
          pressed.value = true;
        })
        .onFinalize(() => {
          pressed.value = false;
        });
    
      const animatedStyles = useAnimatedStyle(() => ({
        backgroundColor: pressed.value ? Colors.COLOR_FFFFF4 : Colors.COLOR_FFFFF4,
        transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],
      }));

    return (
        <GestureDetector gesture={tap}>
            <Animated.View style={[styles.iconView, animatedStyles, viewStyle]}>
                <TouchableOpacity style={styles.iconView} onPress={onPress}>
                    <Image source={icon} style={styles.icon} />
                </TouchableOpacity>
            </Animated.View>
        </GestureDetector>
    )
}