// Create a Network Status Tracker that listens for online and offline browser events using useEffect and displays 'You’re Offline' when disconnected.
import { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import NetInfo from "@react-native-community/netinfo";

export default function App4() {
    const [online, setOnline] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const network = NetInfo.addEventListener((state) => {
        setOnline(state.online);
        });

        return () => network();
    }, []);
   
    return (
        <View style={[styles.container, !online && {backgroundColor: '#ffcccb'}]}>
            <Text style={styles.text}>
                {online ? "You are Online" : "You are Offline"}
            </Text>
             
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App3")}> <Text style={styles.buttonText}>Back Page</Text> </TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App5")}> <Text style={styles.buttonText}>Next Page</Text> </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifiConent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7cac9ff',
        paddingTop: 150,
    },
    offlineText: {
        fontSize: 28,
        color: 'red',
    },
    onlineText: {
        fontSize: 28,
        color: 'green',
    },
    Button2: {
        padding: 10,
        backgroundColor: '#f78181',
        borerRadius: 5,
        marginTop: 20,
    }
});