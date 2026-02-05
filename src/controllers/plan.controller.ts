import { FastifyRequest, FastifyReply } from "fastify";
import { groqAdapter } from "../adapters/groq.adapter";
import { DietaPlanRequest } from "../schemas/dieta-plan.schema";

class PlanController {
    async create(request: FastifyRequest<{ Body: DietaPlanRequest }>, reply: FastifyReply) {
        const { nome, idade, altura_cm, peso_kg, sexo, nivel_atividade, objetivo } = request.body;

        const plan = await groqAdapter.generatePlan({ nome, idade, altura_cm, peso_kg, sexo, nivel_atividade, objetivo });

        return reply.status(201).send(plan);
    }
}

export const planController = new PlanController();