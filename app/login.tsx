import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

// Get screen width for responsiveness
const screenWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/tabs/home");
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        {/* Hide Sidebars on Small Screens */}
        {screenWidth > 600 && <LeftSidebar />}

        <View style={styles.centerContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Login</Text>

            <TextInput 
              placeholder="Email" 
              value={email} 
              onChangeText={setEmail} 
              style={styles.input} 
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput 
              placeholder="Password" 
              value={password} 
              onChangeText={setPassword} 
              secureTextEntry 
              style={styles.input} 
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={styles.linkText}>Don't have an account? Signup</Text>
            </TouchableOpacity>
          </View>
        </View>

        {screenWidth > 600 && <RightSidebar />}
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  content: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 20 },
  centerContainer: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  card: { 
    width: screenWidth < 400 ? "100%" : 350, 
    backgroundColor: "#fff", 
    padding: 20, 
    borderRadius: 10, 
    elevation: 5, 
    shadowColor: "#000", 
    shadowOpacity: 0.2, 
    shadowRadius: 5 
  },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 12, 
    borderRadius: 8, 
    fontSize: 16, 
    marginBottom: 10, 
    backgroundColor: "#fff", 
    width: "100%" 
  },
  button: { backgroundColor: "#007AFF", paddingVertical: 12, borderRadius: 8, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  linkText: { textAlign: "center", marginTop: 15, color: "#007AFF", fontSize: 16 },
});

