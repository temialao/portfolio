import React, { useEffect, useState } from "react";

const ToggleDarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get the user's dark mode preference from localStorage when the component mounts.
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(storedDarkMode);
  }, []);

  // Update the dark mode preference in localStorage and the state.
  const toggleDarkMode = () => {
    localStorage.setItem("isDarkMode", (!isDarkMode).toString());
    setIsDarkMode(!isDarkMode);
  };

  // Update the dark mode class on the body element.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
    </button>
  );
};

export default ToggleDarkMode;
