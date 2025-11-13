// Create a Scroll Progress Bar that fills as the user scrolls down the page (use useRef to get scroll height).

import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function App5() {
    const scrollViewRef = useRef();
    const [scrollPercent, setScrollPercent] = useState(0);
    const router = useRouter();

    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent; 
        const scrollPosition = contentOffset.y; // Current scroll position      
        const totalHeight = contentSize.height - layoutMeasurement.height; // Total scrollable height
        const scrolled = (scrollPosition / totalHeight) * 100; // Calculate scroll percentage
        setScrollPercent(scrolled > 100 ? 100 : scrolled); // Update state with scroll percentage
    };

    return (
        <View style={styles.container}> 
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${scrollPercent}%` }]} />
                
            </View>
                        <Text style={styles.title}>Scroll Progress Demo</Text>

            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
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
        // backgroundColor: '#c1e1c1',
    },
    progressBarContainer: {
        top:0,
        // bottom: 10,
        width:'100%',
        height: 6,
        backgroundColor: '#000000ff',
        zIndex:10,
    },
    progressBar: {
        // top: 10,
        height: 6,
        width:'100%',
        backgroundColor: '#0008f2ff',
                zIndex:10,

    },
    scrollView: {
        // flex: 1,
        top:10,
        height:100
        ,maxHeight:400,

        padding: 20,
        // bottom:-200,
    },
    title: {
        top:10,
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
        top:20,
        gap: 50,
    }
})