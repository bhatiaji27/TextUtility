import React,{useState} from 'react'
 import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick=()=>{
    //console.log("Uppercase was clicked" + text);
    const newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick=()=>{
      //console.log("Uppercase was clicked" + text);
      const newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", "success");

      }

    const handleClrClick=()=>{
      //console.log("Uppercase was clicked" + text);
      const newText="";
      setText(newText)
      props.showAlert("Text Cleared", "success");
    }

    const copyClick=()=>{
      //console.log("Uppercase was clicked" + text);
      const newText="";
      var text= document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied to Clipboard", "success");
    }

    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value)
    }

    const removeExtraClick=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed extra spaces", "success");
  }

    const [text,setText]= useState('');
    //text="abcd"; Wrong Way
    // setText("UPDATED");
  return (
    <>
    <div className="container my-4" style={{ color: props.mode==='dark'? 'white':'black'}}>
    <h1 style={{ color: props.mode==='dark'? 'white':'black'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={copyClick}>Copy text</button>
    <button className="btn btn-primary mx-1" onClick={removeExtraClick}>Remove Extra Spaces</button>
    
    </div>
    <div className="container my-4" style={{ color: props.mode==='dark'? 'white':'black'}}>
      <h2 className="my-4" style={{ color: props.mode==='dark'? 'grey':'grey'}}>Your text summary :-</h2>
      <p className="my-2">There are <strong>{text.split(" ").filter((element)=>{return element.length!=0}).length} words</strong> and <strong>{text.length} characters</strong> in the text.</p>
      <p className="my-2">Average reading time (in minutes) :- <strong>{0.008 * text.split(" ").length}</strong></p>
      <h3 className="my-4" style={{ color: props.mode==='dark'? 'grey':'grey'}}>Text Preview :- </h3>
      <p>{text.length>0 ? text:"Enter something to preview here."}</p>
    </div>
    </>
  )
}
