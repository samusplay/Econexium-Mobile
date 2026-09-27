// src/store/authStore.ts
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';

const TOKEN_KEY = 'econexium_token';

interface AuthState {
  token: string | null;       // el dato que todos van a leer
  hasHydrated: boolean;       // explico esto abajo, es la pieza más rara del archivo
  setToken: (token: string) => Promise<void>;
  clearToken: () => Promise<void>;
  hydrate: () => Promise<void>;
}
//Guardamis un estado Global para ejeuctar las petciones con su Respectivo JWT
export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  hasHydrated: false,

  // Se llama UNA vez, al arrancar la app (lo hicimos en _layout.tsx).
  // ¿Por qué existe? Porque Zustand por defecto solo vive en MEMORIA — si cierras
  // la app, el token desaparece. SecureStore es el lugar cifrado en el disco del
  // celular donde sí sobrevive. "Hidratar" = leer del disco y ponerlo en memoria.
  hydrate: async () => {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    set({ token, hasHydrated: true });
  },

  setToken: async (token: string) => {
    await SecureStore.setItemAsync(TOKEN_KEY, token); // lo guarda en disco (persiste)
    set({ token });                                    // y también en memoria (reactivo, ya)
  },

  clearToken: async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    set({ token: null });
  },
}));