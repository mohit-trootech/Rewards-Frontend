/**Theme Context */
import React from "react";
import { loadLocalstorage } from "../utils/BaseUtils";
export const ThemeContext = React.createContext(
  loadLocalstorage("theme") || "light"
);

export const UserContext = React.createContext(
  loadLocalstorage("access") || null
);

export const PaymentContext = React.createContext(0);

export const LotteyContext = React.createContext(0);
