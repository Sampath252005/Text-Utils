import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";  // ✅ Moved to correct place
import Alert from "./components/Alert";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const themeColor = {
    light: { background: "white", color: "black" },
    dark: { background: "#070738", color: "white" },
    blue:{background:"blue",color:"white"}
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.style.backgroundColor = themeColor[newTheme].background;
    document.body.style.color = themeColor[newTheme].color;
    document.title = `Text-Utils-${newTheme}`;
    showAlert(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} Theme Enabled`, "success");
  };

  return (
    <Router>
      <>
      <Navbar title="TextUtils" mode={theme} changeTheme={changeTheme} aboutText="AboutTextUtils" />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={theme} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About themeColor={themeColor} theme={theme} />} />
        </Routes>
      </div>
      </>
    </Router>
  );
}

export default App;
