// Build a Weather Component that fetches and displays live temperature for a city entered in an input box (trigger the API call in useEffect when the city changes).

import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App3() {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if(city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9738fee2400a8a7fc14a1b13f9db7d15&units=metric`)
            .then(response => response.json())
            .then(data => { 
                if(data.main) {  // check if data.main exists
                    setTemperature(data.main.temp);//get temperature in celsius
                } else {
                    setTemperature(null); // No data found for the city
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                setTemperature(null);
            });
        }
    })

    return (
        <View style={styles.container}>

            {temperature !== null ? (
                <Text style={styles.tempText}>Current Temperature in {city}: {temperature}°C</Text>
            ) : (
                city ? <Text style={styles.tempText}>No data available for "{city}"</Text> : null
            )}

            <TextInput 
                style={styles.input}
                placeholder="Enter the City"
                value={city}
                onChangeText={setCity}
            />
            
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App2")}> 
                <Text style={styles.buttonText}>Back Page</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App4")}> 
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
        backgroundColor: '#d0f0fdff',
    },
    tempText: {
        fontSize: 22,
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
    },
    Button2: {
        padding: 10,
        backgroundColor: '#5bc0de',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
    }
})