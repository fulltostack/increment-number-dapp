const setValueToStorage = (key, value) => {
  localStorage.setItem(key, value);
}

const getValueFromStorage = (key) => {
  return localStorage.getItem(key);
}

export const incrementCountForAddress = (address) => {
  const count = getValueFromStorage(address);
  setValueToStorage(address, parseInt(count || 0, 10) + 1);
}

export const getCountForAddress = (address) => {
  return getValueFromStorage(address);
}