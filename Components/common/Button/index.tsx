import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[
      styles.button,
      mode === "outlined"
        ? {
            backgroundColor: "#fff",
            borderBottomWidth: 6,
            borderBottomColor: "#663399",
          }
        : {
            borderBottomColor: "#00000029",
            borderBottomWidth: 6,
          },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 10,

    letterSpacing: 0.8,
    lineHeight: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});

export default memo(Button);
