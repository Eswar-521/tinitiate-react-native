import { View, Text } from "react-native";

export default function Footer() {
  return (
    <View style={{ height: 40, backgroundColor: "#333", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#fff", fontSize: 14 }}>© 2025 My App</Text>
    </View>
  );
}
