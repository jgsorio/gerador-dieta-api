import z from "zod";

export const dietaPlanSchema = z.object({
    nome: z.string().min(2),
    idade: z.number().positive(),
    altura_cm: z.number().positive(),
    peso_kg: z.number().positive(),
    sexo: z.enum(['masculino', 'feminino']),
    nivel_atividade: z.enum(['sedentario', 'levemente_ativo', 'moderadamente_ativo', 'muito_ativo']),
    objetivo: z.enum(['perder_peso', 'ganhar_massa', 'manter_peso']),
});

export type DietaPlanRequest = z.infer<typeof dietaPlanSchema>;
