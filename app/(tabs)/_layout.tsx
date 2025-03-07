import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <Ionicons name="flower-sharp" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          tabBarLabel: "music",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="music-box-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
