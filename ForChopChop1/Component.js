import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  return (
    <View>
      <Text>클릭시 {count} 올라갑니다.</Text>
      <View>
        <Button title="클릭해보세요" onPress={() => setCount(count + 1)} />
      </View>
      <Switch value={isOn} onValueChage={(v) => setIsOn(v)} />
      {isRefresh && <ActivityIndicator />}
      {/* <TextInput value = {name}  /> */}
    </View>
  );
};
export default Component;
