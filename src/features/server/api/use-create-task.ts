import { client } from "@/lib/rpc";
import {useMutation} from '@tanstack/react-query';
import {InferRequestType, InferResponseType} from 'hono';

type ResponseType = InferResponseType<typeof client.api.task.create["$post"]>;
type RequestType = InferRequestType<typeof client.api.task.create["$post"]>;

export const useCreateTask =()=>{
    const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
    >({
        mutationFn: async(json)=>{
            const response = await client.api.task.create.$post(json)
            return response.json()
        }
    });
    return mutation
}