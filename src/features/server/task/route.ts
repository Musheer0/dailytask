import {Hono} from 'hono';
import {zValidator} from '@hono/zod-validator'
import { CreateTaskSchema } from '@/lib/form-schemas/create-task-schema';

import CreateTask from '../action/create-task';

const app = new Hono()
.post('/create',zValidator("json",CreateTaskSchema),async(c)=>{
    const payload = c.req.valid("json");
    const {name, goals, duration} = await c.req.json()
    console.log(name, goals, duration)
    const data = await CreateTask({name, goals, duration});
    return c.json(data);
    
})
export default app