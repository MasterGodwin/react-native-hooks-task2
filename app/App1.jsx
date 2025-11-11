// Create a Quiz App that displays one question at a time. Each click on an answer should update the score using useState.

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App1() {
    const questions = [
        {
            questions: "Which animal is Indian National Animal?",
            options: ["Lion", "Tiger", "Elephant", "Bear"],
            answer: "Tiger"
        },
        {
            questions: "20+20=?",
            options: ["30", "40", "50", "60"],
            answer: "40"
        },
        {
            questions: "How many states are there in India?",
            options: ["28", "29", "30", "31"],
            answer: "28"
        }
    ]

    const [question, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleOptionClick = (option) => {
        if (option === questions[question].answer){
            setScore(score + 1);
        }
        
        if (question + 1 < questions.length){
            setQuestion(question + 1);
        } else {
            setShowScore(true);
        }
    }
};

    return (
        <View style={styles.container}>
            {showScore ? (
                <Text style={styles.scoreText}>Your Score: {score} out of {questions.length}</Text>
            ) : ( 
                    <Text style={styles.questionText}>{questions[question].questions}</Text>
                    {questions[question].options.map((option) => (
                        <TouchableOpacity 
                            key={option} 
                            style={styles.optionButton} 
                            onPress={() => handleOptionClick(option)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
            )}
        </View>
    )