/**
 * Hoofdnavigatie layout voor de app met tab-based navigatie.
 * Configureert de tab bar met iconen en kleuren.
 */
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        headerStyle: {
          backgroundColor: "white",
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      {/* Collectie tab - Hoofdoverzicht van coffees */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Collection",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }}
      />
      {/* Zoek tab - Voor het toevoegen van nieuwe coffees */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      {/* Tracker tab - Voor coffee herinneringen*/}
      <Tabs.Screen
        name="tracker"
        options={{
          title: "Tracker",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      {/* Locaties tab - Voor het bijhouden van coffeelocaties */}
      <Tabs.Screen
        name="locations"
        options={{
          title: "Coffee Spots",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
