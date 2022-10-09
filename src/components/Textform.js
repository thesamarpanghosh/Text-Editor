import React, {useState} from 'react';

export default function Textform(props) {

    const [text,setText] = useState('');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpCase = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Text is converted to upper case","success");
    }

    const handleLoCase = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text is converted to lower case","success");
    }

    const handleCopy = ()=>{
        let newtext = document.getElementById('myBox');
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Text is copied","success");
    }

    const handleClear = ()=>{
        setText('');
        props.showAlert("Text is cleared","success");
    }

    const handleRemove = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","success");
    }

    let myStyle={
        btnMode: props.mode==='light'?'dark':'light'
    }

    return (
        <div>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h1 style={{textAlign:'center'}}>{props.heading}</h1>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#120c3b', color:props.mode==='light'?'black':'white'}}></textarea>
                <button type="button" disabled={text.length===0} onClick={handleUpCase} className={`btn btn-${myStyle.btnMode} mx-2 my-2 center`}>Convert to Upper Case</button>
                <button type="button" disabled={text.length===0} onClick={handleLoCase} className={`btn btn-${myStyle.btnMode} mx-2 my-2 center`}>Convert to Lower Case</button>
                <button type="button" disabled={text.length===0} onClick={handleCopy} className={`btn btn-${myStyle.btnMode} mx-2 my-2 center`}>Copy Text</button>
                <button type="button" disabled={text.length===0} onClick={handleClear} className={`btn btn-${myStyle.btnMode} mx-2 my-2 center`}>Clear Text</button>
                <button type="button" disabled={text.length===0} onClick={handleRemove} className={`btn btn-${myStyle.btnMode} mx-2 my-2 center`}>Remove Extra Spaces</button>
            </div>
            <div className='container my-4' style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.008} minuntes read</p>
            </div>
            <div className='container my-4' style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Preview</h2>
                <p>{text.length!==0?text:"Nothing to preview"}</p>
            </div>
        </div>
    )
}
