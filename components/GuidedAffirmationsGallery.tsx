import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={previews}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/affirmations/${item.id}`} asChild>
            <Pressable style={styles.card}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default GuidedAffirmationsGallery;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 12,
    alignItems: "center",
    padding: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
  },
});
