import { api } from "@/api";
import { LoginInput } from "@/schemas/loginSchema";
import { useAuthStore } from "@/store/authstore";
import { useMutation } from "@tanstack/react-query";
import Toast from 'react-native-toast-message';
//sbaemos que viene una respuesta
interface LoginResponse {
    accessToken: string
}

export function uselogin() {
    //seteamos el token con Zustand llamada asincrona
    const setToken = useAuthStore((state) => state.setToken)

    return useMutation({
        //Requerimos una funcion para hacer la peticion
        mutationFn: (data: LoginInput) => api.post<LoginResponse>('/auth/login', data),
        //si es True la peticion guardamos el token en Zustand
        onSuccess: (response) => {
            setToken(response.accessToken)
        },
        onError: (error) => {
            Toast.show({
                type: 'error',
                text1: 'No se pudo iniciar sesión',
                text2: error.message,
            });
        }


    })
}
