import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import img1 from "@/assets/images/background_common.webp";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { router } from "expo-router";
const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  console.log(itemId);
  const [affirmations, setAffirmations] = useState<GalleryPreviewData>();

  return (
    <View style={styles.container}>
      <ImageBackground source={img1} style={styles.background}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View style={styles.overlay}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.motivationText}>
              Each soul approaches Me in its own way, and I bless them
              accordingly. All roads lead to Me.
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;

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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    width: "90%",
    maxHeight: 505,
    alignItems: "center",
  },
  scrollView: {
    maxHeight: 505,
  },
  motivationText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
