import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Modal,
  FlatList,
  ImageBackground,
  ScrollView
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const COUNTRIES = ['India', 'United States', 'United Kingdom'];
const CURRENCIES = ['USD', 'INR', 'GBP'];

export default function CreateAccount({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
    currency: 'USD',
    terms: true,
  });

  const [picker, setPicker] = useState({ visible: false, type: '' });

  const openPicker = type => setPicker({ visible: true, type });
  const closePicker = () => setPicker({ visible: false, type: '' });

  const selectValue = value => {
    setForm({ ...form, [picker.type]: value });
    closePicker();
  };

  return (
    <ScreenWrapper>
       <ImageBackground
                  source={require('../../../assets/images/login_bg.png')}
                  style={styles.container}
                >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={{paddingBottom:30}}>

       
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.inputBox} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Account</Text>
        </View>

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>
        <AppInput
          placeholder="Youremail.com"
          value={form.email}
          onChangeText={t => setForm({ ...form, email: t })}
        />

        {/* USERNAME */}
        <Text style={styles.label}>Username</Text>
        <AppInput
          placeholder="David"
          value={form.username}
          onChangeText={t => setForm({ ...form, username: t })}
        />

        {/* PASSWORD */}
        <Text style={styles.label}>Create Password</Text>
        <AppInput
          secureTextEntry
          value={form.password}
          onChangeText={t => setForm({ ...form, password: t })}
        />

        {/* CONFIRM */}
        <Text style={styles.label}>Re-Enter Password</Text>
        <AppInput
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={t => setForm({ ...form, confirmPassword: t })}
        />

        {/* COUNTRY */}
        <Text style={styles.label}>Country</Text>
        <TouchableOpacity
          style={styles.selectBox}
          onPress={() => openPicker('country')}
        >
          <Text style={styles.selectText}>
            {form.country || 'Select your country'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#aaa" />
        </TouchableOpacity>

        {/* CURRENCY */}
        <Text style={styles.label}>Select Preferred Currency</Text>
        <TouchableOpacity
          style={styles.selectBox}
          onPress={() => openPicker('currency')}
        >
          <Text style={styles.selectText}>{form.currency}</Text>
          <Ionicons name="chevron-down" size={20} color="#aaa" />
        </TouchableOpacity>

        {/* TERMS */}
        <TouchableOpacity
          style={styles.termsRow}
          onPress={() => setForm({ ...form, terms: !form.terms })}
        >
          <Ionicons
            name={form.terms ? 'checkbox' : 'square-outline'}
            size={20}
            color="#2ecc71"
          />
          <Text style={styles.termsText}>
            I agree to the{' '}
            <Text style={styles.link}>Terms Conditions</Text> &{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        {/* BUTTON */}
        <AppButton
          title="Continue"
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('VerifyOTP')}
        />

        {/* LOGIN */}
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
 </ScrollView>
        {/* PICKER MODAL */}
        <Modal transparent visible={picker.visible} animationType="fade">
          <TouchableOpacity style={styles.modalOverlay} onPress={closePicker}>
            <View style={styles.modalCard}>
              <FlatList
                data={picker.type === 'country' ? COUNTRIES : CURRENCIES}
                keyExtractor={i => i}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => selectValue(item)}
                  >
                    <Text style={styles.modalText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </KeyboardAvoidingView>
      </ImageBackground>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    paddingTop: hp('1%'),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  headerTitle: {
    color: '#fff',
    fontSize: wp('5.5%'),
    fontWeight: '600',
    marginLeft: wp('3%'),
  },

  label: {
    color: '#fff',
    marginBottom: hp('0.6%'),
    marginTop: hp('1.8%'),
    fontSize: wp('3.8%'),
  },

  selectBox: {
    height: hp('6.8%'),
    borderRadius: wp('4%'),
    backgroundColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
  },

  selectText: {
    color: '#aaa',
    fontSize: wp('4%'),
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },

  termsText: {
    color: '#ccc',
    marginLeft: wp('2%'),
    fontSize: wp('3.3%'),
    flex: 1,
  },

  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },

  loginText: {
    textAlign: 'center',
    color: '#888',
    marginTop: hp('2%'),
    fontSize: wp('3.5%'),
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    paddingHorizontal: wp('8%'),
  },

  modalCard: {
    backgroundColor: '#1c1c1c',
    borderRadius: wp('5%'),
    paddingVertical: hp('1%'),
  },

  modalItem: {
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('4%'),
  },

  modalText: {
    color: '#fff',
    fontSize: wp('4.2%'),
  },

  inputBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    height: hp('6.8%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
});


