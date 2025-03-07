import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: object;
  containerStyles?: object;
}

const { width } = Dimensions.get("window");

const CustomButton = ({
  onPress,
  title,
  textStyles,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, containerStyles]}
      >
        <Text style={[styles.buttonText, textStyles]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 10,
    borderRadius: 60,
    width: width / 1.2,
    marginVertical: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CustomButton;
