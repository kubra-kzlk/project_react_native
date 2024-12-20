
//Core coffee types voor de applicatie
export interface Coffee {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    image: string;
    type: string;
}


/**
 * Context en state management types
 */
export interface CoffeeContextType {

}

export interface CoffeeProviderProps {
    children: React.ReactNode;
}
export interface AddButtonProps {
    onPress: () => void;
}