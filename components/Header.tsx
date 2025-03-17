import { View, Text } from "react-native";

export default function Header() {
  return (
    <View style={{ height: 60, backgroundColor: "#6200ee", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#fff", fontSize: 20 }}>🚀 My App</Text>
    </View>
  );
}
