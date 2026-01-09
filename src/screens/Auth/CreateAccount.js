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
  ImageBackground
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
  container: { flex: 1, padding: 10 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 12,
  },

  label: {
    color: '#fff',
    marginBottom: 6,
    marginTop: 14,
  },

  selectBox: {
    height: 54,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  selectText: {
    color: '#aaa',
    fontSize: 15,
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  termsText: {
    color: '#ccc',
    marginLeft: 8,
    fontSize: 13,
    flex: 1,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },

  loginText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 18,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    padding: 30,
  },
  modalCard: {
    backgroundColor: '#1c1c1c',
    borderRadius: 18,
    padding: 10,
  },
  modalItem: {
    padding: 14,
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
  },
});
