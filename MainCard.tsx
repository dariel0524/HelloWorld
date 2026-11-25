import { View, Text, StyleSheet } from 'react-native';

type Props = {
  loading: boolean;
};

export default function MainCard({ loading }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {loading ? 'Cargando...' : 'Contenido cargado'}
      </Text>
      <Text style={styles.sub}>Este es el componente MainCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  text: { fontSize: 18, fontWeight: 'bold' },
  sub: { fontSize: 14, marginTop: 8, color: '#555' },
});
