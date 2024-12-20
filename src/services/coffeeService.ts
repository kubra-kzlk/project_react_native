/**
 * Service voor het beheren van de coffee collectie
 * Handelt API communicatie en lokale opslag af
 */
//import { API_CONFIG } from "@/src/config/api";
import AddCoffee from "@/app/(tabs)/AddCoffee";
import { storage } from "@/src/config/storage";
import { Coffee } from "@/src/types/coffee";
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMxMzI5ODFAYXAuYmUiLCJpYXQiOjE3MzM1OTUzMzJ9.d1AD-vAxkIunSHSzhLk1FfFoe72lhsIEj1Fj4Kc_XKg';


/**
 * Haalt de coffee lijst op, met fallback naar lokale opslag
 */
const getCoffeeList = async (type: 'hot' | 'iced'): Promise<Coffee[]> => {
    try { //TO DO: API_CONFIG gebruiken
        const response = await fetch(`https://sampleapis.assimilate.be/coffee/${type}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });
        const data: Coffee[] = await response.json();
        await storage.set("COFFEE_LIST", data);
        return data;
    } catch (error) {
        console.error("Error fetching coffee list:", error);

        const savedData = await storage.get<Coffee[]>("COFFEE_LIST");
        return savedData ?? [];
        throw new Error("Failed to load coffee list");
    }
};

export default {
    getCoffeeList,
    AddCoffee,
    // updateCoffee,
    // deleteCoffee,
}