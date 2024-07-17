import React, { memo } from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

type Props = {
  goBack: () => void;
  absolute?: boolean;
};

const BackButton = ({ goBack, absolute = true }: Props) => (
  <Pressable onPress={goBack} style={absolute ? styles.container : {}}>
    <Image
      style={styles.image}
      source={require("@/assets/images/back_arrow.png")}
    />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30 + getStatusBarHeight(),
    left: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default memo(BackButton);
