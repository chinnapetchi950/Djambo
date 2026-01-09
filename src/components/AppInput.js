// import React, { useMemo } from 'react';
// import { TextInput, StyleSheet } from 'react-native';
// import { Colors } from '../theme/colors';
// import { Spacing } from '../theme/spacing';
// import { Typography } from '../theme/typography';

// export default function AppInput({ style, ...props }) {
//   const inputStyle = useMemo(() => [styles.input, style], [style]);
//   return <TextInput placeholderTextColor={Colors.muted} style={inputStyle} {...props} />;
// }

// const styles = StyleSheet.create({
//   input: {
//     backgroundColor: Colors.inputBg,
//     color: Colors.text,
//     borderRadius: 12,
//     paddingHorizontal: Spacing.md,
//     height: 52,
//     marginBottom: Spacing.md,
//     fontSize: Typography.sizes.body,
//     fontFamily: Typography.fontFamily.regular,
//   },
// });
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AppInput({
  secureTextEntry,
  style,
  ...props
}) {
  const [hide, setHide] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor="#777"
        secureTextEntry={hide}
      />

      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => setHide(!hide)}
        >
          <Ionicons
            name={hide ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 6,
  },

  input: {
    height: 52,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 16,
    paddingRight: 44, // space for eye icon
    color: '#fff',
    fontSize: 16,
  },

  eye: {
    position: 'absolute',
    right: 14,
    top: 16,
  },
});
