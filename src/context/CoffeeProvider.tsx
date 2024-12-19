/**
 * Context en Provider voor het centraal beheren van de coffee collectie.
 * Verzorgt state management en communicatie met de mangaService.
 */
import React, { useState, useEffect } from "react";
import { Coffee } from "@/src/types/coffee";
import coffeeService from "@/src/services/coffeeService";
import { CoffeeProviderProps } from "@/src/types/coffee";
import { CoffeeContext } from "./CoffeeContext";
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { type } = useLocalSearchParams(); //extracts the query parameter: hot / iced

    // Laad coffees bij het opstarten van de app
    useEffect(() => {
        loadCoffees();
    }, []);

    // Hoofdfuncties voor coffee beheer
    const loadCoffees = async () => {
        try {
            setIsLoading(true);
            const data = await coffeeService.getCoffeeList();
            setCoffees(data);
        } catch (error) {
            throw new Error("Failed to load coffee list");
        } finally {
            setIsLoading(false);
        }
    };

    /**
  * Voegt een nieuwe coffee toe aan de collectie
  * en werkt de state bij na succesvolle toevoeging
  */
    const addCoffee = async (coffee: Coffee) => {
        try {
            const newCoffee = await coffeeService.addCoffee(coffee);
            setCoffees([...coffees, newCoffee]);
        } catch (error) {
            throw error;
        }
    };


    const reloadMangas = () => loadCoffees();

    return (
        <CoffeeContext.Provider
            value={{
                coffees,
                isLoading,
                addCoffee,
                reloadMangas,
            }}
        >
            {children}
        </CoffeeContext.Provider>
    );



}