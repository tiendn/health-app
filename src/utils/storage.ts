export const setStorage = (key: string, value: any) => {
	localStorage.setItem(key, value);
};

export const getStorage = (key: string) => {
	return localStorage.getItem(key);
};

export const LOGIN_STORAGE_KEY = "hasLoggedIn";
