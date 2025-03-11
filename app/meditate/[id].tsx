import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import { Audio } from "expo-av";
const API_URL = "https://api.jsonbin.io/v3/b/67d034ab8561e97a50e9f175";
const QUOTES_API_URL = "https://api.jsonbin.io/v3/b/67d050e68561e97a50ea00dc";
import LottieView from "lottie-react-native";
import music1 from "@/assets/music/Flute4.mp3";
import music2 from "@/assets/music/Flute1.mp3";
import music3 from "@/assets/music/Flute2.mp3";
import music4 from "@/assets/music/Flute3.mp3";
import music5 from "@/assets/music/Flute5.mp3";

const MUSIC_FILES = [music1, music2, music3, music4, music5];

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const [meditationData, setMeditationData] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const meditationResponse = await fetch(API_URL);
        const meditationJsonData = await meditationResponse.json();
        const quotesResponse = await fetch(QUOTES_API_URL);
        const quotesJsonData = await quotesResponse.json();
        setMeditationData(meditationJsonData.record);
        if (
          quotesJsonData.record &&
          Array.isArray(quotesJsonData.record.quotes)
        ) {
          setQuotes(quotesJsonData.record.quotes);
        } else if (
          quotesJsonData.record &&
          Array.isArray(quotesJsonData.record)
        ) {
          setQuotes(quotesJsonData.record);
        } else {
          console.error("Unexpected quotes format:", quotesJsonData);
          setQuotes([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const index = Number(id) - 1;
  const quote =
    quotes.length > 0 ? quotes[index % quotes.length] : "Take a deep breath...";
  const selectedMusic = MUSIC_FILES[index % MUSIC_FILES.length];
  let sound = null;
  useEffect(() => {
    const playMusic = async () => {
      try {
        const { sound: newSound } = await Audio.Sound.createAsync(
          selectedMusic,
          {
            isLooping: true,
            volume: 0.3,
            shouldPlay: true,
          }
        );
        sound = newSound;
      } catch (error) {
        console.error("Error playing music:", error);
      }
    };

    playMusic();

    return () => {
      if (sound) {
        sound.stopAsync().then(() => sound.unloadAsync());
      }
    };
  }, [selectedMusic]);

  if (loading || !meditationData) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Loading meditation...
        </Text>
      </View>
    );
  }
  const backgroundImage = { uri: meditationData[index]?.imageUrl };
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <LottieView
          source={require("@/assets/animations/meditation.json")}
          autoPlay
          loop
          style={styles.flowerShower}
        />
        <View style={styles.overlay}>
          <Text style={styles.motivationText}>{quote}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
    position: "absolute",
    bottom: 80,
    width: "80%",
    alignItems: "center",
  },
  motivationText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flowerShower: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 250,
    zIndex: 5,
  },
});

export default Meditate;
