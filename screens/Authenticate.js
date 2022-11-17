import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

function Authenticate({navigation}) {
    const [grantAccess, setGrantAccess] = useState(false);
    useEffect(() => {
      (async () => {
        const auth = await LocalAuthentication.authenticateAsync();
        if (auth.success) {
            setGrantAccess(true);
            navigation.navigate('QR');
        } else {
            setGrantAccess(false)
        };
      })();
    }, []);
  return (
    <View style={styles.container}>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default Authenticate;