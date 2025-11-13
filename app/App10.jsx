// Create a Stopwatch App with Start, Stop, and Reset buttons. Use useCallback to memoize the control handlers so they don’t re-create on every render.

import { useState, useRef, useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function StopwatchApp() {
  const [time, setTime] = useState(0);     
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);          
  const router = useRouter();
 
  const handleStart = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }, [isRunning]);
 
  const handleStop = useCallback(() => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  }, [isRunning]);
 
  const handleReset = useCallback(() => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  }, []); 

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
 
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⏱ Stopwatch</Text>
      <Text style={styles.timer}>{formatTime(time)}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.startBtn} onPress={handleStart}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.stopBtn} onPress={handleStop}>
          <Text style={styles.btnText}>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/App8")}
      >
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fefbd8",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  startBtn: {
    backgroundColor: "#5cb85c",
    padding: 15,
    borderRadius: 10,
  },
  stopBtn: {
    backgroundColor: "#d9534f",
    padding: 15,
    borderRadius: 10,
  },
  resetBtn: {
    backgroundColor: "#5bc0de",
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "#f0ad4e",
    borderRadius: 8,
  },
});
