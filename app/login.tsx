import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <LeftSidebar />

        <View style={styles.centerContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Login</Text>

            <TextInput 
              placeholder="Email" 
              value={email} 
              onChangeText={setEmail} 
              style={styles.input} 
              keyboardType="email-address"
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

        <RightSidebar />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 350,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    textAlign: "center",
    marginTop: 15,
    color: "#007AFF",
    fontSize: 16,
  },
});
