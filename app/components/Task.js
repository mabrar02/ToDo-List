import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = (props) => {
    return(
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF9EC",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#355834",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#947EB0",
        borderWidth: 2,
        borderRadius: 5,
    },
});
export default Task;