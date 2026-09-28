import { useAuthStore } from '@/store/authstore';
import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function Index() {
  const { token, hasHydrated } = useAuthStore();

  if (!hasHydrated) {
    return <Text>Cargando...</Text>;
  }

  return <Redirect href={token ? '/visitas' : '/login'} />;
}