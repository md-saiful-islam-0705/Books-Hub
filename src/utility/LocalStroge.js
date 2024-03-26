// utility/localstorage.js

// Function to save data to local storage
export const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to local storage:", error);
    }
  };
  
  // Function to retrieve data from local storage
  export const getFromLocalStorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error retrieving from local storage:", error);
      return null;
    }
  };
  