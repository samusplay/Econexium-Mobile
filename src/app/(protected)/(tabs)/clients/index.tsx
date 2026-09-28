import { Text, View } from 'react-native';

export default function ClientesList() {
  return (
    <View className="flex-1 items-center justify-center p-6">
      <Text className="text-gray-500 text-center">
        Aún no has registrado clientes. Toca el + de arriba para empezar.
      </Text>
    </View>
  );
}