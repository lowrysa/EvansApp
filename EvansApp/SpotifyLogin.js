import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import App from "./App.js";

export default function SpotifyLogin() {
    return (
        <TouchableOpacity style={styles.spotifyButton} onPress={() => logIn()}>
            <Text style={styles.spotifyButtonText}>LOG IN TO SPOTIFY</Text>
        </TouchableOpacity>
    );
}

function logIn() {
}

const styles = StyleSheet.create({
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