import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
  } from "react-native";
  import React, { useState } from "react";
//   import { Entypo } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
//   import { useNavigation } from "@react-navigation/native";
//   import axios from 'axios';
  
  
  const RatingsScreen = () => {
    const [s1, setS1] = useState("white");
    const [s2, setS2] = useState("white");
    const [s3, setS3] = useState("white");
    const [s4, setS4] = useState("white");
    const [s5, setS5] = useState("white");
  
    let number=0;
    
    const changeColor = (value) => {
      if (value == "s1") {
        setS1("orange");
        setS2("white");
        setS3("white");
        setS4("white");
        setS5("white");
        number=1;
      } else if (value == "s2") {
        setS1("orange");
        setS2("orange");
        setS3("white");
        setS4("white");
        setS5("white");
        number=2;
      } else if (value == "s3") {
        setS1("orange");
        setS2("orange");
        setS3("orange");
        setS4("white");
        setS5("white");
        number=3;
      } else if (value == "s4") {
        setS1("orange");
        setS2("orange");
        setS3("orange");
        setS4("orange");
        setS5("white");
        number=4;
        
      } else {
        setS1("orange");
        setS2("orange");
        setS3("orange");
        setS4("orange");
        setS5("orange");
        number=5;
      }
    };
    const data={
      "reviewComment": "string",
      "score":number,
      "serviceProvider": 4,
      "status": "PENDING",
      "userId": 1
    }
  
    // const rate=async()=>{
    //   await axios.post(`${base}/api/service-rating`,data,{
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //    })
    //     .then(function (response) {
      
    //       // console.log(response.data);
    //     })
    //     .catch(function (error) {
    // // console.log("error hrere", error.response.data);
    //     });
    
    // }
  
    
    // const navigation = useNavigation();
  
    // const resetStack = () => {
    //   // navigation.dispatch((state) =>
    //   //   CommonActions.reset({
    //   //     ...state,
    //   //     index: 0,
    //   //     // actions: [CommonActions.navigate({ routeName: "CartH" })],
    //   //   })
    //   // );
    //   navigation.navigate("CartH");
    // };
  
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          hidden={false}
          // translucent = {true}
        />
  
        <View style={styles.first}>
          <Text style={styles.ft}>Yaaay!!!</Text>
          <Text style={styles.ft}>we value all feedback </Text>
          <Text style={styles.ft}>Please rate your experince</Text>
          <Text style={styles.ft}>bellow:</Text>
        </View>
  
        <View style={styles.stars}>
          <TouchableOpacity onPress={() => changeColor("s1")}>
            <AntDesign name="star" size={24} color={s1} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => changeColor("s2")}>
            <AntDesign name="star" size={24} color={s2} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => changeColor("s3")}>
            <AntDesign name="star" size={24} color={s3} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => changeColor("s4")}>
            <AntDesign name="star" size={24} color={s4} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor("s5")}>
            <AntDesign name="star" size={24} color={s5} />
          </TouchableOpacity>
        </View>
  
        <View style={styles.thanks}>
          <Text style={styles.ft}>
            Thank you for helping us improve our service !
          </Text>
        </View>
  
        <TouchableOpacity
          onPress={()=>{resetStack();rate()}}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
            Supa
          </Text>
          <Text style={{ color: "orange", fontSize: 40, fontWeight: "bold" }}>
            Menu
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default RatingsScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      height: "100%",
    },
    ft: {
      color: "orange",
      fontSize: 21,
      textAlign: "center",
      fontWeight: "500",
    },
    first: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 70,
    },
    stars: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 70,
      marginLeft: 30,
      marginRight: 30,
    },
    thanks: {
      textAlign: "center",
      marginTop: 70,
    },
    thanksText: {
      color: "orange",
    },
  });
  