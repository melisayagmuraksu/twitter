import { useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [data, setData] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return defaultValue;
    }
  });

  function updateData(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setData(newValue);
  }
  return [data, updateData];
}

export default useLocalStorage;
