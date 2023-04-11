import { StatusBar } from "expo-status-bar";

import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import Component from "./Component";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>제가 만든 앱 첫 번째 화면 입니다.</Text>

      <StatusBar style="auto" />
      <Image
        style={styles.local_image}
        source={require("./KIMJONGHYEOK.jpg")}
      />
      {/* input 역할 */}
      <TextInput placeholder="이름을 입력해주세요" />
      <Button
        title="Click Me"
        onPress={() => {
          console.log("안녕하세요");
        }}
      />
      <Switch value={true} />
      <Switch value={false} />
      <Component />
      <ScrollView>
        <Image
          style={styles.local_image}
          source={require("./KIMJONGHYEOK.jpg")}
        />
        <Image
          style={styles.local_image}
          source={require("./KIMJONGHYEOK.jpg")}
        />
        <Image
          style={styles.local_image}
          source={require("./KIMJONGHYEOK.jpg")}
        />
        <Image
          style={styles.local_image}
          source={require("./KIMJONGHYEOK.jpg")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
  local_image: {
    width: 300,
    height: 300,
  },
});
