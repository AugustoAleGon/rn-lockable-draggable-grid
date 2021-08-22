/** @format */
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface IOnLayoutEvent {
    nativeEvent: {
        layout: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    };
}
interface IBaseItemType {
    key: string;
    disabledDrag?: boolean;
    disabledReSorted?: boolean;
}
export interface IDraggableGridProps<DataType extends IBaseItemType> {
    numColumns: number;
    data: DataType[];
    renderItem: (item: DataType, order: number, onPress: () => void, onLongPress: () => void) => React.ReactElement<any>;
    style?: ViewStyle;
    itemHeight?: number;
    dragStartAnimation?: StyleProp<any>;
    onItemPress?: (item: DataType) => void;
    onDragStart?: (item: DataType) => void;
    onDragRelease?: (newSortedData: DataType[]) => void;
    onResetSort?: (newSortedData: DataType[]) => void;
}
export declare const DraggableGrid: <DataType extends IBaseItemType>(props: IDraggableGridProps<DataType>) => JSX.Element;
export {};
