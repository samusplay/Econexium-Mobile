// src/hooks/useDeal.ts
import { api } from '@/api';
import { dealSchema } from '@/schemas/dealSchema';
import { useQuery } from '@tanstack/react-query';
//para el id de usuairo en especifico
export function useDeal(dealId: string) {
  return useQuery({
    queryKey: ['deals', dealId],
    queryFn: async () => {
      const data = await api.get<unknown>(`/deals/${dealId}`);
      return dealSchema.parse(data);
    },
  });
}