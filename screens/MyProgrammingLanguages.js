import React from 'react';
import { FlatList, StyleSheet, Text, Image, View, RefreshControl } from 'react-native';

const programmingLanguages = [
  {
    name: 'nodeJs',
    experience: '2.4 года обучения',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png',
  },
  {
    name: 'Gdscript',
    experience: '2 месяца обучения',
    logo: 'https://uploads.gamedev.net/tutorials/monthly_2021_03/large.d14c56665f8f41da9d3c7a4b8576fa0e.godot-logo.png',
  },
  {
    name: 'с++',
    experience: '2 недели обучения',
    logo: 'https://etu.ru/assets/cache/images/ru/povyshenie-kvalifikacii/programmy%20povysheniya%20kvalifikacii/1280x800-cplusplus.947.png',
  },
];

function ProgrammingLanguageCard({ name, experience, logo }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} resizeMode="contain" />
      <Text style={styles.languageName}>{name}</Text>
      <Text style={styles.experience}>{experience}</Text>
    </View>
  );
}

export default function MyProgrammingLanguages() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <FlatList
      data={programmingLanguages}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ProgrammingLanguageCard
          name={item.name}
          experience={item.experience}
          logo={item.logo}
        />
      )}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 64,
  },
  card: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  languageName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  experience: {
    fontSize: 16,
    color: '#555',
  },
});
