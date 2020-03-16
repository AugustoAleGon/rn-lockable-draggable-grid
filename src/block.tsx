/** @format */

import * as React from 'react'
import {
  Animated,
  StyleProp,
  TouchableWithoutFeedback,
  StyleSheet,
  GestureResponderHandlers,
} from 'react-native'
import { FunctionComponent } from 'react'
import {State, LongPressGestureHandler} from 'react-native-gesture-handler';

interface BlockProps {
  style?: StyleProp<any>
  dragStartAnimationStyle: StyleProp<any>
  onPress?: () => void
  onLongPress: () => void
  panHandlers: GestureResponderHandlers
}

export const Block: FunctionComponent<BlockProps> = ({
  style,
  dragStartAnimationStyle,
  onPress,
  onLongPress,
  children,
  panHandlers,
}) => {
  return (
    <LongPressGestureHandler
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          onLongPress()
        }
      }}
      minDurationMs={200}>
    <Animated.View style={[styles.blockContainer, style, dragStartAnimationStyle]} {...panHandlers}>
      <Animated.View>
        <TouchableWithoutFeedback onPress={onPress}>
          {children}
        </TouchableWithoutFeedback>
      </Animated.View>
    </Animated.View>

  </LongPressGestureHandler>
  );
}

const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',
  },
})
