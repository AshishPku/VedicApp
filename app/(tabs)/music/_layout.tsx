import { Stack } from "expo-router";

const MusicLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MusicLayout;
