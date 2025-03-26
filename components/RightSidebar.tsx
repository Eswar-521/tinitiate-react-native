import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function RightSidebar() {
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.menuItem}>🔑 Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.menuItem}>📝 Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/tabs/catalog")}>
        <Text style={styles.menuItem}>📦 Catalog</Text>
      </TouchableOpacity>
      {/* Future links can be added here */}
    </View>
  );
}

const styles = {
  sidebar: {
    width: 140,
    backgroundColor: "#e0e0e0",
    padding: 15,
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: "#FF5733",
    fontWeight: "bold",
  },
};
