import React from "react";
import AppRouter from "./Router";
import "./index.css";  // Ensure Tailwind CSS is imported

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <AppRouter />
    </div>
  );
};

export default App;
