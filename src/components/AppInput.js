
// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function AppInput({
//   secureTextEntry,
//   style,
//   ...props
// }) {
//   const [hide, setHide] = useState(secureTextEntry);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         {...props}
//         style={[styles.input, style]}
//         placeholderTextColor="#777"
//         secureTextEntry={hide}
//       />

//       {secureTextEntry && (
//         <TouchableOpacity
//           style={styles.eye}
//           onPress={() => setHide(!hide)}
//         >
//           <Ionicons
//             name={hide ? 'eye-off-outline' : 'eye-outline'}
//             size={20}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     marginBottom: 6,
//   },

//   input: {
//     height: 52,
//     borderRadius: 14,
//     backgroundColor: 'rgba(255,255,255,0.08)',
//     paddingHorizontal: 16,
//     paddingRight: 44, // space for eye icon
//     color: '#fff',
//     fontSize: 16,
//   },

//   eye: {
//     position: 'absolute',
//     right: 14,
//     top: 16,
//   },
// });

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        placeholderTextColor="#aaa"
        secureTextEntry={hide}
      />

      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => setHide(!hide)}
        >
          <Ionicons
            name={hide ? 'eye-off-outline' : 'eye-outline'}
            size={wp('5%')} // responsive icon size
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
    marginBottom: hp('1.5%'),
  },

  input: {
    height: hp('6.5%'), // responsive height
    borderRadius: wp('3%'), // responsive border radius
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: wp('4%'),
    paddingRight: wp('12%'), // space for eye icon
    color: '#fff',
    fontSize: wp('4%'), // responsive font size
  },

  eye: {
    position: 'absolute',
    right: wp('3%'),
    top: hp('2%'),
  },
});
