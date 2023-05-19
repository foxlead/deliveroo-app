import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import { Cog8ToothIcon, GlobeAltIcon, HomeIcon, TrophyIcon, WalletIcon } from 'react-native-heroicons/solid';
import DashboardScreen from './components/DashboardScreen';
import RankingScreen from './components/RankingScreen';
import DiscoverScreen from './components/DiscoverScreen';
import WordScreen from './screens/WordScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />

    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen} />
    </Stack.Navigator>
  );
}
function DiscoverStack() {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen} />
    </Stack.Navigator>
  );
}
function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />      
      <Stack.Screen name="Word" component={WordScreen} />   
         <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: 'modal', headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function RankingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Ranking"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Ranking"
        component={RankingScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#00CCBB',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              return (
                <HomeIcon
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'DiscoverStack') {
              return (
                <GlobeAltIcon
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'DashboardStack') {
              return (
                <WalletIcon
                  name={iconName}
                  size={size}
                  color={color}
                />
              );

            } else if (route.name === 'RankingStack') {
              return (
                <TrophyIcon
                  name={iconName}
                  size={size}
                  color={color}
                />
              );

            } else if (route.name === 'SettingsStack') {
              return (
                <Cog8ToothIcon
                  name={iconName}
                  size={size}
                  color={color}
                />
              );

            }

          }
        })}>
        <Tab.Screen name="HomeStack" component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }} />
          <Tab.Screen name="DiscoverStack" component={DiscoverStack}
            options={{
              tabBarLabel: 'Discover',
              title: 'Discover'
            }} />
        <Tab.Screen name="DashboardStack" component={DashboardStack}
          options={{
            tabBarLabel: 'Dashboard',
            title: 'Dashboard'
          }} />
          <Tab.Screen name="RankingStack" component={RankingStack}
            options={{
              tabBarLabel: 'Ranking',
              title: 'Ranking'
            }} />
          <Tab.Screen name="SettingsStack" component={SettingsStack}
            options={{
              tabBarLabel: 'Settings',
              title: 'Setting'
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* Screens */}
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Restaurant" component={RestaurantScreen} />
//         <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: 'modal', headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }