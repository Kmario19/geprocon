import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Button,
} from 'react-native';

const DATA = [
  {
    id: 'projects',
    title: 'Projects',
    icon: require('../../assets/icons/library.svg'),
  },
  {
    id: 'resources',
    title: 'Resources',
    icon: require('../../assets/icons/color-palette.svg'),
  },
  {
    id: 'units',
    title: 'Units',
    icon: require('../../assets/icons/tuning.svg'),
    navigateTo: 'Units',
  },
  {
    id: 'apus',
    title: 'APUs',
    icon: require('../../assets/icons/show-sidebar.svg'),
  },
];

const Item = ({ item, navigation }) => (
  <View style={styles.item}>
    <Image source={item.icon} style={styles.icon} />
    {item.navigateTo ? (
      <Button
        title={item.title}
        onPress={() => navigation.navigate(item.navigateTo)}
      />
    ) : (
      <Text style={styles.title}>{item.title}</Text>
    )}
  </View>
);

const LaunchPad = ({ navigation }) => {
  const renderItem = ({ item }) => <Item item={item} navigation={navigation} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f4f4f4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    borderRadius: '4px',
  },
  icon: {
    height: '64px',
    width: '64px',
    marginBottom: '5px',
  },
  title: {
    fontSize: 16,
  },
});

export default LaunchPad;
