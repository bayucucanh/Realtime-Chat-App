import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {LoginAnim} from '../../assets';
import {CustomButton, CustomInput} from '../../components';
import {COLORS, FONTS, SIZES} from '../../themes';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils';

export default function Register({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {control, handleSubmit} = useForm();

  return (
    <ScrollView contentContainerStyle={styles.scroll} testID="LoginScreen">
      <View style={styles.container}>
        <LottieView
          style={styles.logoImage}
          source={LoginAnim}
          autoPlay
          loop={false}
        />
        <View>
          {/* <Text style={styles.title}>Register</Text> */}

          <View style={styles.form}>
            <CustomInput
              testID="input-email"
              label="Email"
              name="email"
              iconPosition="right"
              placeholder="Enter Email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />
            <CustomInput
              testID="input-username"
              label="Username"
              name="username"
              iconPosition="right"
              placeholder="Enter Username"
              control={control}
              rules={{
                required: 'Username is required',
              }}
            />
            <CustomInput
              testID="input-password"
              label="Password"
              name="password"
              iconPosition="right"
              secureTextEntry={isSecureEntry}
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                pattern: {
                  value: PASSWORD_REGEX,
                  message:
                    'Password must be contain at least 1 letter and 1 number',
                },
              }}
              placeholder="Enter Password"
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Icon
                    name={isSecureEntry ? 'eye-off' : 'eye'}
                    size={24}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
              }
            />
            <CustomButton testID="btn-login" primary title="Login" />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                <Text style={styles.linkBtn}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 190,
    borderRadius: 10,
  },
  scroll: {flexGrow: 1, backgroundColor: COLORS.white},
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoImage: {
    height: SIZES.width * 0.7,
    width: SIZES.width * 0.7,
    alignSelf: 'center',
    // marginTop: 50,
  },
  title: {
    ...FONTS.h2,
    textAlign: 'center',
    paddingTop: 4,
    color: COLORS.black,
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },

  form: {
    paddingTop: 4,
  },
  createSection: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  linkBtn: {
    marginTop: 7,
    color: COLORS.primary,
    ...FONTS.h3,
  },

  infoText: {
    ...FONTS.body4,
  },
});
