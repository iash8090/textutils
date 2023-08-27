import { useState } from "react";
import "./App.css";
import Navbar from "./Componants/Navbar";
import Alert from "./Componants/Alert";
import TextForm from "./Componants/TextForm";
import About from "./Componants/About";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });

        setTimeout(() => {
            setAlert(null);
        }, 3000);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            // to change text color to white
            document.body.style.color = "white";
            showAlert("Dark mode on", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "green";
            document.body.style.color = "black";
            showAlert("Dark mode off", "success");
        }
    };

    return (
        <>
            <Router>
                <Navbar title="TextUtils" about_us="About Us" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Routes>
                    <Route exact path="/" element={<Navigate to="/textutils" />} />
                    <Route exact path="/textutils" element={<TextForm heading="Enter Your Text Here " mode={mode} showAlert={showAlert} />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
