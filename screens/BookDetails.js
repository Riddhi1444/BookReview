import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, Button, StyleSheet } from 'react-native';

export default function BookDetails({ route }) {
  const { book } = route.params;
  const [reviews, setReviews] = useState([
    { id: '1', text: 'Amazing book!', reviewer: 'Alice' },
    { id: '2', text: 'A thought-provoking masterpiece.', reviewer: 'Bob' },
  ]);
  const [newReview, setNewReview] = useState('');

  const addReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, { id: Date.now().toString(), text: newReview, reviewer: 'Guest' }]);
      setNewReview('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: book.coverUrl }} style={styles.coverImage} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>By {book.author}</Text>
          <Text style={styles.sectionHeader}>Description:</Text>
          <Text style={styles.description}>
            This is a placeholder description for the book. Add your own content here.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Reviews:</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <Text style={styles.reviewText}>"{item.text}"</Text>
            <Text style={styles.reviewer}>- {item.reviewer}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Write your review here..."
        placeholderTextColor="#ccc"
        value={newReview}
        onChangeText={setNewReview}
      />
      <Button title="Submit Review" color="#FFD700" onPress={addReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', padding: 16 },
  row: { flexDirection: 'row', marginBottom: 20 },
  coverImage: { width: 120, height: 180, marginRight: 16, backgroundColor: '#444' },
  textContainer: { flex: 1, justifyContent: 'space-between' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFD700' },
  author: { fontSize: 18, color: '#FFD700', marginBottom: 10 },
  sectionHeader: { fontSize: 20, fontWeight: 'bold', marginTop: 10, color: '#FFD700' },
  description: { fontSize: 14, color: '#ccc' },
  reviewCard: {
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  reviewText: { fontSize: 14, fontStyle: 'italic', color: '#FFD700' },
  reviewer: { fontSize: 12, textAlign: 'right', color: '#aaa' },
  input: {
    height: 50,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    color: '#fff',
    backgroundColor: '#444',
  },
});
