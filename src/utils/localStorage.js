export const setLocalStorageItem = ({ key, value }) => {
  const stringifyValue = JSON.stringify({ value });
  localStorage.setItem(key, stringifyValue);
};

export const getLocalStorageItem = (key, defaultValue = "") => {
  const value = localStorage.getItem(key);

  try {
    return JSON.parse(value)?.value ?? defaultValue;
  } catch {
    return defaultValue;
  }
};
