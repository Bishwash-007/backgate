import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(modals)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
