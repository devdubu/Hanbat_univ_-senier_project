import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-ionicons'
import { Entypo } from '@expo/vector-icons';



function Attendance({navigation}) {
    const [data, setData] = useState({
        professor_name: '김아무개',
        class_week : 3,
        class_date : "20220915",
        class_place : "DH301",
        is_attendance: false,
    })

  return (
    <View style={styles.Main}>
    <View style={styles.container}>
      {/** 상단 수업 제목 및 메뉴 버튼  */}
      <View style={styles.menu}>
        <View style={styles.menuTitle}>
          <Text style={styles.classTitle}>수업 제목</Text>
        </View>      
      </View>
      {/** 하단 컨텐츠 */}
      <View style={styles.content}>
        
        {/** 컨텐츠 내용 */}
        <View style={styles.mainContent}>
          {/** 컨텐츠 내용 1 */}
          <View style={styles.subContent1}>
            {/** 주차 */}
            <View style={styles.subContent2}>
                <Text style={styles.subContent2Text}>주차</Text>
            </View>
            <View style={styles.subContent3}>
                <Text style={styles.subContent2Text} >{data.class_week} 주차</Text>
            </View>
          </View>
          {/** 컨텐츠 내용 2 */}
          <View style={styles.subContent1}>
            {/** 수업 정보 */}
            <View style={styles.subContent2}>
                <Entypo name="book" size={52} color="white" />
                <Text style={styles.subContent2Text}>수업정보</Text>
            </View>
            <View style={styles.subContent3}>
                <Text > 담당 교수 : {data.professor_name}</Text>
                <Text> 수업 일자 : {data.class_date} </Text>
                <Text> 수업 장소 : {data.class_place}</Text>
            </View>
          </View>
          {/** 컨텐츠 내용 3 */}
          <View style={styles.subContent1}>
            <View style={styles.subContent2}>
                <Text style={styles.subContent2Text}>전자 출석</Text>
            </View>
            <View style={styles.subContent3}>
                <Button title="출석 신청" onPress={() => navigation.navigate('Auth')}/>
            </View>
          </View> 
        </View>
      </View> 
    </View>
    <View style={styles.footer}>
        
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    Main:{
      flex:1
    },
    container: {
      flex: 4,
      backgroundColor: 'white',
    },
    menu:{
      flex:1,
      backgroundColor:'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuTitle:{
      flex:1.7,
      justifyContent:'center',
      alignItems: 'flex-start',
    },
    classTitle:{
        fontSize: 28,
        color: 'white'
    },
  
    content:{
      flex:6,
      backgroundColor: 'lightgray',
  
    },
    contentTitle:{
      flex:1,
      backgroundColor:'lightgray',
      justifyContent:'center',
      alignItems: 'center',
  
    },
    contentTitleText:{
      color: 'white',
      fontSize: 20,
    },
    mainContent:{
      flex: 10,
      backgroundColor:'white'
    },
    subContent1:{
      flex:1,
      flexDirection:'row',
      margin:10,
      borderRadius:10,
      
    },
    subContent2:{
      flex:1,
      backgroundColor:'lightgray',
      margin:10,
      marginBottom:5,
      borderRadius:10,
      //그림자 설정
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
  
      elevation: 24,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    subContent2Text:{
        color: 'white',
        fontWeight: '300',
        fontSize: 20
    },
    subContent3:{
      flex:3,
      backgroundColor:'lightgray',
      margin:10,
      marginBottom:5,
      borderRadius:10,
      // 그림자 설정
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
  
      elevation: 24,

        justifyContent: 'center',
        alignItems: 'center',
    },
  
    footer:{
        flex:2,
        
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
  });

export default Attendance;