import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/common/customButton';
import Input from '../components/common/customTextInput';

const SingnUpScreen = () => {
  return (
    <LinearGradient
      colors={['#26A171', '#20866E', '#134F69']}
      style={styles.linearGradient}>
      <Text
        style={{
          fontSize: 25,
          color: '#FFFFFF',
          paddingTop: 60,
          fontWeight: '900',
        }}>
        Sign Up
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: '#FFFFFF',
          paddingTop: 10,
        }}>
        Lorem ipsum dolor sit amet consectetur.
      </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image}></Image>
        <View
          style={{
            display: 'flex',
            height: 80,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image style={styles.icon}></Image>
            <Text style={{color: '#fff'}}>Take a picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.icon}></Image>
            <Text style={{color: '#fff'}}>Select from gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Input placeholder={'Enter your name'} />
        <Input placeholder={'Enter your email'} />
        <Input placeholder={'+00'} />
        <Input placeholder={'Enter your password'} />
        <Input placeholder={'Confirm password'} />
        <CustomButton title={'Sign Up'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 10,
            }}>
            Aready have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#4AB147',
                fontWeight: '600',
                fontSize: 14,
                paddingLeft: 5,
                alignSelf: 'center',
              }}>
              Signin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  textColor: {
    color: '#FFFFFF',
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 20,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginRight: 15,
  },
});

export default SingnUpScreen;
