import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainCard from './MainCard';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const nombre = 'Dariel';
  const apellido = 'Gil';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World by {nombre} {apellido}</Text>
      <Button title={isLoading ? 'Mostrar' : 'Cargar'} onPress={() => setIsLoading(!isLoading)} />
      <MainCard loading={isLoading} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
