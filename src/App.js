import { useState } from "react";
import "./App.css";
import Navbar from "./Componants/Navbar";
import TextForm from "./Componants/TextForm";
import Alert from "./Componants/Alert";

function App() {
    const [mode, setMode] = useState("light");

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "green";
        }
    };

    return (
        <>
            <Navbar title="TextUtils" about_us="About Us" />
            <Alert text="New Alert" />
            <TextForm heading="Enter Your Text Here " mode={mode} toggleMode={toggleMode} />
        </>
    );
}

export default App;
