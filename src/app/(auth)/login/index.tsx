import LoginForm from '@/components/auth/LoginForm';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function LoginIndex() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="items-center mt-16 mb-4">
          <Text className="text-3xl font-bold text-blue-600">Econexium</Text>
          <Text className="text-gray-500 mt-1">Panel de inspectores</Text>
        </View>

        <LoginForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}