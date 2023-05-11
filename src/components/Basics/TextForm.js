import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('Enter Text');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handlelowerclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);

    }   
    const handelonChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = (event) => {
        setText("");
        // useSpeechSynthesis();
    }
   

    return (
        <>
            <div><form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">{props.title}</label>
                    <textarea className="form-control" value={text} onChange={handelonChange} id="textbox" rows="5"></textarea>
                </div>
            </form></div>
            <button type="button" className="btn btn-primary btn-lg1 my-3 mx-5" onClick={handleUpClick}  >Convert to Uppercase</button>
            <button type="button" className="btn btn-primary btn-lg2 my-3 mx-5" onClick={handlelowerclick} >Convert to Lowercase</button>
            <button type="button" className="btn btn-primary btn-lg3 my-3 mx-5" onClick={handleClearText}>Clear Text</button>

            <div className="data my-5" >
                <h2>Your test summary</h2>
                
                <p>total words count : {text.split(" ").length}</p>
                <p>total char count : {text.length}</p>
            </div>

           
        </>
    )
}
