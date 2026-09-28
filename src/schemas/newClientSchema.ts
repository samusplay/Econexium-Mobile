import { z } from 'zod';

export const newClientSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es obligatorio' }),
  email: z.string().email({ message: 'Correo inválido' }),
  phone: z.string().optional(),
  installationType: z.enum(['SOLAR', 'CARGADOR', 'AMBOS'], {
    message: 'Selecciona un tipo de instalación',
  }),
});

export type NewClientInput = z.infer<typeof newClientSchema>;