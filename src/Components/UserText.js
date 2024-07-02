import React, { useState } from 'react'

export default function UserText(props) {
    // so here  for changing state of the text as per button click i used the useState hook in this UserText

    const[text, setText] = useState("Paste or write Here..")

    //function for converting text to upper case
    const toUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const toLower = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const toChange = (event) =>{
        console.log("Changed!!");
        setText(event.target.value)
    }

    //fist object 
    const headingStyle = {
        textAlign: 'center',
        margin: '0',
        backgroundColor: '#4B0082', // Example background color
        color: 'white', // Text color for better contrast
        borderRadius: '10px', // Rounded corners
        padding: '10px 20px', // Padding for better appearance
        display: 'inline-block',
    };

    //second object for container
    const containerStyle = {
        textAlign: 'center',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: '100vh', // Optional: Adjust as needed
    }

     const textAreaStyle = {
    //     width: '80%', // Adjust width as needed
    //     height: '300px', // Adjust height as needed
        borderColor: '#333', // Darker border color
        borderWidth: '2px', // Thicker border
        borderRadius: '5px', // Optional: Rounded corners
        padding: '10px', // Padding inside the text area
        fontSize: '16px', // Adjust font size as needed
     };

  return (
    <div>
    {/* div for heading */}

    <div className="mb-3 mx-3" style={containerStyle}>
        <h2 style={headingStyle} className='mb-3'>TextUtils{props.style}</h2>
    </div>

    {/* div for text box */}

    <div className="mb-4 mx-5">
        <label for="exampleFormControlTextarea1" className="form-label"><strong><h4>Paste Your Text Here!</h4></strong></label>
        <textarea  className="form-control" id="exampleFormControlTextarea1" rows="12" style={textAreaStyle} value={text} onChange={toChange}></textarea>
    </div>

    <button className="btn btn-success mb-3 mx-5" onClick={toUpper}>Convert to Uppercase</button>

    <button className="btn btn-success mb-3" onClick={toLower}>Convert to Lowercase</button>
</div>
  )
}
