import { DietaPlanRequest } from "../schemas/dieta-plan.schema";

class PromptConfig {
    buildSystemPrompt() {
        return [
            "Você é um nutricionista especializado em criar planos de dieta para pessoas com diferentes objetivos e níveis de atividade física.",
            "Regras:",
            "- Sempre responda em texto markdown legível e organizado.",
            "- Use # para títulos e - para listas.",
            "- A dieta deve conter exatamente 7 dias",
            "- Cada dia deve conter 3 refeições principais: café da manhã, almoço e jantar",
            "- Sempre inclua alimentos comuns no Brasil"
        ].join('\n');
    }

    buildUserPrompt(data: DietaPlanRequest) {
        return [
            "Gere um plano de dieta para o seguinte usuário:",
            `Nome: ${data.nome}`,
            `Idade: ${data.idade}`,
            `Altura: ${data.altura_cm}cm`,
            `Peso: ${data.peso_kg}kg`,
            `Sexo: ${data.sexo}`,
            `Nível de atividade: ${data.nivel_atividade}`,
            `Objetivo: ${data.objetivo}`
        ].join('\n');
    }
}

export const promptConfig = new PromptConfig();