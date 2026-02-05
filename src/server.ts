import fastify from 'fastify';
import { env } from './env';
import { planRoutes } from './routes/plans.routes';

const server = fastify();

server.register(planRoutes, { prefix: '/plans' });

server.listen({
    port: env.PORT,
}, (err, address) => {
    console.info(`Server listening at ${address}`);
    if (err) {
        console.error(err);
        process.exit(1);
    }
});