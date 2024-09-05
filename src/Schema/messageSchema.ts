import {z} from "zod"

const messageValidation = z
    .string()
    .min(10,{message:"Content must be at least of 10 characters"})
    .max(300,{message:"Content must be no more than 300 characters"})


export const acceptMessageSchema = z.object({
    acceptMessage: z.boolean()
})

export const messageSchema = z.object({
    content: messageValidation
})