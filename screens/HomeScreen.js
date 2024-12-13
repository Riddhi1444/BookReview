import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const books = [
  { id: '1', title: '1984', author: 'George Orwell', coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://m.media-amazon.com/images/I/41oGW5To3mL._SY445_SX342_.jpg' },
  { id: '3', title: 'The Trial', author: 'Franz Kafka', coverUrl: 'https://ia904506.us.archive.org/0/items/franz-kafka-the-trial/The%20Trial.jpg?cnt=0' },
  { id: '4', title: 'The Metamorphosis', author: 'Franz Kafka', coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCR8GdmQvjG0eQOnl95IXcYjugLEx1-kOX1w&s' },
  { id: '6', title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', coverUrl: 'https://images.booksense.com/images/652/525/9781974525652.jpg' },
  { id: '10', title: 'Notes from Underground', author: 'Friedrich Nietzsche', coverUrl: 'https://rukminim2.flixcart.com/image/850/1000/kj0bp8w0-0/book/o/u/r/notes-from-the-underground-original-imafynhs5rtywzxr.jpeg?q=90&crop=false' }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book Listings</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BookDetails', { book: item })}>
            <Image source={{ uri: item.coverUrl }} style={styles.coverImage} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>By {item.author}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensures the container takes up the full available space
    backgroundColor: '#121212',  // Dark background similar to IMDB
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFD700',  // IMDB-like yellow
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',  // Slightly lighter dark background
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    alignItems: 'center',
  },
  coverImage: {
    width: 120,  // Adjusted for larger image
    height: 180, // Adjusted for larger image
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: '#333',  // Placeholder background
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,  // Increased font size for better readability
    fontWeight: 'bold',
    color: '#FFFFFF',  // White text for titles
    marginBottom: 5,
  },
  author: {
    fontSize: 16,  // Adjusted font size for author
    color: '#B0B0B0',  // Light gray for author names
  },
});
