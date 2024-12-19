/**
 * Hoofdcomponent voor de app layout die de navigatiestructuur en context opzet.
 * Gebruikt CoffeeProvider voor state beheer en Expo Router voor navigatie.
 */
import { CoffeeProvider } from "@/src/context/CoffeeProvider";
import { Stack } from "expo-router";

function AppLayout() {
    return (
        <CoffeeProvider>
            {/* Stack navigator zonder headers, voor tab navigatie */}
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
            </Stack>
        </CoffeeProvider>
    );
}

export default AppLayout;
