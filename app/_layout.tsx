// FILE: app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack 
      screenOptions={{ headerShown: false }}
      initialRouteName="App8"
      > 
      <Stack.Screen name="App1" />
      <Stack.Screen name="App2" />
      <Stack.Screen name="App3" />
      <Stack.Screen name="App4" />
      <Stack.Screen name="App5" />
      <Stack.Screen name="App6" />
      <Stack.Screen name="App7" />
      <Stack.Screen name="App8" />
      <Stack.Screen name="App9" />
      <Stack.Screen name="App10" /> 
    </Stack>
  );
}

export default RootLayout;