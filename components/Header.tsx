import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();

  return (
    <View style={{ 
      height: 60, 
      backgroundColor: "#6200ee", 
      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center", 
      paddingHorizontal: 20 
    }}>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>🚀 My App</Text>

      <View style={{ flexDirection: "row", gap: 15 }}>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
