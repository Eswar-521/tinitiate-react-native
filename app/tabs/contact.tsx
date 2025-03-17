import { View, Text } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

export default function ContactScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={{ flex: 1, flexDirection: "row" }}>
        <LeftSidebar />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>📞 Contact Page</Text>
        </View>
        <RightSidebar />
      </View>

      <Footer />
    </View>
  );
}
