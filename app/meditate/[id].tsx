import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
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
import LottieView from "lottie-react-native"; // Import LottieView
import music1 from "@/assets/music/Flute4.mp3";
import music2 from "@/assets/music/Flute1.mp3";
import music3 from "@/assets/music/Flute2.mp3";
import music4 from "@/assets/music/Flute3.mp3";
import music5 from "@/assets/music/Flute5.mp3";

const MEDITATION_IMAGES = [
  require("@/assets/images/img1.jpg"),
  require("@/assets/images/img2.jpg"),
  require("@/assets/images/img3.jpg"),
  require("@/assets/images/img4.jpg"),
  require("@/assets/images/img5.jpg"),
  require("@/assets/images/img6.jpg"),
  require("@/assets/images/img7.jpg"),
  require("@/assets/images/img8.jpg"),
  require("@/assets/images/img9.jpg"),
  require("@/assets/images/img10.jpg"),
];

const MOTIVATIONAL_QUOTES = [
  "Like the mountains, let your soul stand tall and unwavering. The higher you climb within, the clearer your vision of life becomes.",
  "Flow like a river—embracing change, carving your own path. A river never resists obstacles; it simply finds a new way forward.",
  "The soul, like the sunset, finds beauty in endings and new beginnings. Let go with grace, just as the sun surrenders to the night.",
  "Each wave whispers a lesson—release, renew, and rise again. The vast ocean and your soul both hold infinite depths of mystery.",
  "The stars remind us that even in darkness, light is always present. Look within; your soul shines as bright as the cosmos.",
  "Let go like a waterfall—surrendering to the flow of the universe. In the rush of life, find moments to pause and feel the purity within.",
  "Like the rainforest, your soul thrives in diversity and harmony. Nurture your inner world, and let it bloom with wisdom and wonder.",
  "Even in solitude, the soul finds its way, like the shifting sands. Embrace the stillness; the answers you seek are carried by the wind.",
  "With each morning song, the soul awakens to a new beginning. Be light, be free—soar like the birds that greet the dawn.",
  "The soul, like the ocean, carries both storms and stillness. Listen to the waves—they echo the rhythm of your heart.",
];

const MUSIC_FILES = [music1, music2, music3, music4, music5];

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const index = Number(id) - 1;
  const quote = MOTIVATIONAL_QUOTES[index % MOTIVATIONAL_QUOTES.length];
  const selectedMusic = MUSIC_FILES[index % MUSIC_FILES.length];

  let sound: Audio.Sound | null = null;

  useEffect(() => {
    const playMusic = async () => {
      try {
        sound = new Audio.Sound();
        await sound.loadAsync(selectedMusic);
        await sound.setIsLoopingAsync(true);
        await sound.setVolumeAsync(0.3); // Set volume to 30%
        await sound.playAsync();
      } catch (error) {
        console.error("Error playing music:", error);
      }
    };

    playMusic();

    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, [selectedMusic]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={MEDITATION_IMAGES[index]}
        style={styles.background}
      >
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>

        {/* Flower Shower Effect */}
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
