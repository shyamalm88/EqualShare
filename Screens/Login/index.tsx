import React, { memo, useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Background from "@/Components/common/Background";
import Logo from "@/Components/common/Logo";
import Header from "@/Components/common/Header";
import BackButton from "@/Components/common/BackButton";
import Button from "@/Components/common/Button";
import TextInput from "@/Components/common/TextInput";

import { theme } from "@/core/theme";
// import { emailValidator, passwordValidator } from "@/core/utils";
import { Navigation } from "@/core/types";
import { router } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

type Props = {
  navigation: Navigation;
};

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [otp, setOTP] = React.useState("");
  const [confirm, setConfirm] = React.useState<any>(null);
  const navigation = useNavigation();
  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = auth().signInWithPhoneNumber(phoneNumber);
      console.log(confirmation);
      setConfirm(confirmation);
    } catch (err) {
      console.log(err);
    }
  };
  const confirmOtp = async () => {
    try {
      const userCredentials = await confirm.confirm(otp);
      const user = userCredentials.user;
      const userDocument = await firestore()
        .collection("users")
        .doc(user.uid)
        .get();
      if (userDocument.exists) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("Profile", { uid: user.uid });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const _onLoginPressed = () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // }
    router.navigate("/(tabs)/home");
  };
  return (
    <Background>
      <BackButton goBack={() => router.navigate("/")} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Phone Number"
        returnKeyType="send"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        // autoCompleteType=""
        // textContentType=""
        keyboardType="name-phone-pad"
      />
      {confirm && (
        <TextInput
          label="OTP"
          returnKeyType="done"
          value={otp}
          onChangeText={(text) => setOTP(text)}
          // error={!!password.error}
          // errorText={password.error}
          secureTextEntry
        />
      )}
      {/* <View style={styles.forgotPassword}>
          <Pressable onPress={() => router.navigate("/forgotPassword")}>
            <Text style={styles.label}>Forgot your password?</Text>
          </Pressable>
        </View> */}
      {!confirm && (
        <Button mode="contained" onPress={signInWithPhoneNumber}>
          Get OTP
        </Button>
      )}
      {confirm && (
        <Button mode="contained" onPress={confirmOtp}>
          Submit
        </Button>
      )}
      {/* <View style={styles.row}>
          <Text style={styles.label}>Don’t have an account? </Text>
          <Pressable onPress={() => router.navigate("/register")}>
            <Text style={styles.link}>Sign up</Text>
          </Pressable>
        </View> */}
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
