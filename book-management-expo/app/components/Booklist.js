import React, { useState } from "react";
import { View, Text, Button, FlatList, Alert, StyleSheet } from "react-native";

function Booklist({navigation}) {
  const [booklist, setBooklist] = useState([
    {
      id: 1,
      bookname: "Dscovery of India",
      author: "Nehru",
      quantity: 10,
      price: 399,
    },
    {
      id: 2,
      bookname: "Principal of science",
      author: "ABC",
      quantity: 5,
      price: 599,
    },
  ]);

  const deleteBook = (bookId) => {
    // Filter out the book with the specified bookId
    const updatedBooklist = booklist.filter((book) => book.id !== bookId);
    setBooklist(updatedBooklist);
  };

  const editBook = (bookId) => {
    // Find the book to edit based on the bookId
    const bookToEdit = booklist.find((book) => book.id === bookId);

    // Navigate to the EditBookScreen and pass the book data as a parameter
    navigation.navigate("EditBook", { book: bookToEdit });
  };

  const removeAllBooks = () => {
    // Use the `Alert` component to confirm the removal
    Alert.alert(
      "Confirm Removal",
      "Are you sure you want to remove all books?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove All",
          style: "destructive",
          onPress: () => {
            // Clear the booklist
            setBooklist([]);
            navigation.navigate("BookScreen");
            
          },
        },
      ]
    );
  };

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <FlatList
        data={booklist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.buttoncontainer}>
            <Text style={{fontWeight: '700'}}>BookName:</Text> 
            <Text> {item.bookname}</Text>
            </View>
            <View style={styles.buttoncontainer}>
            <Text style={{fontWeight: '700'}}>Author:</Text> 
            <Text> {item.author}</Text>
            </View>
            <View style={styles.buttoncontainer}>
            <Text style={{fontWeight: '700'}}>Quantity:</Text> 
            <Text> {item.quantity}</Text>
            </View>
            <View style={styles.buttoncontainer}>
            <Text style={{fontWeight: '700'}}>Price:</Text> 
            <Text> {item.price}</Text>
            </View>
            <View style={styles.buttoncontainer}>
            <Button title="Delete" onPress={() => deleteBook(item.id)} />
            <Button title="Edit" onPress={() => editBook(item.id)} />
            </View>
           
          </View>
        )}
      />
       <Button title="Remove All" onPress={removeAllBooks} color="red" />
    </View>
  );
}

export default Booklist;

styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    // flexDirection: 'column',
    alignItems: 'flex-start'
  },
  buttoncontainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
})
