import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View} from "react-native";
import CartList from './components/CarsList/index'
import Header from './components/Header/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CartList />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
