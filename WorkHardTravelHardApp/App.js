import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  // UI변화가 없는 터쳐블
  TouchableWithoutFeedback,
  // feedback과 비슷. 더 많은 설정을 줄 수 있음
  Pressable,
  TextInput,
  ScrollView,
  Alert,
  // icons.expo.fyi
} from "react-native";
import { theme } from "./color";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  const [working, setWorking] = useState(false);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const STOARAGE_KEY = "@toDos";
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STOARAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STOARAGE_KEY);
    setToDos(JSON.parse(s));
    // console.log(s);
  };
  useEffect(() => {
    loadToDos();
  }, []);
  const addTodo = async () => {
    if (text === "") {
      return;
    }
    // alert(text);
    // save to do
    // const newToDos = Object.assign({}, toDos, {
    //   [Date.now()]: { text, work: working },
    // });
    const newToDos = { ...toDos, [Date.now()]: { text, working } };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };
  console.log(toDos);
  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity
          // hitSlop : 어느 범위까지 터치 가능하게 할지 하는 것
          onPress={work}
        >
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={travel}
          // underlayColor="white"
          // activeOpacity={0.5}
          // onPress={() => console.log("press")}
        >
          <Text
            style={{ ...styles.btnText, color: working ? theme.grey : "white" }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={working ? "Add a Todo" : "Where do you want to go?"}
          // 대문자 언제 나오게할지
          // autoCapitalize={""}
          // placeholderTextColor={}
          // keyboardType="number-pad"
          // keyboardType="email-address"
          // keyboardType="phone-pad"
          // 키보드 우하단 버튼 이름이 바뀜
          returnKeyType="done"
          // 암호화
          // secureTextEntry
          // 줄 넘어가면 height가 늘어남
          // multiline
          onChangeText={onChangeText}
          value={text}
          // onSubmit하고 같은 효과, 여기에 post함수 넣으면 될 듯
          onSubmitEditing={addTodo}
        />
      </View>
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Text>❌</Text>
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: 600,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    // paddingVertical: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
