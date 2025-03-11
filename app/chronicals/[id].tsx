import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
const IMAGE_COUNT = 20;
import img1 from "@/assets/images/favicon.png";
const Chronicals = () => {
  const { id } = useLocalSearchParams();
  const images = [img1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const startFadeAnimation = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // Animation duration (0.5s)
      useNativeDriver: true,
    }).start();
  };

  // Auto-slide every 3 seconds with animation
  useEffect(() => {
    const interval = setInterval(() => {
      startFadeAnimation();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGE_COUNT);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <LinearGradient colors={["#FF8C00", "#FF4500"]} style={styles.container}>
      <Text style={styles.title}>Chronicals {id}</Text>
      {/* Animated Image Slider */}
      <View style={styles.sliderBox}>
        <Animated.Image
          source={images[currentIndex]}
          style={[styles.sliderImage, { opacity: fadeAnim }]}
        />
      </View>
    </LinearGradient>
  );
};

export default Chronicals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  sliderBox: {
    width: 300,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },
  sliderImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
