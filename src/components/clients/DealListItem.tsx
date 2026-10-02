// src/components/clients/DealListItem.tsx
import { Deal } from '@/schemas/dealSchema';
import { Href, router } from 'expo-router'; // 👈 agregamos Href
import { Pressable, Text, View } from 'react-native';

const STAGE_STYLES: Record<Deal['stage'], { bg: string; text: string; label: string }> = {
  NUEVO: { bg: 'bg-gray-200', text: 'text-gray-700', label: 'Nuevo' },
  CONTACTADO: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Contactado' },
  CALIFICADO: { bg: 'bg-indigo-100', text: 'text-indigo-700', label: 'Calificado' },
  PROPUESTA: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Propuesta' },
  GANADO: { bg: 'bg-green-100', text: 'text-green-700', label: 'Ganado' },
  PERDIDO: { bg: 'bg-red-100', text: 'text-red-700', label: 'Perdido' },
};

interface DealListItemProps {
  deal: Deal;
  basePath: '/clients' | '/visitas';
}

export function DealListItem({ deal, basePath }: DealListItemProps) {
  const stageStyle = STAGE_STYLES[deal.stage];

  return (
    <Pressable
      onPress={() => router.push(`${basePath}/${deal.id}` as Href)}
      className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100"
    >
      <View>
        <Text className="text-base font-medium text-gray-900">{deal.lead.name}</Text>
        <Text className="text-sm text-gray-500">{deal.lead.email}</Text>
      </View>

      <View className={`px-3 py-1 rounded-full ${stageStyle.bg}`}>
        <Text className={`text-xs font-medium ${stageStyle.text}`}>{stageStyle.label}</Text>
      </View>
    </Pressable>
  );
}