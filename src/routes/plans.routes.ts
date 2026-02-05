import { FastifyInstance } from "fastify";
import { planController } from "../controllers/plan.controller";

export async function planRoutes(app: FastifyInstance) {
    app.post('/', planController.create);
}
