import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
import backgroundImg from "@/assets/images/background.jpg";
import { router } from "expo-router";

const quotes = [
  "It helps you to focus your mind.",
  "Breathe in peace, exhale stress.",
  "Quiet the mind, and the soul will speak.",
  "Meditation is the key to tranquility.",
  "Find your inner peace, one breath at a time.",
  "Silence isn’t empty, it’s full of answers.",
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.imgback}
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}
          style={styles.gradient}
        />

        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.textHeader}>Connect Your</Text>
          <Text style={styles.textHeader}>
            <Text style={styles.textHeader1}>Soul </Text>With
            <Text style={styles.textHeader1}> Nature </Text>
          </Text>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {quotes.map((quote, index) => (
              <Text key={index} style={styles.text}>
                {quote}
              </Text>
            ))}
          </ScrollView>
        </SafeAreaView>
        <CustomButton
          onPress={() => router.push("/nature-meditate")}
          title="Get Started"
        />
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgback: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 15,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
    lineHeight: 34,
  },
  textHeader: {
    color: "#5df542",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "800",
  },
  textHeader1: {
    color: "#ffA500",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "800",
  },
});
