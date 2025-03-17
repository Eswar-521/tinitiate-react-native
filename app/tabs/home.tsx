import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠 Home Page</Text>
      <Button title="Go to Login" onPress={() => router.push("/login")} />
    </View>
  );
}
