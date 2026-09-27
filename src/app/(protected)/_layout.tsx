// src/app/(protected)/_layout.tsx
import { useAuthStore } from '@/store/authstore';
import { Redirect, Slot } from 'expo-router';

export default function ProtectedLayout() {
  const { token, hasHydrated } = useAuthStore();

  if (!hasHydrated) return null;

  if (!token) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
}