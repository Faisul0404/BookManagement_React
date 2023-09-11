import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import AddBook from '../app/components/AddBook';
import AddBookScreen from '../screen/AddBookScreen';
import Booklist from '../app/components/Booklist';
import BookScreen from '../screen/BookScreen';
import EditBook from '../app/components/EditBook';
import AddBook from '../app/components/AddBook';

const Stack = createStackNavigator();

const AppRoute = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="BookScreen">
        <Stack.Screen name="AddBook" component={AddBook} options={{headerShown: false}} />
        <Stack.Screen name="BookList" component={Booklist} options={{ title: 'BookList' }} />
        <Stack.Screen name="BookScreen" component={BookScreen} options={{ title: 'Book Management ' }}/>
        <Stack.Screen name="EditBook" component={EditBook} options={{ title: 'Edit Book Details' }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppRoute;