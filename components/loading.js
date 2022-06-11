import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Определение местоположения и получение погоды...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		justifyContent: 'flex-end',
    backgroundColor: "#FDf6AA",
		paddingHorizontal: 30,
		paddingVertical: 100,
  },
	text: {
		fontSize: 28,
		color: "#2c2c2c",
	}
});
