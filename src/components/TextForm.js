import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = ()=>{
      console.log("Lowercase was clicked" + Text);
      let newText = Text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase!", "success");
    }
    const handleCopy = ()=>{
      console.log("I am Copy");
      // var text = document.getElementById("myBox");
      // text.select();
      // document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(Text);
      props.showAlert("Copied to Clipbord!", "success");

    }
    const handleClearClick = ()=>{
      console.log("Clear was clicked" + Text);
      let newText = '';
      setText(newText)
      props.showAlert("Clear your text!", "success");

    }
  
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const value = {b1 : true, b2 : true, b3 : true, b4: true};


    const [Text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white': 'black'}} id="myBox" rows="7"></textarea>
        </div>
        <button disabled={Text.length===0 || (Text.length > 0 && value.b1 === false)} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={Text.length===0 || (Text.length > 0 && value.b2 === false)} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button disabled={Text.length===0 || (Text.length > 0 && value.b3 === false)} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={Text.length===0 || (Text.length > 0 && value.b4 === false)} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Nothing to preview!"}</p>
    </div>
    </>
  )
} 
