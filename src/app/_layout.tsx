// src/app/_layout.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { queryClient } from '@/api/queryClient';
import { useAuthStore } from '@/store/authstore';
import Toast from 'react-native-toast-message';
import '../../global.css';

export default function RootLayout() {
  //El query client nos va cachear todo a nivel de la app
  //Leemos el token antes de empezar el app
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast/>
    </QueryClientProvider>
  );
}