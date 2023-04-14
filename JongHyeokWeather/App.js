// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>반응형이 아닌 제가 만든 앱입니다.</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 28,
//     color: "white",
//   },
// });
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "tomato" }}
      ></View>
      <View style={{ width: 200, height: 200, backgroundColor: "teal" }}></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "orange" }}
      ></View>
    </View>
  );
}
