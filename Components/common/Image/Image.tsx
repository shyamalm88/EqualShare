// import { Image } from "expo-image";
import { StyleSheet, View, Image } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const ImageComponent = ({ source }: any) => {
  return (
    <Image style={styles.image} source={source} onProgress={() => blurhash} />
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 30 + getStatusBarHeight(),
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "auto",
    minHeight: 400,
  },
});
