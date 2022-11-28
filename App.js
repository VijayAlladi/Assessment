import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginPage from './components/login/LoginPage';
import OTP from './components/OTP';
import Home from './components/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={Home}
      />
      <Tab.Screen
        name="player"
        screenOptions={{headerShown: false}}
        //tabBarOptions={{showLabel: false}}
        options={{
          showLabel: false,
          tabBarIcon: ({color, size}) => (
            <AntIcon name="youtube" color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarOptions: {showLabel: false},
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="leaderboard" color={color} size={size} />
          ),
          // headerShown: false,
        }}
        name="Settings"
        component={Home}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <AwesomeIcon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="notifications" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={MyTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
