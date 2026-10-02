// src/app/(protected)/(tabs)/visitas/[dealId].tsx
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function InspectionWizard() {
  const { dealId } = useLocalSearchParams<{ dealId: string }>();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg">Wizard de inspección</Text>
      <Text className="text-gray-500">Deal: {dealId}</Text>
    </View>
  );
}