import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const ProfileCard = ({ name, title, avatar }) => {
  return (
    <View style={styles.card}>
      {/* Smart source logic: URL string → { uri: url } | local require → use directly */}
      <Image
        source={typeof avatar === 'string' ? { uri: avatar } : avatar}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  titleText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

