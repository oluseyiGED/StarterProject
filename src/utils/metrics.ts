import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, moderateScale, verticalScale};