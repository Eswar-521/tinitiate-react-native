import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LeftSidebar() {
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={() => router.push("/tabs/home")}>
        <Text style={styles.menuItem}>🏠 Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/tabs/about")}>
        <Text style={styles.menuItem}>ℹ️ About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/tabs/services")}>
        <Text style={styles.menuItem}>🛠️ Services</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/tabs/catalog")}>
        <Text style={styles.menuItem}>📦 Catalog</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/tabs/contact")}>
        <Text style={styles.menuItem}>📞 Contact</Text>
      </TouchableOpacity>
     
     </View>
  );
}

const styles = {
  sidebar: {
    width: 140,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
  },
};
