// Create a Quiz App that displays one question at a time. Each click on an answer should update the score using useState.

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is 5 + 3?',
    options: ['5', '8', '10', '7'],
    correctAnswer: '8',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const router = useRouter();

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.Button} onPress={()=> router.push("/App2")}><Text>Next Page</Text></TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  quizContainer: {
    marginVertical: 20,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  Button: {
        padding: 10,
        backgroundColor: '#f0ad4e',
        borderRadius: 5,
        marginTop: 20,
    }
});