import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{ 
          title: "About",
          tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="services" 
        options={{ 
          title: "Services",
          tabBarIcon: ({ color, size }) => <Ionicons name="construct" size={size} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="contact" 
        options={{ 
          title: "Contact",
          tabBarIcon: ({ color, size }) => <Ionicons name="call" size={size} color={color} />,
        }} 
      />
    </Tabs>
  );
}
