import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Signup" }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="catalog" options={{ title: "Catalog" }} />
    </Stack>
  );
}
