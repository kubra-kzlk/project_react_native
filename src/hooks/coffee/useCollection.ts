/**
 * Hook voor het beheren en weergeven van de coffee collectie.
 * Biedt zoek- en filteropties en navigatiefunctionaliteit.
 */
import { useState, useMemo } from "react";
import { useRouter } from "expo-router";
import useCoffee from "@/src/hooks/context/useCoffee";