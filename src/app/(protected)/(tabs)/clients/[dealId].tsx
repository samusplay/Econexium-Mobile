import { useDeal } from '@/hooks/useDeal';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';


export default function DealDetail() {
  const { dealId } = useLocalSearchParams<{ dealId: string }>();
  const { data: deal, isLoading, isError, error } = useDeal(dealId);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#16A34A" />
      </View>
    );
  }

  if (isError || !deal) {
    return (
      <View className="flex-1 items-center justify-center p-6">
        <Text className="text-red-500 text-center">{error?.message ?? 'No encontrado'}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-6">
      <Text className="text-2xl font-bold text-gray-900">{deal.lead.name}</Text>
      <Text className="text-gray-500 mb-4">{deal.lead.email}</Text>
      <Text className="text-base text-gray-700">Etapa: {deal.stage}</Text>
      <Text className="text-base text-gray-700">Tipo: {deal.installationType}</Text>
      <Text className="text-base text-gray-700">
        Valor estimado: ${deal.estimatedValue.toLocaleString('es-CO')}
      </Text>
    </View>
  );
}