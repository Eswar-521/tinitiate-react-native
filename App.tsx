import { AuthProvider } from '@/hooks/useAuth';
import { Slot } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/app/(tabs)/home';
import AboutScreen from '@/app/(tabs)/about';
import ServicesScreen from '@/app/(tabs)/services';
import ContactScreen from '@/app/(tabs)/contact';
import LoginScreen from '@/app/login';
import SignupScreen from '@/app/signup';
import Layout from '@/app/tabs/_layout';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Layout>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Services" component={ServicesScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </Stack.Navigator>
        </Layout>
      </NavigationContainer>
    </AuthProvider>
  );
}
