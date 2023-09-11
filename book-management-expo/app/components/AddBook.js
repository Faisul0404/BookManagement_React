import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import AntDesign from "react-native-vector-icons/AntDesign";
// import LinearGradient from 'react-native-linear-gradient';

const AddBook = ({ navigation }) => {
  const [book, setBook] = useState({
    bookname: "",
    author: "",
    quantity: "",
    price: "",
    date: new Date(),
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;

  const handleOnSubmit = () => {
    const values = [bookname, author, price, quantity];

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      console.log(book);
      navigation.goBack();
      // Reset form fields after successful submission
      setBook({
        bookname: "",
        author: "",
        quantity: "",
        price: "",
        date: "",
      });
      // Clear any previous error message
      setErrorMsg("");
    } else {
      setErrorMsg("Please fill out all the fields.");
    }
  };

  const handleInputChange = (name, value) => {
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <View style={{flex:1}}>
      <View
        style={{
          height: 64,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("BookScreen")}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <AntDesign name="arrowleft" color={"#000"} size={25} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                paddingLeft: 10,
                color: "#822614",
              }}
            >
              Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Book Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange("bookname", text)}
            value={bookname}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Book Author</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange("author", text)}
            value={author}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Quantity</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange("quantity", text)}
            value={quantity}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Book Price</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange("price", text)}
            value={price}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Button
            title="submit"
            onPress={handleOnSubmit}
            style={styles.submit_button}
          />
          {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
        </View>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
  },
  submit_button: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  errorMsg: {
    // flex: 1,
    color: "red",
    fontSize: 16,
    alignItems: "center",
  },
});

export default AddBook;
