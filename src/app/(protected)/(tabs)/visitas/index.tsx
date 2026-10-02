import { DealListItem } from '@/components/clients/DealListItem';
import { useDeals } from '@/hooks/useDeals';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function VisitasList() {
  const { data, isLoading, isError, error } = useDeals();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#16A34A" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center p-6">
        <Text className="text-red-500 text-center">{error.message}</Text>
      </View>
    );
  }

  const pendientes = (data ?? []).filter((deal) => !deal.inspection);

  return (
    <FlatList
      data={pendientes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <DealListItem deal={item} basePath="/visitas" />}
      ListEmptyComponent={
        <View className="items-center justify-center p-6 mt-20">
          <Text className="text-gray-500 text-center">
            No tienes inspecciones pendientes.
          </Text>
        </View>
      }
    />
  );
}