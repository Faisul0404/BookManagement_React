import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import AddBook from './app/components/AddBook';
import AppRoute from "./navigation/AppRoute.js";
import Booklist from "./app/components/Booklist.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

<AppRoute />
  
      
      {/* <AddBook /> */}
    {/* <Booklist /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ccd8da',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
});
