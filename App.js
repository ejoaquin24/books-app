import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Navigation />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
