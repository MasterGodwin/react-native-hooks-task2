// Build a Dynamic Font Size Controller — two buttons (A+ and A−) should increase or decrease the font size of a paragraph live using useState.

import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App2() {
    const [fontSize, setFontSize] = useState();
    const router = useRouter();

    function increase() {
        setFontSize((increaseSize) => (increaseSize ? increaseSize + 2 : 18));  
    }

    function decrease() {
        setFontSize((decreaseSize) => (decreaseSize ? decreaseSize - 2 : 12));
    }

    return (
        <View style={styles.container}>
            <Text style={ fontSize ? { fontSize: fontSize } : { fontSize: 20 } }>
                This is a sample paragraph. Use the buttons below to adjust the font size dynamically.
            </Text>
            <View style={styles.Buttons}>
            <TouchableOpacity style={styles.Button} onPress={increase}>
                <Text style={styles.buttonText}>A+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={decrease}>
                <Text style={styles.buttonText}>A-</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App1")}> 
                <Text style={styles.buttonText}>Back Page</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App3")}> 
                <Text style={styles.buttonText}>Next Page</Text> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    Buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        gap: 10,
    },
    Button: {
        padding: 20,
        backgroundColor: '#4ee8f0ff',
        borderRadius: 10,
        marginTop: 20,
    },
    Button2: {
        padding: 10,
        backgroundColor: '#5bc0de',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    }
})