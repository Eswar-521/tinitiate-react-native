import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    router.push("/tabs/home"); // Redirect to Home after signup
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Signup</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => router.push("/login")} />
    </View>
  );
}
