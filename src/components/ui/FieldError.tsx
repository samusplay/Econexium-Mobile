import { Text } from 'react-native';

interface FieldErrorProps {
  message?: string;
}

export function FieldError({ message }: FieldErrorProps) {
  // Si no hay mensaje, no renderiza absolutamente nada — null es válido en JSX
  if (!message) return null;

  return <Text className="text-red-500 mt-1">{message}</Text>;
}