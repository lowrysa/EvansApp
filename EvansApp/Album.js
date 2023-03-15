import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import pic from './assets/th.jpeg'

export default function Album(imageURL) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Here's Today's album:</Text>
            <Image style={styles.image} source={pic}/>
            <Text style={styles.albumTitle}>Good Kid MAAD City</Text>
            <Text style={styles.artistText}>Kendrick Lamar</Text>

            <TouchableOpacity style={styles.spotifyButton} onPress={() => listenToAlbum()}>
                <Text style={styles.spotifyButtonText}>LISTEN TO IT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

function listenToAlbum() {

}

const styles = StyleSheet.create({
    container: {
        flex: 0.75,
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300,
        margin: 10
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    albumTitle: {
        fontSize: 25,
        color: 'white',
    },
    artistText: {
        fontSize: 20,
        color: 'gray',
        fontStyle: 'italic'
    },
    spotifyButton: {
        marginTop: 20,
        backgroundColor: 'green',
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 50
    },
    spotifyButtonText: {
        color: 'white',
        fontSize: 17
    }
});