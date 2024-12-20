// app/styles/styles.ts
import { StyleSheet } from "react-native";

// Constanten voor consistentie
const COLORS = {
    primary: "#007AFF",
    error: "#FF3B30",
    success: "#4CAF50",
    background: "#f5f5f5",
    white: "white",
    text: {
        primary: "#333",
        secondary: "#666",
        light: "#888",
    },
    border: "#ddd",
};
const SHADOWS = {
    default: {
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
};


const styles = StyleSheet.create({
    // Layout & Containers
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 1,
    }, headerContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    headerTitle: {
        marginBottom: 10,
        marginTop: 20,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#402024",
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 8,
        width: '100%',
    },
    headerSubtitle: {
        fontSize: 15,
        textAlign: 'center',
        color: "#402024",
        marginTop: 5,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 9,
        fontWeight: 'bold',
        elevation: 6,
    },
    recentlyViewedContainer: {
        width: '100%',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 40,
        width: 300,
        paddingHorizontal: 25,
    },
    button: {
        backgroundColor: '#FFF',
        padding: 10,
        margin: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 9,
        elevation: 6,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#402024",
        textAlign: 'center',
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    applogo: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
    // FAB styles
    fabContainer: {
        position: "absolute",
        right: 20,
        bottom: 20,
    },
    fab: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.default,
    },
    addFab: {
        position: "absolute",
        right: 20,
        bottom: 50,
    },
});


export default styles;