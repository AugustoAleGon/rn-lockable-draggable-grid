/** @format */
import { StyleProp, GestureResponderHandlers } from 'react-native';
import { FunctionComponent } from 'react';
interface BlockProps {
    style?: StyleProp<any>;
    dragStartAnimationStyle: StyleProp<any>;
    onPress?: () => void;
    onLongPress: () => void;
    panHandlers: GestureResponderHandlers;
}
export declare const Block: FunctionComponent<BlockProps>;
export {};
