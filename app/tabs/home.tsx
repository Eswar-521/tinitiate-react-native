import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <View style={styles.content}>
        {/* App Logo */}
        <Image 
          source={{ uri: "https://via.placeholder.com/120" }} 
          style={styles.logo} 
        />

        <Text style={styles.title}>🚀 Welcome to My App</Text>
        
        <Text style={styles.subtitle}>
          This app features a **structured layout** with a **Header, Sidebar, and Footer**.
        </Text>

        <Text style={styles.description}>
          We aim to provide a seamless user experience with a well-organized UI.
        </Text>
      </View>

      {/* Footer Component */}
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6200ee",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 15,
    lineHeight: 22,
  },
});
