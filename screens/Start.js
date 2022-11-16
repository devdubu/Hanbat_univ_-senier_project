import React from "react";
import { View, Text, Button } from "react-native";

function Start({navigation}) {
  return (
    <View>
      <Button 
        title="출석 페이지" 
        onPress={() => navigation.navigate('출석')}
      />
      <Button 
        title="과제 페이지" 
        onPress={() => navigation.navigate('과제')}
      />
      <Button 
        title="시험 페이지" 
        onPress={() => navigation.navigate('시험')}
      />
    </View>
  );
}

export default Start;