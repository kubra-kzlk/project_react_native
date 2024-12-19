
import { createContext } from 'react';
import { CoffeeContextType } from '@/src/types/coffee';

export const CoffeeContext = createContext<CoffeeContextType | null>(null);