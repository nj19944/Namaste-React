import React from "react";
import ReactDOM from "react-dom/client";

//const parent = React.createElement("h1", {id:"heading"}, "Hello World from React");

const Title = () => {
    return (
        <div>
            <h1>Title Component</h1>
            <h2>Title Component Heading</h2>
        </div>
    )
}

const HeadingComponent = () =>{
    return (
        <>
            <div id="container">
                <Title />
                <Title></Title>
                <h1>Namaste React using JSX 🚀</h1>
                <h2>Namaste React Fucntional Component </h2>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);