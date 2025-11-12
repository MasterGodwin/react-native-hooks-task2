import React, { useState, useMemo } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

export default function CurrencyConverter() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [amount, setAmount] = useState("1");
  const router = useRouter();
 
  const conversionRates = useMemo(() => {
    console.log("Recalculating conversion rates...");

    const rates = {
      USD: { INR: 83.5, EUR: 0.93, GBP: 0.78 },
      INR: { USD: 0.012, EUR: 0.011, GBP: 0.0093 },
      EUR: { USD: 1.07, INR: 90.1, GBP: 0.84 },
    };

    return rates[baseCurrency];
  }, [baseCurrency]);
 
  const convertedAmount = (
    parseFloat(amount || 0) * (conversionRates[targetCurrency] || 1)
  ).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Currency Converter</Text>

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>From Currency:</Text>
      <Picker
        selectedValue={baseCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setBaseCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="INR" value="INR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>

      <Text style={styles.label}>To Currency:</Text>
      <Picker
        selectedValue={targetCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setTargetCurrency(itemValue)}
      >
        <Picker.Item label="INR" value="INR" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="GBP" value="GBP" />
      </Picker>

      <Text style={styles.result}>
        {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
      </Text>

      <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App7")}> <Text style={styles.buttonText}>Back Page</Text> </TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App9")}> <Text style={styles.buttonText}>Next Page</Text> </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  picker: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderRadius: 8,
  },
  result: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
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
});
