import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import PlantProfile from "./screens/PlantProfile";
import CreatePlantProfile from "./screens/CreatePlantProfile";
import UserProfile from "./screens/UserProfile";
import Friends from "./screens/Friends";
import Search from "./screens/Search";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home': 'home-outline';
            } else if (route.name === 'Plants') {
                iconName = focused ? 'leaf' : 'leaf-outline';
            } else if (route.name === 'User Profile'){
                iconName = focused ? 'person' : 'person-outline';  
            } else if (route.name === 'Friends') {
                iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#8BC060',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen 
          name="Friends"
          component={Friends}
        />
        <Tab.Screen 
          name="Search"
          component={Search}
        />
        <Tab.Screen 
            name="Home"
            component={Home}
        />
        <Tab.Screen 
          name="Plants"
          component={PlantProfile}
        />
        <Tab.Screen 
          name="User Profile"
          component={UserProfile}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Welcome"
          component={Welcome}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen 
          name="Home"
          component={NavBar}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="CreatePlantProfile"
          component={CreatePlantProfile}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}