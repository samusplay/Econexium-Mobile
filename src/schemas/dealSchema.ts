import { z } from 'zod';

const leadSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
});

export const dealSchema = z.object({
  id: z.string(),
  stage: z.enum(['NUEVO', 'CONTACTADO', 'CALIFICADO', 'PROPUESTA', 'GANADO', 'PERDIDO']),
  installationType: z.enum(['SOLAR', 'CARGADOR', 'AMBOS']),
  estimatedValue: z.number(),
  lead: leadSchema,
  inspection: z.object({ id: z.string() }).nullable().optional(),
});

export const dealsListSchema = z.array(dealSchema);

export type Deal = z.infer<typeof dealSchema>;