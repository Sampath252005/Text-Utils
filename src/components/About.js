import React from "react";
export default function About(props) {
  return (
    <div className="container" style={props.themeColor[props.theme]}>
      <h1 className="my-3">About Us</h1>
      <div
        className="accordion"
        id="accordionExample"
        style={props.themeColor[props.theme]}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.themeColor[props.theme]}
            >
              <strong>Introduction</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            pstyle={props.themeColor[props.theme]}
          >
            <div
              className="accordion-body"
              style={props.themeColor[props.theme]}
            >
              TextUtils should introduce the application as a simple yet
              powerful tool designed for text manipulation. It helps users
              modify, analyze, and format their text efficiently. Whether
              someone needs to convert text to uppercase, lowercase, or count
              words and characters, TextUtils provides a seamless experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.themeColor[props.theme]}
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={props.themeColor[props.theme]}
            >
              One of its key features is text analysis, allowing users to
              quickly see word counts, character counts, and estimated reading
              time. Additionally, it offers text enhancement options like
              removing extra spaces, copying text with a single click, and
              clearing the input field effortlessly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.themeColor[props.theme]}
            >
              <strong>Theme Customization</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={props.themeColor[props.theme]}
            >
              The application also supports theme customization, letting users
              switch between light, dark, and blue themes for a more
              personalized and comfortable experience. With a clean and
              responsive UI built using React and Bootstrap, TextUtils ensures a
              smooth and user-friendly interaction.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.themeColor[props.theme]}
            >
             <strong>User-Friendly Interface</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={props.themeColor[props.theme]}
            >
              Designed for students, writers, developers, and professionals,
              this tool is completely free to use, requiring no login or
              registration.<br></br> Future updates may include advanced features like
              AI-based text summarization and grammar checking to further
              enhance the user experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
