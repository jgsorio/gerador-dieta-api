import { promptConfig } from "../config/prompt.config";
import { env } from "../env";
import { DietaPlanRequest } from "../schemas/dieta-plan.schema";
import { Groq } from "groq-sdk";

class GroqAdapter {
    private readonly client: Groq;

    constructor(apiKey: string) {
        this.client = new Groq({ apiKey });
    }

    async generatePlan(data: DietaPlanRequest): Promise<string | undefined> {
        const response = await this.client.chat.completions.create({
            model: 'llama-3.1-8b-instant',
            messages: [
                { role: 'system', content: promptConfig.buildSystemPrompt() },
                { role: 'user', content: promptConfig.buildUserPrompt(data) }
            ],
            temperature: 0.7
        });

        return response.choices[0]?.message.content ?? undefined;
    }
}

export const groqAdapter = new GroqAdapter(env.GROQ_API_KEY);