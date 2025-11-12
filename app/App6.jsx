// Build a Click Counter that counts how many times a specific button is clicked — without causing re-renders — using only useRef.

import { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
    const [count, setCount] = useState(0);
    const Counter = useRef(0);
    const router = useRouter();

    const handleCount = () => {
        Counter.current += 1;
        console.log(Counter.current);
        setCount(Counter.current);
    }

    return (
        <View style={styles.container}>
            <Text>Count: {count}</Text>
            <TouchableOpacity
                onClick={handleCount}
                style={styles.Button}
            >
              <Text>  Count </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        padding: 10,
        backgroundColor: '#4ee8f0ff',
        borderRadius: 10,
        marginTop: 20,
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