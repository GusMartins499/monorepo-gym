import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initialValue;

      if (typeof initialValue === 'string') {
        return item as T;
      }

      return JSON.parse(item) as T;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        if (typeof value === 'string') {
          window.localStorage.setItem(key, value);
        } else {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      }
    } catch {
      console.log('Erro ao salvar no localStorage')
    }
  };

  return [storedValue, setValue] as const;
}