import { api } from '@/api';
import { NewClientInput } from '@/schemas/newClientSchema';
import { useMutation } from '@tanstack/react-query';

interface CreateClientResponse {
  leadId: string;
  dealId: string;
}

export function useCreateClient() {
  return useMutation({
    mutationFn: (data: NewClientInput) =>
      api.post<CreateClientResponse>('/leads/field-visits', data),
  });
}