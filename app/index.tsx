import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Flappy Bird </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },
  
  text: {
      fontSize: 50,
      fontWeight: "bold",
      color: "white",
      marginTop: 100,
  },

});
