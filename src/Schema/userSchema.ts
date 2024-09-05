import {z} from "zod"

const usernameValidation = z
    .string()
    .min(2,{message:"Username must be at least 2 character"})
    .max(20,{message:"Username must be no more than 20 characters"})
    .regex(/^[a-zA-Z0-9]*$/ ,{message:"Username should not contain special character"})

const emailValidation = z
    .string()
    .email({message:"Invalid email address"})

const passwordValidation = z
    .string()
    .min(8, {message:"Password must be at least 8 characters long"}) 
    .max(20, {message:"Password must be no more than 20 characters long"}) 
    .regex(/[a-z]/, {message:"Password must contain at least one lowercase letter"})
    .regex(/[A-Z]/, {message:"Password must contain at least one uppercase letter"})
    .regex(/[0-9]/, {message:"Password must contain at least one number"}) 
    .regex(/[@$!%*?&#]/, {message:"Password must contain at least one special character"}); 

const codeValidation = z
    .string()
    .length(6, {message:"verification code must be 6 digits"})

export const signUpSchema = z.object({
    username: usernameValidation,
    email: emailValidation,
    password: passwordValidation
})

export const verifySchema = z.object({
    code: codeValidation
})

export const signInSchema = z.object({
    identifier:z.string(),
    password: z.string()
})