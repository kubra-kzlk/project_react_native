/**
 * Modaal scherm voor het bekijken en beheren van een specifieke coffee.
 * Toont details en biedt opties voor toevoegen
 */
import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import styles from "@/src/styles/styles";
import { Ionicons } from "@expo/vector-icons";

const CoffeeDetailModal = () => {
    // Haal coffee ID uit route parameters
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header met coffee informatie */}
            
        </SafeAreaView>
    );  
};


export default CoffeeDetailModal;