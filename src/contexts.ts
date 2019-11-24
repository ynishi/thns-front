import { createContext } from "react";

export const thnsApi = {
  endpoint: "http://localhost:8080"
};

export const ConfContext = createContext((null as unknown) as typeof thnsApi);
