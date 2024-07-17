import * as React from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import Background from "../Background";
import Logo from "../Logo";
import Header from "../Header";
import Paragraph from "../Paragraph";
import Button from "../Button";
import { router } from "expo-router";
import { ImageComponent } from "../Image/Image";
import { Button as PButton } from "react-native-paper";
import { useAssets } from "expo-asset";

export const PagerViewComponent = () => {
  const width = Dimensions.get("window").width;
  const staticContent = {
    title: "Welcome to Split Expense!",
    imageSrc: require("@/assets/images/logo.png"),
    subTitle:
      "SplitExpense simplify cost division among friends, family, or roommates by automating calculations and tracking who owes what.",
    description: "",
  };
  const data = [
    {
      title: "Split Expense",
      imageSrc: require("@/assets/images/20943777.png"),
      subTitle:
        "Split Expense: Track, split, and settle group bills without the awkwardness.",
      description: "",
    },
    {
      title: "Signup",
      imageSrc: require("@/assets/images/bill-analysis-concept-illustration.png"),
      subTitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut delectus expedita laborum ipsum a explicabo, omnis eveniet vero provident",
      description: "",
    },
    {
      title: "Start Using SplitExpense",
      imageSrc: require("@/assets/images/asd.png"),
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut",
      description: "",
    },
  ];

  const offset = useSharedValue(2);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <View style={{ flex: 1 }}>
      {activeIndex <= data.length - 1 ? (
        <Carousel
          loop={false}
          defaultIndex={activeIndex}
          width={width}
          autoPlay={false}
          ref={ref}
          data={data}
          scrollAnimationDuration={1000}
          pagingEnabled
          snapEnabled
          defaultScrollOffsetValue={offset}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <Background>
              <ImageComponent source={data[index].imageSrc} />
              <Header>{data[index].title}</Header>
              <Paragraph>{data[index].subTitle}</Paragraph>
              <Paragraph>{data[index].description}</Paragraph>
              {index < data.length - 1 ? (
                <Button mode="outlined" onPress={() => ref?.current?.next()}>
                  Next
                </Button>
              ) : (
                <Button
                  mode="contained"
                  onPress={() => setActiveIndex(data.length + 1)}
                >
                  Done
                </Button>
              )}

              {index < data.length - 1 && (
                <PButton
                  mode="text"
                  onPress={() => setActiveIndex(data.length + 1)}
                >
                  Skip
                </PButton>
              )}
            </Background>
          )}
        />
      ) : (
        <Background>
          <ImageComponent source={staticContent.imageSrc} />
          <Header>{staticContent.title}</Header>
          <Paragraph>{staticContent.subTitle}</Paragraph>

          <Button mode="contained" onPress={() => router.navigate("/login")}>
            Login
          </Button>
          <Button mode="outlined" onPress={() => router.navigate("/register")}>
            Signup
          </Button>
        </Background>
      )}
    </View>
  );
};
