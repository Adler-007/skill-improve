const AUTH_STORAGE_KEY = "personal-knowledge-auth";

const AUTH_ACCOUNT = {
  username: "admin",
  password: "123456"
};

export const login = (username: string, password: string, remember = true) => {
  const passed = username === AUTH_ACCOUNT.username && password === AUTH_ACCOUNT.password;

  if (passed) {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(AUTH_STORAGE_KEY, "authenticated");
  }

  return passed;
};

export const logout = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
};

export const isAuthenticated = () =>
  localStorage.getItem(AUTH_STORAGE_KEY) === "authenticated" ||
  sessionStorage.getItem(AUTH_STORAGE_KEY) === "authenticated";

export const demoAccount = AUTH_ACCOUNT;
