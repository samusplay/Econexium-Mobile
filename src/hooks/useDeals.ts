import { api } from '@/api';
import { dealsListSchema } from '@/schemas/dealSchema';
import { useQuery } from '@tanstack/react-query';

export function useDeals() {
  return useQuery({
    queryKey: ['deals'],
    queryFn: async () => {
      const data = await api.get<unknown>('/deals');
      return dealsListSchema.parse(data);
    },
  });
}