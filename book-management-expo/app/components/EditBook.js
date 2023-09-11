import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function EditBook() {
  const navigation = useNavigation();
  const route = useRoute();

  // Get the book data from the navigation params
  const { book, booklist } = route.params;

  // State to manage edited book details
  const [editedBook, setEditedBook] = useState({
    id: book.id,
    bookname: book.bookname,
    author: book.author,
    quantity: book.quantity.toString(),
    price: book.price.toString(),
  });

  const saveEditedBook = () => {
    // Find the index of the book to update in the booklist
    const bookIndex = booklist.findIndex((b) => b.id === editedBook.id);

    // Create a copy of the booklist and update the book at the specified index
    const updatedBooklist = [...booklist];
    updatedBooklist[bookIndex] = editedBook;

    // Set the updated booklist in your state
    setBooklist(updatedBooklist);

    // After saving, navigate back to the Booklist screen
    navigation.navigate("Booklist", { updatedBooklist });
  };

  return (
    <View style={styles.container}>
    <View style={styles.inputTextFull}>
      <Text style={{fontWeight: '700'}}>Book Name : </Text>
      <TextInput
        placeholder="Enter the book name"
        onChangeText={(text) => setEditedBook({ ...editedBook, bookname: text })}
        value={editedBook.bookname}
      />
    </View>
    <View style={styles.inputTextFull}>
      <Text style={{fontWeight: '700'}}>Author : </Text>
      <TextInput
        placeholder="Enter the author name"
        onChangeText={(text) => setEditedBook({ ...editedBook, author: text })}
        value={editedBook.author}
      />
    </View>
    <View style={styles.inputTextFull}>
      <Text style={{fontWeight: '700'}}>Quantity : </Text>
      <TextInput
        placeholder="Enter the quantity"
        onChangeText={(text) =>
          setEditedBook({ ...editedBook, quantity: text })
        }
        value={editedBook.quantity}
        keyboardType="numeric"
      />
    </View>
    <View style={styles.inputTextFull}>
      <Text style={{fontWeight: '700'}}>Quantity : </Text>
      <TextInput
        placeholder="Enter the price"
        onChangeText={(text) =>
          setEditedBook({ ...editedBook, price: text })
        }
        value={editedBook.price}
        keyboardType="numeric"
      />
    </View>
      
      
      
      <Button title="Save" onPress={saveEditedBook} />
    </View>
  );
}

export default EditBook;

styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
  },
  inputTextFull: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    
  },
})
