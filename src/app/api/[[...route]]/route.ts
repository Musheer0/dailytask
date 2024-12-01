import {Hono} from 'hono'
import{ handle} from 'hono/vercel'
import task from '@/features/server/task/route'
const app = new Hono().basePath('/api');
const routes = app.route('/task',task);
export const POST = handle(app);
export type AppType = typeof routes