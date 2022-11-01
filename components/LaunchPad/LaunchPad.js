import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
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
  },
  {
    id: 'apus',
    title: 'APUs',
    icon: require('../../assets/icons/show-sidebar.svg'),
  },
];

const Item = ({ icon, title }) => (
  <View style={styles.item}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LaunchPad = () => {
  const renderItem = ({ item }) => <Item title={item.title} icon={item.icon} />;

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
    marginTop: StatusBar.currentHeight || 0,
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
