import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "Success: ")
    }

    const handleCopy = (event)=>{
        let copiedText = document.getElementById("myBox")
        // copiedText.select()
        navigator.clipboard.writeText(copiedText.value)
        props.showAlert("Copied.", "success")
    }
    
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }  

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", "Success: ")
    }

    const handleClear = ()=>{
        setText('');
    }
    const [text, setText] = useState('Enter text here');
    return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'#042743', backgroundColor: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style = {{color: props.mode==='dark'?'black':'#042743', backgroundColor: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 *text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
