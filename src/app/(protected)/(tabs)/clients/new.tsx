// src/app/(protected)/(tabs)/clients/new.tsx
import { NewClientForm } from '@/components/clients/NewClientForm';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NuevoCliente() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center mt-8 mb-2 px-6">
            <Text className="text-2xl font-bold text-gray-900">Nuevo cliente</Text>
            <Text className="text-gray-500 mt-1 text-center">
              Registra los datos básicos para iniciar la visita
            </Text>
          </View>

          <NewClientForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}