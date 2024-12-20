/**
 * Custom hook voor toegang tot de coffee context binnen de applicatie.
 * Biedt toegang tot alle coffee-gerelateerde state en functies.
 *
 * @throws Error wanneer gebruikt buiten de CoffeeProvider
 */
import { useContext } from "react";
import { CoffeeContext } from "@/src/context/CoffeeContext";
import { CoffeeContextType } from "@/src/types/coffee";

const useCoffee = () => {
    const context = useContext(CoffeeContext);
    if (!context) {
        throw new Error("useCoffee moet binnen een CoffeeProvider gebruikt worden");
    }
    return context as CoffeeContextType;
};

export default useCoffee;
