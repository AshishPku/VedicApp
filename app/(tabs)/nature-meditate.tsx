import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

interface MeditationType {
  id: number;
  title: string;
}
const MEDITATION_DATA: MeditationType[] = [
  {
    id: 1,
    title: "Mountains",
  },
  {
    id: 2,
    title: "Rivers",
  },
  {
    id: 3,
    title: "Sunset",
  },
  {
    id: 4,
    title: "Beaches",
  },
  {
    id: 5,
    title: "Starry Night",
  },
  {
    id: 6,
    title: "Waterfall",
  },
  {
    id: 7,
    title: "Rainforest",
  },
  {
    id: 8,
    title: "Desert Winds",
  },
  {
    id: 9,
    title: "Morning Birds",
  },
  {
    id: 10,
    title: "Ocean Waves",
  },
];

// Map images using require
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

const NatureMeditate = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, Human</Text>
        <Text style={styles.headerSubtitle}>
          Know your connection with the nature.
        </Text>
      </View>

      <FlatList
        data={MEDITATION_DATA}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/meditate/${item.id}`)}
            style={styles.card}
          >
            <ImageBackground
              source={MEDITATION_IMAGES[item.id - 1]}
              resizeMode="cover"
              style={styles.backgroundImage}
              imageStyle={styles.imageBorder}
            >
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={styles.gradient}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        )}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubtitle: {
    color: "white",
    fontSize: 18,
  },
  list: {
    paddingBottom: 150,
  },
  card: {
    backgroundColor: "white",
    padding: 1,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageBorder: {
    borderRadius: 15,
  },
  gradient: {
    width: "100%",
    padding: 15,
    justifyContent: "flex-end",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NatureMeditate;
