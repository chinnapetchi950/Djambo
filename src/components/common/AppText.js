import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography } from '../../theme/typography';
import { Colors } from '../../theme/colors';

export default function AppText({ children, style, weight = 'regular', ...rest }) {
  const fontFamily = Typography.fontFamily[weight] || Typography.fontFamily.regular;
  return (
    <Text {...rest} style={[styles.text, { fontFamily }, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
  },
});
