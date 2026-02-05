import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number(),
    GROQ_API_KEY: z.string(),
});

const envVars = envSchema.safeParse(process.env);

if (!envVars.success) {
    throw new Error('Invalid environment variables');
}

export const env = envVars.data;