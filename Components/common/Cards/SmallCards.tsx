import { Icon, Text, VStack } from "@react-native-material/core";
import React from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

type props = {
  variant?: "default" | "textinside" | "";
  navigateUrl?: string;
  cardStyle?: ViewStyle;
  title: string;
  gradientColors?: string[];
  textColor?: string;
  subTitle?: string;
  iconName: string;
  key?: string | number;
  iconSize?: number;
  textVariant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "";
};

const SmallCards = ({
  variant = "default",
  navigateUrl,
  cardStyle,
  title,
  gradientColors,
  textColor,
  textVariant,
  subTitle,
  iconName,
  key,
  iconSize,
}: props) => {
  return (
    <Pressable
      onPress={() => (navigateUrl ? router.navigate(navigateUrl) : {})}
      key={key}
    >
      <View style={styles.cardContainer}>
        <VStack justify="center" items="center" spacing={6}>
          <LinearGradient
            colors={gradientColors ? gradientColors : ["#7954ff", "#3f269d"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradient}
          >
            <View
              style={{
                ...cardStyle,
                ...styles.cardIconWrapper,
              }}
            >
              <VStack justify="center" items="center" spacing={6}>
                <Icon
                  name={iconName}
                  size={iconSize ? iconSize : 40}
                  color="white"
                />
                {variant === "textinside" && (
                  <>
                    <Text
                      variant={textVariant ? textVariant : "body1"}
                      style={{ color: textColor, ...styles.title }}
                    >
                      {title}
                    </Text>
                    <Text
                      variant={textVariant ? textVariant : "body2"}
                      style={{ color: textColor }}
                    >
                      {subTitle}
                    </Text>
                  </>
                )}
              </VStack>
            </View>
          </LinearGradient>
          {(variant === "default" || variant === "") && (
            <Text
              style={{
                color: textColor,
                ...styles.title,
                maxWidth: 100,
                textAlign: "center",
              }}
              ellipsizeMode="tail"
              lineBreakStrategyIOS="hangul-word"
              textBreakStrategy="highQuality"
              numberOfLines={2}
            >
              {title}
            </Text>
          )}
          {(variant === "default" || variant === "") && <Text>{subTitle}</Text>}
        </VStack>
      </View>
    </Pressable>
  );
};

export default SmallCards;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
  },
  cardIconWrapper: {
    padding: 10,
    borderRadius: 10,
  },
  gradient: {
    borderRadius: 10,
  },
  title: {
    fontWeight: 600,
  },
});
