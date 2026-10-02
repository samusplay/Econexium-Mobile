import { Stack } from 'expo-router';

export default function VisitasLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Visitas' }} />
      <Stack.Screen name="[dealId]" options={{ title: 'Inspección' }} />
    </Stack>
  );
}