import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import LottieView from "lottie-react-native";

const SONGS = [
  {
    title: "Ram Siya Ram",
    artist: "SpiritualIndia",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368181/Audio13_RamSiyaRam_rfc4np.mp3",
    },
  },
  {
    title: " ॐ महामृत्युंजय मंत्र",
    artist: "Shankar Sahney",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368170/Audio12_ShivjiMahamrityunjay_oinbky.mp3",
    },
  },
  {
    title: "श्री राम स्तुति",
    artist: "Ravindra Singh",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368161/Audio2_1_Ramji_retbdq.mp3",
    },
  },
  {
    title: "Kishori Radhe",
    artist: "Gaurav Krishna Goswami",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368174/Audio7_KishoriRadhe_nxv4sv.mp3",
    },
  },
  {
    title: "श्री निर्वाण षट्कम:",
    artist: "Religious India",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368931/Audio18_NirvanaShatkam_qa2ctw.mp3",
    },
  },

  {
    title: "108 गणपती महामंत्र",
    artist: "Priya Dhodi",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368172/Audio4_Ganeshji_xcfz27.mp3",
    },
  },
  {
    title: "श्री शिव तांडव स्तोत्र",
    artist: "Shankar Mahadevan",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368149/Audio20_ShivTandavStotram_fcjer5.mp3",
    },
  },
  {
    title: "Shreeman Narayan",
    artist: "Studio Sangeeta",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368151/Audio11_ShreemanNarayan_uolqy8.mp3",
    },
  },
  {
    title: "श्री शिव रुद्राष्टकम",
    artist: "Religious India",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368182/Audio16_ShivaRudra_cgcxem.mp3",
    },
  },
  {
    title: "Krishna 1",
    artist: "SuprabhaKV",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368181/Audio8_Krishna1_ggqiec.mp3",
    },
  },
  {
    title: "श्री शिव पंचाक्षर",
    artist: "Religious India",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368931/Audio19_PanchaksharStotra_qzu1bo.mp3",
    },
  },
  {
    title: "Krishna 2",
    artist: "SuprabhaKV",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368179/Audio9_Krishna2_exvnjn.mp3",
    },
  },

  {
    title: "गणेश आरती",
    artist: "Rahul Vaidya",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368160/Audio1_1_Ganeshji_o3gmz8.mp3",
    },
  },

  {
    title: "श्री हनुमान चालीसा",
    artist: "Shankar Mahadevan",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368160/Audio3_Hanuman_ff6wmg.mp3",
    },
  },

  {
    title: "Om Namah Shivay",
    artist: "SpiritualIndia",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368180/Audio5_Shivji_osdmbt.mp3",
    },
  },
  {
    title: "राधे राधे",
    artist: "Gaurav Krishna Goswami",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368176/Audio6_RadheRadhe_sp9vlc.mp3",
    },
  },

  {
    title: "Mata Bhajan",
    artist: "Bhakti",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741369656/Audio10_MataRani_awifjx.mp3",
    },
  },
  {
    title: "Mata Bhajan 2",
    artist: "Gulshan Kumar",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368175/Audio17_MataRani2_mw2dcd.mp3",
    },
  },

  {
    title: "Hanuman Ji",
    artist: "Divine Shine",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368165/Audio14_Hanuman_pfrydv.mp3",
    },
  },
  {
    title: "Sunderkand",
    artist: "Rasraj Maharaj",
    src: {
      uri: "https://res.cloudinary.com/ddb8qrjvx/video/upload/v1741368173/Audio15_Sundarkand_vqqcng.mp3",
    },
  },
];

const MusicPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);

  const song = SONGS[currentSongIndex];

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadAndPlaySong = async (index: number) => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    const { sound: newSound, status } = await Audio.Sound.createAsync(
      SONGS[index].src,
      { shouldPlay: true, volume: 0.3 },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
    setIsPlaying(true);
    setCurrentSongIndex(index);
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis || 1);
      if (status.didJustFinish) {
        playNextSong();
      }
    }
  };

  const togglePlayPause = async () => {
    if (!sound) {
      await loadAndPlaySong(currentSongIndex);
    } else if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const playNextSong = async () => {
    let nextIndex = (currentSongIndex + 1) % SONGS.length;
    await loadAndPlaySong(nextIndex);
  };

  const playPreviousSong = async () => {
    let prevIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    await loadAndPlaySong(prevIndex);
  };

  const seekAudio = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  };

  const formatTime = (millis: number) => {
    let totalSeconds = Math.floor(millis / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <View style={styles.containerOut}>
      <Text style={styles.madeby}>🕉️ Made by Ashish 🕉️</Text>
      <LottieView
        source={require("@/assets/animations/music.json")}
        autoPlay
        loop
        style={styles.flowerShower}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.time}>{formatTime(position)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            onSlidingComplete={seekAudio}
            minimumTrackTintColor="#FF5733"
            maximumTrackTintColor="#ddd"
            thumbTintColor="#FF5733"
          />
          <Text style={styles.time}>{formatTime(duration)}</Text>
        </View>
        <View style={styles.controls}>
          <Pressable onPress={playPreviousSong}>
            <Text style={styles.controlText}>⏮️</Text>
          </Pressable>
          <Pressable onPress={togglePlayPause}>
            <Text style={styles.controlText}>{isPlaying ? "⏸️" : "▶️"}</Text>
          </Pressable>
          <Pressable onPress={playNextSong}>
            <Text style={styles.controlText}>⏭️</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f97316",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    bottom: -200,
  },
  containerOut: {
    flex: 1,
    backgroundColor: "#f97316",
    alignItems: "center",
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  artist: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  time: {
    color: "#fff",
    fontSize: 14,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  controlText: {
    fontSize: 30,
    color: "#fff",
  },
  flowerShower: {
    position: "absolute",
    top: -20,
    width: "70%",
    height: "70%",
    zIndex: 2,
  },
  madeby: {
    fontSize: 10,
    color: "white",
    top: 280,
    zIndex: 5,
  },
});
