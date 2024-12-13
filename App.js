

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BookDetails from './screens/BookDetails';
import ReviewScreen from './screens/ReviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#FFD700',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Book List' }} />
        <Stack.Screen name="BookDetails" component={BookDetails} options={{ title: 'Book Details' }} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}