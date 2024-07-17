import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from "react-native";

type Props = {
  backgroundColor?: string;
  backgroundImage?: string;
  mode?: "cover" | "contain" | "center" | "repeat" | "stretch";
  children: React.ReactNode;
};

const Background = ({
  children,
  backgroundColor,
  backgroundImage,
  mode,
}: Props) => {
  const image = {
    uri: backgroundImage,
  };
  return (
    <View
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "white",
        flex: 1,
      }}
    >
      <ImageBackground
        source={
          backgroundImage
            ? image
            : require("@/assets/images/background_dot.png")
        }
        resizeMode={mode ? mode : "repeat"}
        style={styles.background}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {children}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
    maxWidth: "90%",
    height: "auto",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default memo(Background);
