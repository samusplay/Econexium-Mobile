// src/components/clients/NewClientForm.tsx
import { FieldError } from '@/components/ui/FieldError';
import { useCreateClient } from '@/hooks/useCreateClient';
import { NewClientInput, newClientSchema } from '@/schemas/newClientSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';

const INSTALLATION_OPTIONS = [
  { value: 'SOLAR', label: 'Solar' },
  { value: 'CARGADOR', label: 'Cargador' },
  { value: 'AMBOS', label: 'Ambos' },
] as const;

export function NewClientForm() {
  const { mutate, isPending } = useCreateClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewClientInput>({
    resolver: zodResolver(newClientSchema),
    defaultValues: { name: '', email: '', phone: '' },
  });

  const onSubmit = (data: NewClientInput) => {
    mutate(data, {
      onSuccess: () => {
        Toast.show({ type: 'success', text1: 'Cliente registrado' });
        router.replace('/clients');
      },
      onError: (error) => {
        Toast.show({ type: 'error', text1: 'No se pudo registrar', text2: error.message });
      },
    });
  };

  return (
    <View className="flex-1 gap-4 p-6">
      <View>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3"
              placeholder="Nombre completo"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        <FieldError message={errors.name?.message} />
      </View>

      <View>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3"
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        <FieldError message={errors.email?.message} />
      </View>

      <View>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3"
              placeholder="Teléfono (opcional)"
              keyboardType="phone-pad"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </View>

      {/* Selector tipo "chips" para el enum installationType */}
      <View>
        <Controller
          control={control}
          name="installationType"
          render={({ field: { onChange, value } }) => (
            <View className="flex-row gap-2">
              {INSTALLATION_OPTIONS.map((option) => (
                <Pressable
                  key={option.value}
                  onPress={() => onChange(option.value)}
                  className={`flex-1 border rounded-lg py-3 items-center ${
                    value === option.value
                      ? 'bg-green-600 border-green-600'
                      : 'border-gray-300'
                  }`}
                >
                  <Text className={value === option.value ? 'text-white' : 'text-gray-700'}>
                    {option.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        />
        <FieldError message={errors.installationType?.message} />
      </View>

      <Pressable
        className="bg-blue-600 rounded-lg py-3 items-center mt-2"
        onPress={handleSubmit(onSubmit)}
        disabled={isPending}
      >
        <Text className="text-white font-semibold">
          {isPending ? 'Guardando...' : 'Registrar cliente'}
        </Text>
      </Pressable>
    </View>
  );
}