import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function HomeScreen() {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/67d021048a456b796673bad4"
        );
        const data = await response.json();
        if (data && data.record && Array.isArray(data.record.quotes)) {
          setQuotes(data.record.quotes);
        }
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    const loadQuote = async () => {
      try {
        const lastQuoteIndex = await AsyncStorage.getItem("lastQuoteIndex");
        const lastQuoteDate = await AsyncStorage.getItem("lastQuoteDate");
        const today = new Date().toDateString();

        if (
          lastQuoteIndex !== null &&
          lastQuoteDate === today &&
          quotes.length > 0
        ) {
          setQuote(quotes[parseInt(lastQuoteIndex)]);
        } else if (quotes.length > 0) {
          const newIndex = Math.floor(Math.random() * quotes.length);
          setQuote(quotes[newIndex]);
          await AsyncStorage.setItem("lastQuoteIndex", newIndex.toString());
          await AsyncStorage.setItem("lastQuoteDate", today);
        }
      } catch (error) {
        console.error("Error loading quote:", error);
      }
    };

    if (quotes.length > 0) {
      loadQuote();
    }
  }, [quotes]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("@/assets/animations/background.json")}
        autoPlay
        loop
        style={styles.lottie}
      />

      <SafeAreaView style={styles.safeArea}>
        <Text>
          <Text style={styles.textHeader}>Connect Your</Text>
          <Text style={styles.textHeader}>
            <Text style={styles.textHeader1}>Soul </Text>With
            <Text style={styles.textHeader1}> Nature </Text>
          </Text>
        </Text>

        <Text style={styles.textHeader2}>Quote of the Day</Text>
        <View style={styles.quoteBox}>
          <ScrollView>
            <Text style={styles.quoteText}>{quote}</Text>
          </ScrollView>
        </View>

        <CustomButton
          onPress={() => router.push("/nature-meditate")}
          title="Get Started"
        />
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-between",
  },
  lottie: {
    ...StyleSheet.absoluteFillObject,
    width: "119%",
    height: "100%",
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  quoteBox: {
    backgroundColor: "rgba(128, 128, 128, 0.7)",
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
    width: "110%",
    height: 220,
  },
  quoteText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 32,
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
  textHeader2: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
});
