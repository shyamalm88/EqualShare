import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Avatar, Text, VStack } from "@react-native-material/core";
import { router } from "expo-router";

const ContactListItemView = ({ data, limit, settled }: any) => {
  const [limitData, setLimitData] = React.useState([]);
  React.useEffect(() => {
    if (limit && data) {
      const d = data?.slice(0, limit);
      setLimitData(d);
    } else {
      setLimitData(data);
    }
  }, [data, limit]);
  return (
    <>
      {(limitData == null || limitData?.length === 0) && (
        <ImageBackground
          source={require("@/assets/images/9170826.jpg")}
          resizeMode="cover"
          style={styles.background}
        />
      )}
      <VStack spacing={4}>
        {limitData?.length &&
          limitData.map((item: any) => {
            return (
              <Pressable
                style={{ height: 80 }}
                onPress={() =>
                  router.push(
                    `/(individualPages)/profileView/${item.contactId}`
                  )
                }
                key={item.id}
              >
                <View style={styles.mainCardView}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <View style={styles.subCardView}>
                      <Avatar size={40} label={item.name} autoColor />
                    </View>
                    <View style={{ marginLeft: 12, flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#333",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.name}
                      </Text>
                      {settled && (
                        <View
                          style={{
                            marginTop: 4,
                            borderWidth: 0,
                          }}
                        >
                          <Text
                            variant="subtitle2"
                            color="gray"
                            style={{ fontSize: 10 }}
                          >
                            {item.settledDate}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      marginLeft: 26,
                      alignItems: "flex-end",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <VStack spacing={4} items="end">
                      <Text
                        style={{
                          color:
                            item.amountOwe < 0
                              ? settled
                                ? "gray"
                                : "red"
                              : item.amountOwe === 0
                              ? "gray"
                              : settled
                              ? "gray"
                              : "#299764",
                          fontSize: 12,
                        }}
                      >
                        {item.amountOwe < 0
                          ? settled
                            ? `You Settled`
                            : `You owe`
                          : item.amountOwe === 0
                          ? `no expenses`
                          : settled
                          ? `Already settled`
                          : `Owes you`}
                      </Text>
                      <Text
                        style={{
                          color:
                            item.amountOwe < 0
                              ? settled
                                ? "black"
                                : "red"
                              : item.amountOwe === 0
                              ? "gray"
                              : settled
                              ? "black"
                              : "#299764",
                          fontSize: 16,
                        }}
                      >
                        {Math.abs(item.amountOwe) === 0
                          ? ""
                          : "₹" + Math.abs(item.amountOwe)}
                      </Text>
                    </VStack>
                  </View>
                </View>
              </Pressable>
            );
          })}
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  mainCardView: {
    height: 70,
    // alignItems: "center",
    backgroundColor: "#ffffff6e",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#d7d7d7",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 16,
    alignContent: "center",
  },
  subCardView: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: "red",
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: 300,
    flex: 1,
    flexDirection: "column",
  },
});

export default ContactListItemView;
