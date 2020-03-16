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
  pressRetentionOffset: {
    top: number,
    left: number,
    bottom: number,
    right: number
  }
  panHandlers: GestureResponderHandlers
}

export const Block: FunctionComponent<BlockProps> = ({
  style,
  dragStartAnimationStyle,
  onPress,
  onLongPress,
  children,
  panHandlers,
  pressRetentionOffset,
}) => {
  return (
    <LongPressGestureHandler
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          onLongPress()
          console.log('here')
        }
      }}
      minDurationMs={500}>
    <Animated.View style={[styles.blockContainer, style, dragStartAnimationStyle]} {...panHandlers}>
      <Animated.View>
        <TouchableWithoutFeedback onPress={onPress} pressRetentionOffset={pressRetentionOffset}>
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
