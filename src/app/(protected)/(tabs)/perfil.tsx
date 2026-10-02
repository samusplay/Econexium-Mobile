// src/app/(protected)/(tabs)/perfil.tsx
import { useAuthStore } from '@/store/authstore';
import { useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Perfil() {
  const clearToken = useAuthStore((state) => state.clearToken);
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await clearToken();
    queryClient.clear();
    router.replace('/login');
  };

  return (
    <View className="flex-1 p-6 justify-between">
      <View className="items-center mt-12">
        <Text className="text-xl font-semibold text-gray-900">Perfil</Text>
      </View>

      <Pressable
        onPress={handleLogout}
        className="border border-red-300 rounded-lg py-3 items-center mb-8"
      >
        <Text className="text-red-600 font-semibold">Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}