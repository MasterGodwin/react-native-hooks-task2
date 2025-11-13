// Build a Prime Number Finder: take a number input and show all prime numbers up to that number, using useMemo to avoid recalculating when input is unchanged.
import { useState , useMemo } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App7() {
    const [number, setNumber] = useState("10"); 
    const router = useRouter(); 

    const primes = useMemo(() => {
        const numm = parseInt(number);
        if (isNaN(numm) || numm < 2) return [];
        const primeNumbers = [];
        for (let i = 2; i <= numm; i++) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) primeNumbers.push(i);
        }
        return primeNumbers;
    }, [number]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder= "Enter a number"
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}  
            />
            <Text style={styles.resultText}>
                Prime Numbers: {primes.length > 0 ? primes.join(", ") : "None"}
            </Text>
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App6")}> 
                <Text style={styles.buttonText}>Back Page</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App8")}> 
                <Text style={styles.buttonText}>Next Page</Text> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e0f7fa',
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: '#00796b',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 18,
    },
    resultText: {
        fontSize: 18,
        marginVertical: 20,
        textAlign: 'center',
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