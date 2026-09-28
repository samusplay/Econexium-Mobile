import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { Pressable } from 'react-native';
//aqui esta la Nvageacion en los layout
export default function ClientesLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Clientes',
          headerRight: () => (
            <Pressable onPress={() => router.push('/clients/new')}>
              <Ionicons name="add" size={26} color="#16A34A" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="nuevo" options={{ title: 'Nuevo cliente' }} />
      <Stack.Screen name="[dealId]" options={{ title: 'Detalle' }} />
    </Stack>
  );
}