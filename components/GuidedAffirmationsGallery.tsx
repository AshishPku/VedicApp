import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
  isExpanded: boolean; // Controlled by parent
  setExpandedTitle: (title: string | null) => void;
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
  isExpanded,
  setExpandedTitle,
}: GuidedAffirmationsGalleryProps) => {
  const categoryImage = previews[0]?.image || null;

  const handlePress = () => {
    // If already expanded, collapse it; otherwise, expand this one and collapse others
    setExpandedTitle(isExpanded ? null : title);
  };

  return (
    <View style={styles.cardContainer}>
      <Pressable style={styles.titleCard} onPress={handlePress}>
        {categoryImage && (
          <Image
            source={categoryImage}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </Pressable>

      {isExpanded && (
        <View style={styles.affirmationsContainer}>
          {previews.map((item) => (
            <Link
              href={`/affirmations/${item.id}`}
              asChild
              key={item.id.toString()}
            >
              <Pressable style={styles.affirmationCard}>
                <Text style={styles.text}>{item.id || "Affirmation"}</Text>
              </Pressable>
            </Link>
          ))}
        </View>
      )}
    </View>
  );
};

export default GuidedAffirmationsGallery;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1, // Ensures equal width in two-column layout
    margin: 5, // Space between cards
  },
  titleCard: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120, // Fixed height for consistency
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  affirmationsContainer: {
    marginTop: 5,
    flexDirection: "column",
    gap: 5,
  },
  affirmationCard: {
    backgroundColor: "#444",
    borderRadius: 5,
    padding: 8,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
