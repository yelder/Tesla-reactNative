import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from './components/carItem/index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem name={"Model X"} 
      tagLine={"Order Online For"}
      tagLineCTA={"Touchless Delivery"}
      image={require('./assets/images/ModelX.jpeg')}
      />

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
