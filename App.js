import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Start";
import Main from "./screens/Main";

import Attendance from "./screens/Attendance";
import Exam from "./screens/Exam";
import Task from "./screens/Task";

import QRCodeScanner from "./screens/QRCodeScanner";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator  initialRouteName="Start">
        <Stack.Screen name="시작페이지" component={Start} />
        <Stack.Screen name="출석" component={Attendance} />
        <Stack.Screen name="시험" component={Exam} />
        <Stack.Screen name="과제" component={Task} />

        <Stack.Screen name="QR" component={QRCodeScanner} />

        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// 색상 수정해야함
// skyblue -> blue-300
// 