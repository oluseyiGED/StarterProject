import {family} from '@theme';
import React, {FC} from 'react';
import {Text as RNText, StyleSheet, TextStyle} from 'react-native';

interface Props {
  children?: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  size?: TextStyle['fontSize'];
  fontSize?: TextStyle['fontSize'];
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  weight?: TextStyle['fontWeight'];
  fontWeight?: TextStyle['fontWeight'];
  center?: boolean;
  color?: TextStyle['color'];
  opacity?: TextStyle['opacity'];
  font?: TextStyle['fontFamily'];
  fontFamily?: TextStyle['fontFamily'];
  align?: TextStyle['textAlign'];
  textAlign?: TextStyle['textAlign'];
  transform?: TextStyle['textTransform'];
  textTransform?: TextStyle['textTransform'];
  lineHeight?: TextStyle['lineHeight'];
  position?: TextStyle['position'];
  top?: TextStyle['top'];
  right?: TextStyle['right'];
  bottom?: TextStyle['bottom'];
  left?: TextStyle['left'];
  style?: any;
}

const Text: FC<Props> = ({
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  size,
  fontSize,
  bold,
  semibold,
  weight,
  fontWeight,
  center,
  color,
  opacity,
  font,
  fontFamily = family.Regular,
  align,
  textAlign,
  transform,
  textTransform,
  lineHeight,
  position,
  top,
  right,
  bottom,
  left,
  style,
  medium,
  ...props
}) => {
  const textStyle = StyleSheet.flatten([
    h1 && {fontSize: 38, fontFamily: '800'},
    h2 && {fontSize: 32, fontFamily: '800'},
    h3 && {fontSize: 28, fontFamily: '800'},
    h4 && {fontSize: 24, fontFamily: family.Medium},
    h5 && {fontSize: 18, fontFamily: family.Medium},
    p && {fontSize: 14, fontFamily: family.Regular},
    center && {textAlign: 'center'},
    (align || textAlign) && {textAlign: textAlign || align},
    bold && {fontWeight: '800'},
    semibold && {fontWeight: '600'},
    medium && {fontWeight: '500'},
    (weight || fontWeight) && {fontWeight: fontWeight || weight},
    (transform || textTransform) && {
      textTransform: textTransform || transform,
    },
    (font || fontFamily) && {fontFamily: fontFamily || font},
    (size || fontSize) && {fontSize: fontSize || size},
    color && {color},
    opacity && {opacity},
    lineHeight && {lineHeight},
    position && {position},
    right !== undefined && {right},
    left !== undefined && {left},
    top !== undefined && {top},
    bottom !== undefined && {bottom},
    style,
  ]);

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
