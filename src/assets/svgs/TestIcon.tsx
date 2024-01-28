import {HDP} from '@helpers';
import * as React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  onPress?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
}

const TestIcon: React.FC<Props> = ({
  height,
  width,
  onPress,
  containerStyle,
}) => (
  <TouchableOpacity onPress={onPress} style={[containerStyle]}>
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      width={HDP(width || 24)}
      height={HDP(height || 24)}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 3h-1a9 9 0 0 0 0 18h1m4-13 4 4m0 0-4 4m4-4H9"
      />
    </Svg>
  </TouchableOpacity>
);
export default TestIcon;
