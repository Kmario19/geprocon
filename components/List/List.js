import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const units = [
  { symbol: 'UN', description: 'Unidad' },
  { symbol: 'ML', description: 'Mililitros' },
  { symbol: 'M', description: 'Metro' },
  { symbol: 'M2', description: 'Metro Cuadrado' },
  { symbol: 'M3', description: 'Metro Cúbico' },
  { symbol: 'LB', description: 'Libra' },
  { symbol: 'KG', description: 'Kilogramo' },
  { symbol: 'GLN', description: 'Galones' },
  { symbol: 'LT', description: 'Litros' },
  { symbol: 'DIA', description: 'Días' },
  { symbol: 'GLOBAL', description: 'Global' },
];

const Item = ({ item }) => {
  return (
    <Text style={styles.item}>
      {item.description}
      <Text style={styles.badge}>{item.symbol}</Text>
    </Text>
  );
};

export default function List() {
  return (
    <View style={styles.container}>
      <FlatList data={units} renderItem={({ item }) => <Item item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderColor: '#bdbdbd',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  badge: {
    backgroundColor: '#9e9e9e',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginLeft: 5,
  },
});
