// FILE: app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{ headerShown: false }}
      initialRouteName="App1"
      > 
      <Stack.Screen name="App1" />
    </Stack>
  );
}
