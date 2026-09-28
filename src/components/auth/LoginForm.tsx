import { uselogin } from "@/hooks/useLogin";
import { LoginInput, loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from "expo-router";
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from "react-native";
import { FieldError } from "../ui/FieldError";
export default function LogiForm(){
    //aqui llamemos a la funcion de tan stack la funcion de tan satck va funcioanr con zod 

    //tenemos nuestro hook personalziando con tan stack poder manejar las peticiones
    //Destructuramos el hook porque nos devuleve un objeto grande  solo utilizamos las que necesitamos
    const{mutate,isPending}=uselogin()

    //control: lo utilizamos para conectarnos a cada campo
    //handlesubmit:el envio hacia la peticion, valida con el schema
    //desdapcamos form state con sus errores
    const{
        control,
        handleSubmit,
        formState:{errors},
        //utilizaremos UtilTypes para crear el molde de datp
    }=useForm<LoginInput>({
        //configuracion para adapartarlo a zod
        resolver:zodResolver(loginSchema),
        //arracamos con valores default en el formulario
        defaultValues:{email:'',password:''}
    })

    //lo vamos manejar con un handle
    const onSubmit=(data:LoginInput)=>{
        //luego que se haga el envio exitoso y hacemos dicha mutacion
        //mutamos los datos que habiamos defino en el esquema
        mutate(data,{
          //cuandos e exitosa rederigimos hacia la ruta
          onSuccess:()=>router.replace('/visitas')
        })
        
    }

    //la idea es que aqui solo quede lo de mobile
    return (
  // View es tu contenedor, el equivalente al <div> de HTML — aquí no hay más remedio,
  // React Native no tiene divs, todo layout se arma con View + Flexbox
  <View className="flex-1 justify-center gap-4 p-6">
    <Text className="text-2xl font-bold mb-4">Iniciar sesión</Text>

    {/* ---------- CAMPO EMAIL ---------- */}
    <View>
      <Controller
        control={control}          // conecta este campo específico al formulario completo
        name="email"                // debe coincidir EXACTO con loginSchema (email/password)
        render={({ field: { onChange, onBlur, value } }) => (
          // Aquí está la traducción real: TextInput es el "input" de React Native,
          // pero su API es distinta a la de HTML — por eso necesitábamos el Controller
          // para conectar sus props (onChangeText, onBlur, value) con RHF
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3"
            placeholder="Correo electrónico"
            keyboardType="email-address"   // muestra el teclado optimizado para @ y .com
            autoCapitalize="none"          // evita que autocapitalice el correo
            onChangeText={onChange}        // OJO: onChangeText, NO onChange — así RN entrega
                                            // directo el string del texto, sin evento envuelto
            onBlur={onBlur}                // se dispara cuando el usuario sale del campo
            value={value}                  // el valor actual, controlado por RHF
          />
        )}
      />
      {/* Solo se muestra si Zod encontró un error en ESTE campo específico */}
     <FieldError message={errors.email?.message} />
    </View>

    {/* ---------- CAMPO PASSWORD ---------- */}
    <View>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3"
            placeholder="Contraseña"
            secureTextEntry               // equivalente a type="password" en HTML — oculta el texto
            autoCapitalize="none"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <FieldError message={errors.password?.message} />
    </View>

    {/* ---------- BOTÓN ---------- */}
    {/* Pressable es el equivalente a <button> — React Native no tiene botones HTML tampoco */}
    <Pressable
      className="bg-blue-600 rounded-lg py-3 items-center mt-2"
      onPress={handleSubmit(onSubmit)}   // aquí se juntan las dos piezas que ya vimos:
                                          // handleSubmit valida todo, y SI pasa, llama a tu onSubmit
      disabled={isPending}                // evita doble clic mientras la petición está en vuelo
    >
      <Text className="text-white font-semibold">
        {isPending ? 'Entrando...' : 'Entrar'}
      </Text>
    </Pressable>
  </View>
);
}