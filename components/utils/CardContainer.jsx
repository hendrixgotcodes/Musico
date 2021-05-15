import React from 'react'
import {View, Text,StyleSheet, ScrollView} from 'react-native'

import variable from '../../utils/variables'

export default function CardContainer({title, children}) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.rule} />

            <ScrollView style={styles.childrenContainer}
                horizontal={true} 
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                >
                    {children}
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        paddingVertical: 15,
        // marginBottom: 2
    },
    title: {
        // color: variable.colors.primary_lighter
        color: "#babbbc",
        fontSize: 16,
        marginBottom: 5
    },
    rule:{
        width: "100%",
        height: 0.5,
        backgroundColor: "#707070"
    },
    childrenContainer: {
        paddingTop: 5
    }
})
