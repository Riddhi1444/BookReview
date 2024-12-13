import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddReview({ route, navigation }) {
  const { book, setReviews } = route.params;
  const [reviewText, setReviewText] = useState('');

  const submitReview = () => {
    setReviews((prevReviews) => [
      ...prevReviews,
      { id: Date.now().toString(), user: 'Guest', comment: reviewText },
    ]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a Review for "{book.title}"</Text>
      <TextInput
        style={styles.input}
        placeholder="Your review"
        value={reviewText}
        onChangeText={setReviewText}
        multiline
      />
      <Button title="Submit Review" onPress={submitReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  input: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    textAlignVertical: 'top',
    minHeight: 100,
  },
});
