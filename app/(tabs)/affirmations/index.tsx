import React from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import img1 from "@/assets/images/background_common.webp";
const AFFIRMATION_GALLERY = [
  {
    title: "Losing Hope",
    data: [
      {
        id: 81,
        text: "4.11->Each soul approaches Me in its own way, and I bless them accordingly. All roads lead to Me",
        image: img1,
      },
      { id: 82, text: "9.22", image: img1 },
      { id: 83, text: "9.34", image: img1 },
      { id: 84, text: "18.66", image: img1 },
      { id: 85, text: "18.78", image: img1 },
    ],
  },
  {
    title: "Anger",
    data: [
      { id: 1, text: "2.62", image: img1 },
      { id: 2, text: "2.63", image: img1 },
      { id: 3, text: "5.26", image: img1 },
      { id: 4, text: "16.1", image: img1 },
      { id: 5, text: "16.2", image: img1 },
      { id: 6, text: "16.3", image: img1 },
      { id: 7, text: "16.21", image: img1 },
    ],
  },
  {
    title: "Feeling Sinful",
    data: [
      { id: 8, text: "4.36", image: img1 },
      { id: 9, text: "4.37", image: img1 },
      { id: 10, text: "5.10", image: img1 },
      { id: 11, text: "9.30", image: img1 },
      { id: 12, text: "10.3", image: img1 },
      { id: 13, text: "14.6", image: img1 },
      { id: 14, text: "18.66", image: img1 },
    ],
  },
  {
    title: "Practising Forgiveness",
    data: [
      { id: 15, text: "11.44", image: img1 },
      { id: 16, text: "12.13", image: img1 },
      { id: 17, text: "12.14", image: img1 },
      { id: 18, text: "16.1", image: img1 },
      { id: 19, text: "16.2", image: img1 },
      { id: 20, text: "16.3", image: img1 },
    ],
  },
  {
    title: "Pride",
    data: [
      { id: 21, text: "16.4", image: img1 },
      { id: 22, text: "16.13", image: img1 },
      { id: 23, text: "16.15", image: img1 },
      { id: 24, text: "18.26", image: img1 },
      { id: 25, text: "18.58", image: img1 },
    ],
  },
  {
    title: "Death of a Loved One",
    data: [
      { id: 26, text: "2.13", image: img1 },
      { id: 27, text: "2.20", image: img1 },
      { id: 28, text: "2.22", image: img1 },
      { id: 29, text: "2.25", image: img1 },
      { id: 30, text: "2.27", image: img1 },
    ],
  },
  {
    title: "Seeking Peace",
    data: [
      { id: 31, text: "2.66", image: img1 },
      { id: 32, text: "2.71", image: img1 },
      { id: 33, text: "4.39", image: img1 },
      { id: 34, text: "5.29", image: img1 },
      { id: 35, text: "8.28", image: img1 },
    ],
  },
  {
    title: "Lust",
    data: [
      { id: 36, text: "3.37", image: img1 },
      { id: 37, text: "3.41", image: img1 },
      { id: 38, text: "3.43", image: img1 },
      { id: 39, text: "5.22", image: img1 },
      { id: 40, text: "16.21", image: img1 },
    ],
  },
  {
    title: "Uncontrolled Mind",
    data: [
      { id: 41, text: "6.5", image: img1 },
      { id: 42, text: "6.6", image: img1 },
      { id: 43, text: "6.26", image: img1 },
      { id: 44, text: "6.35", image: img1 },
    ],
  },
  {
    title: "Dealing with Envy",
    data: [
      { id: 45, text: "12.13", image: img1 },
      { id: 46, text: "12.14", image: img1 },
      { id: 47, text: "16.19", image: img1 },
      { id: 48, text: "18.71", image: img1 },
    ],
  },
  {
    title: "Discriminated",
    data: [
      { id: 49, text: "5.18", image: img1 },
      { id: 50, text: "5.19", image: img1 },
      { id: 51, text: "5.32", image: img1 },
      { id: 52, text: "9.29", image: img1 },
    ],
  },
  {
    title: "Laziness",
    data: [
      { id: 53, text: "3.8", image: img1 },
      { id: 54, text: "3.20", image: img1 },
      { id: 55, text: "6.16", image: img1 },
      { id: 56, text: "18.39", image: img1 },
    ],
  },
  {
    title: "Loneliness",
    data: [
      { id: 57, text: "6.30", image: img1 },
      { id: 58, text: "9.29", image: img1 },
      { id: 59, text: "13.18", image: img1 },
    ],
  },
  {
    title: "Depression",
    data: [
      { id: 60, text: "2.3", image: img1 },
      { id: 61, text: "2.14", image: img1 },
      { id: 62, text: "5.21", image: img1 },
    ],
  },
  {
    title: "Confusion",
    data: [
      { id: 63, text: "2.7", image: img1 },
      { id: 64, text: "3.2", image: img1 },
      { id: 65, text: "18.61", image: img1 },
    ],
  },
  {
    title: "Fear",
    data: [
      { id: 66, text: "4.10", image: img1 },
      { id: 67, text: "11.50", image: img1 },
      { id: 68, text: "18.30", image: img1 },
    ],
  },
  {
    title: "Greed",
    data: [
      { id: 69, text: "14.17", image: img1 },
      { id: 70, text: "16.21", image: img1 },
      { id: 71, text: "17.25", image: img1 },
    ],
  },
  {
    title: "Demotivated",
    data: [
      { id: 72, text: "11.33", image: img1 },
      { id: 73, text: "18.48", image: img1 },
      { id: 74, text: "18.78", image: img1 },
    ],
  },
  {
    title: "Temptation",
    data: [
      { id: 75, text: "2.60", image: img1 },
      { id: 76, text: "2.61", image: img1 },
      { id: 77, text: "2.70", image: img1 },
      { id: 78, text: "7.14", image: img1 },
    ],
  },
  {
    title: "Forgetfulness",
    data: [
      { id: 79, text: "15.15", image: img1 },
      { id: 80, text: "18.61", image: img1 },
    ],
  },
];

const Affirmations = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,1)", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      />
      <View style={styles.fixedHeader}>
        <Text style={styles.title}>Change Your Views with Affirmations</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.galleryContainer}>
          {AFFIRMATION_GALLERY.map((g) => (
            <GuidedAffirmationsGallery
              key={g.title}
              title={g.title}
              previews={g.data}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Affirmations;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  gradient: { ...StyleSheet.absoluteFillObject },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,1)",
    paddingVertical: 40,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  galleryContainer: { marginTop: 120 },
});
