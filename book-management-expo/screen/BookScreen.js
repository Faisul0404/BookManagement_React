import React from 'react'
import { View, Button, StyleSheet } from 'react-native';

const BookScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Button title='AddBook' onPress={() => navigation.navigate("AddBook")} style={styles.button}/>
    <Button title='Booklist' onPress={() => navigation.navigate("BookList")} style={styles.button}/>
    </View>
  )
};

style = StyleSheet.create({

    container: {
        // flex: 1,
        // flexDirection: 'column',
    },
    button: {
        // backgroundColor: 'blue',
    // color: 'white',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    }
});

export default BookScreen;