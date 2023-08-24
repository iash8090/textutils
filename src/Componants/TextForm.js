import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearAll = () => {
        let newtext = document.getElementById("Textarea1");
        newtext.value = " ";
    };

    const copyText = () => {
        let data = document.getElementById("Txtarea");
        data.select();
        navigator.clipboard.writeText(data.value);
    };

    const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    };

    const changeToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        //        document.getElementById("Txtarea").value = newText
    };

    const changeToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        //        document.getElementById("Txtarea").value = newText
    };

    return (
        <>
            <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`} style={{ float: "right" }}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    {" "}
                    <b>Dark Mode</b>
                </label>
            </div>
            <div className="container my-3 mb-3 mt-1">
                <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}> {props.heading} </h1>
                <textarea
                    style={{ border: "solid 1px red", backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "light" ? "black" : "white" }}
                    onChange={handleOnChange}
                    className="form-control"
                    id="Textarea1"
                    rows="5"
                ></textarea>
                <button disabled={!text} className="btn btn-primary my-2 mx-1" onClick={handleClearAll}>
                    Clear All
                </button>
                <button disabled={!text} className="btn btn-primary my-2 mx-1" onClick={handleExtraSpace}>
                    Remove Extra Space
                </button>
                <button disabled={!text} className="btn btn-primary my-2 mx-1" onClick={changeToUpper}>
                    To UpperCase
                </button>
                <button disabled={!text} className="btn btn-primary my-2 mx-1" onClick={changeToLower}>
                    To LowerCase
                </button>
            </div>
            <div className="container my-3 mb-1">
                <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}> Output </h1>
                <textarea
                    style={{ border: "solid 1px green", backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "light" ? "black" : "white" }}
                    value={text}
                    className="form-control"
                    id="Txtarea"
                    rows="5"
                    readOnly
                ></textarea>
                <button disabled={!text} className="btn btn-primary my-2 mx-1" onClick={copyText}>
                    Copy All
                </button>
            </div>
            <div className="container">
                <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Text summary</h3>
                <p style={{ color: "yellow" }}>
                    {/* {text.split(" ").length} words and {text.length} characters */}
                    {text.length < 1 ? 0 : text.split(" ").length} words and {text.length} characters
                </p>
            </div>
        </>
    );
}
