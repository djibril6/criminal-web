const BUVIBU_STORAGE_KEY = 'BUVIBU_STORAGE_KEY';

export const getFromLocalStorage = () => {
  const prevStorage = localStorage.getItem(BUVIBU_STORAGE_KEY);

  return prevStorage ? JSON.parse(prevStorage) : {};
};

export const setToLocalStorage = <T>(data: T): void => {
  localStorage.setItem(BUVIBU_STORAGE_KEY, JSON.stringify(data));
};

export const updateLocalStorage = <T>(data: T): void => {
  setToLocalStorage({ ...getFromLocalStorage(), ...data });
};

export const removeLocalStorage = (): void => {
  localStorage.removeItem(BUVIBU_STORAGE_KEY);
};
