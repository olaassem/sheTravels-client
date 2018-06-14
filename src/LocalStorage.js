export const saveAuthInfo = (token, userId, name, country, age) => {
  try {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('name', name);
    // localStorage.setItem('username', username);
    localStorage.setItem('country', country);
    localStorage.setItem('age', age);
  } catch(error) {}
};

export const clearLocalStorage = () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    // localStorage.removeItem('username');
    localStorage.removeItem('country');
    localStorage.removeItem('age');
  } catch(error) {}
};
