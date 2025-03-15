import React, { useState } from "react";
export default function TextForm(props) {

  const handleUpClick = () => {
    let uppercasetext = text.toLocaleUpperCase();
    setText(uppercasetext);
    props.showAlert("Coverted to Upper Case","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  const handlelowClick=()=>{
    let lowercasetext =text.toLocaleLowerCase();
    setText(lowercasetext);
    props.showAlert("Coverted to Lower Case","success")
  }

  const handleClearClick=()=>{
    let newText =" ";
    setText(newText);
    props.showAlert("Text area has been cleared","success")
  }
  
  const handleCopyClick =()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text area has been Copied to your clipboard","success")
  }
  const [text, setText] = useState("");
  let wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  let charCount = text.length; // Character count
  let readingTime = (wordCount * 0.008).toFixed(2); // Reading time estimate
  return (
    <>
    <div className="container ">
      <div className="mb-3">
        <h1 className="my-4">{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          style={{background:props.mode==='dark'? '#d0d0c2':'#d0d0d0',color:props.mode==='dark'? 'black':'black'}}

        ></textarea>
      </div>
      <button style={{background:props.mode==='dark'? '#3498db ':'#85c1e9 ',color:props.mode==='dark'? 'black':'black'}} disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button style={{background:props.mode==='dark'? '#3498db ':'#85c1e9 ',color:props.mode==='dark'? 'black':'black'}} disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>
        Convert to lower case
      </button>
      <button style={{background:props.mode==='dark'? '#3498db ':'#85c1e9 ',color:props.mode==='dark'? 'black':'black'}} disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button  style={{background:props.mode==='dark'? '#3498db ':'#85c1e9 ',color:props.mode==='dark'? 'black':'black'}}disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
        Copy Text
      </button>
    </div>
    <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p> Words {wordCount} and {charCount} Character</p>
    <p> {readingTime} minutes to read</p>
    <h4>{text.length === 0 ? "Write something above to preview here" : text}</h4>
    </div>
    </>
  );
}
