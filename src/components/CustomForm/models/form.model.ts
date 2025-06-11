import {z} from "zod"

// esquema del formulario
export const schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"), // es un esquema string, con un minimo de 1 caracter y el mensaje de error
    email: z.string().email("Correo invalido").min(1, "El correo es obligatorio"),
    password: z.string().min(5, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmacion debe tener al menos 6 caracteres")
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ['confirmPassword']
}) // si no son iguales, se muestra el msg de error en 'confirmPassword'

export type FormValues = z.infer<typeof schema>; // se genera un tipado de Typescript