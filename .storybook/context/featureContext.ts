import { createContext } from 'react';

export type FeatureContextType = {
  workleap: boolean;
};

const defaultValue = {
  workleap: true,
};

export const FeatureContext = createContext(defaultValue);
