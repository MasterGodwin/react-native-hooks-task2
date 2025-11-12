// Create a Scroll Progress Bar that fills as the user scrolls down the page (use useRef to get scroll height).

import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function App5() {
    const scrollViewRef = useRef(null);
    const [scrollPercent, setScrollPercent] = useState(0);
    const router = useRouter();

    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const scrollPosition = contentOffset.y;
        const totalHeight = contentSize.height - layoutMeasurement.height;
        const scrolled = (scrollPosition / totalHeight) * 100;
        setScrollPercent(scrolled > 100 ? 100 : scrolled);
    };

    return (
        <View style={styles.container}> 
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${scrollPercent}%` }]} />
            </View>
        
            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <Text style={styles.title}>Scroll Progress Demo</Text>
                <Text style={styles.text}>
                {Array(20)
                    .fill(
                    'React Native allows you to create mobile apps using JavaScript and React. Scroll down to see the progress bar fill as you move.'
                    )
                    .join('\n\n')}
                </Text>
            </ScrollView>
        
            <View style={styles.buttons}>
                <Text style={styles.footerText} onPress={() => router.push('/App4')}>
                    Back Page
                </Text>
                <Text style={styles.footerText} onPress={() => router.push('/App6')}>
                    Next Page
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#c1e1c1',
    },
    progressBarContainer: {
        height: 6,
        backgroundColor: '#e0e0e0',
    },
    progressBar: {
        height: 6,
        backgroundColor: '#4CAF50',
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    footerText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffffff',
        marginVertical: 10,
        backgroundColor: '#3bac50ff',
        padding: 10,    
        borderRadius: 5,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
    }
})