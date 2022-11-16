import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

function Main() {
  return (
    <View style={styles.Main}>
    <View style={styles.container}>
      {/** 상단 수업 제목 및 메뉴 버튼  */}
      <View style={styles.menu}>
        <View style={styles.menuToggle}>
          <Button title='이건 메뉴'/>
        </View>
        <View style={styles.menuTitle}>
          <Text style={styles.classTitle}>수업 제목</Text>
        </View>      
      </View>
      {/** 하단 컨텐츠 */}
      <View style={styles.content}>
        {/** 컨텐츠 제목 */}
        <View style={styles.contentTitle}>
          <Text style={styles.contentTitleText}>출석</Text>
        </View>
        {/** 컨텐츠 내용 */}
        <View style={styles.mainContent}>
          {/** 컨텐츠 내용 1 */}
          <View style={styles.subContent1}>
            <View style={styles.subContent2}></View>
            <View style={styles.subContent3}></View>
          </View>
          {/** 컨텐츠 내용 2 */}
          <View style={styles.subContent1}>
            <View style={styles.subContent2}></View>
            <View style={styles.subContent3}></View>
          </View>
          {/** 컨텐츠 내용 3 */}
          <View style={styles.subContent1}>
            <View style={styles.subContent2}></View>
            <View style={styles.subContent3}></View>
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
      flexDirection:'row',
      backgroundColor:'skyblue',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 10
    },
    menuToggle:{
      flex: 1,
      justifyContent:'center',
      alignItems: 'flex-start',
    },
    menuTitle:{
      flex:1.7,
      justifyContent:'center',
      alignItems: 'flex-start',
    },
    classTitle:{
      fontSize: 28,
  
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
      backgroundColor:'gray',
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
  
    },
    subContent3:{
      flex:3,
      backgroundColor:'gray',
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
    },
  
    footer:{
      flex:2,
      backgroundColor:"blue",
    },
  
  });

export default Main;