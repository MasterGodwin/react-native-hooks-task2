import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const clickCount = useRef(0);      
  const router = useRouter();

  const handleClick = () => {
    clickCount.current =  clickCount.current + 1;
    console.log("Button clicked:", clickCount.current, "times");       
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      {clickCount.current}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.btnText}>Click Me</Text>
      </TouchableOpacity>

      <View style={styles.Button2}>
                <TouchableOpacity onPress={() => router.push("/App5")} style={styles.Button3}>
                    <Text> Back Page </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/App7")} style={styles.Button3}>
                    <Text> Next Page </Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  text: {
    fontSize: 28,
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#5cb85c",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  Button2:{
        flexDirection: 'row',
        marginTop: 20,
    },
    Button3: {
        padding: 10,
        backgroundColor: '#5bc0de',
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 10,
    }
});
