import { Text, View } from 'react-native';
//la ruta es app/visitas
//ya por el routing por archivos
//esta en tabs porque sera nuestra navegacion de logica
export default function Visitas() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg">Visitas</Text>
    </View>
  );
}