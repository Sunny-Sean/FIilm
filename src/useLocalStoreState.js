import { useState, useEffect } from "react";

export function useLocalStoreState(initState, key) {
  // Lấy dữ liệu từ bộ nhớ cục bộ
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem("key");
    return storedValue ? JSON.parse(storedValue) : initState;
  });

  // Luư trữ dữ liệu vào bộ nhớ cục bố
  useEffect(
    function () {
      localStorage.setItem("key", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
