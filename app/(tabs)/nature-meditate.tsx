import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
interface MeditationItem {
  id: number;
  title: string;
  imageUrl: string;
}

const API_URL = "https://api.jsonbin.io/v3/b/67d01aab8561e97a50e9e592";
const NatureMeditate = () => {
  const router = useRouter();
  const [meditationData, setMeditationData] = useState<MeditationItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMeditationData = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setMeditationData(jsonData.record);
      } catch (error) {
        console.error("Error fetching meditation data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeditationData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, Human's</Text>
        <Text style={styles.headerSubtitle}>
          Know your connection with the nature.
        </Text>
      </View>
      <FlatList
        data={meditationData}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/meditate/${item.id}`)}
            style={styles.card}
          >
            <ImageBackground
              source={{ uri: item.imageUrl }}
              resizeMode="cover"
              style={styles.backgroundImage}
              imageStyle={styles.imageBorder}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
            </ImageBackground>
          </Pressable>
        )}
      />

      <View style={styles.border}>
        <Text style={styles.headerchronical}>Chronicles</Text>

        <View style={styles.chroniclesContainer}>
          <Pressable
            onPress={() =>
              router.push({ pathname: "/chronicals/[id]", params: { id: "1" } })
            }
            style={styles.chronicleCard}
          >
            <ImageBackground
              source={{
                uri: "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741692079/ramayana_vorttv.jpg",
              }}
              style={styles.chronicleImage}
            />
            <Text style={styles.chronicleTitle}>The Ramayana</Text>
          </Pressable>

          <Pressable
            onPress={() =>
              router.push({ pathname: "/chronicals/[id]", params: { id: "2" } })
            }
            style={styles.chronicleCard}
          >
            <ImageBackground
              source={{
                uri: "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741692079/mahabharat_v1lpyl.png",
              }}
              style={styles.chronicleImage}
            />
            <Text style={styles.chronicleTitle}>The Mahabharata</Text>
          </Pressable>
        </View>
      </View>

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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F0F1A",
  },
  header: {
    marginBottom: 20,
  },
  border: {
    marginBottom: 50,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubtitle: {
    color: "white",
    fontSize: 20,
  },
  headerchronical: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "white",
    height: 180,
    width: 150,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 15,
    padding: 2,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageBorder: {
    borderRadius: 15,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  chroniclesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  chronicleCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    width: "47%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  chronicleImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  chronicleTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NatureMeditate;
