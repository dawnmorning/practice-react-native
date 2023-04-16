import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import Header from "./src/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(statusBarHeight);
console.log(bottomSpace);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView
        style={styles.container}
        edges={["right", "bottom", "left"]}
      >
        <StatusBar style="auto" />
        <Header />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: "#fff",
    // paddingBottom: bottomSpace,
  },
});
