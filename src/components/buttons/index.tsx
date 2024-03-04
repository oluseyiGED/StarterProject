/* eslint-disable react-native/no-inline-styles */
// import { SizedBox } from '@components/sized-box';
import {SizedBox, SvgIcon} from '@components';
// import {SvgIcon} from '@components/svg-icon';
import {HDP} from '@helpers';
import {palette} from '@theme';
import React, {FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import style from './styles';
interface Props {
  title?: any;
  iconName?: string;
  loading?: boolean;
  onPress?: () => void;
  bordered?: boolean;
  containerStyle?: any;
  textStyle?: any;
  backgroundColor?: any;
  iconContainerStyle?: any;
  iconSize?: number;
  disabled?: boolean;
  icon?: any;
}

export const Button: FC<Props> = ({
  title,
  iconName,
  onPress,
  loading,
  containerStyle,
  textStyle,
  backgroundColor = palette.blue,
  iconContainerStyle,
  bordered,
  iconSize,
  disabled,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        style.containerCommonStyle,
        {backgroundColor},
        bordered && style.borderStyle,
        containerStyle,
        (disabled || loading) && {backgroundColor: '#696A6C50'},
      ]}>
      {loading ? (
        <ActivityIndicator color={bordered ? palette.blue : palette.white} />
      ) : (
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', gap: HDP(6)}}>
            {iconName && (
              <View style={[style.iconContainer, iconContainerStyle]}>
                <SvgIcon name={iconName} size={20} />
                <SizedBox width={HDP(12)} />
              </View>
            )}
            <Text
              style={[
                style.textCommonStyle,
                bordered && style.borderTextStyle,
                textStyle,
              ]}>
              {title}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
