import React from 'react'

export default function About(props) {

    let myStyle={
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'#120c3b'
    }

    return (
        <div>
            <div className="container" style={myStyle}>
                <h1 style={{textAlign:'center'}}>{props.about}</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                About Text Editor
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Created with React.js.</strong> The application is created using React Function Based Component. As a Single Page Application (SPA), while moving to different navigations the pages will not load since js takes control of the page.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Usage of Text Editor
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Online Text Editor.</strong> Once the text is entered in the given text box, user can convert the entire text in upper case, lower case, copy the text, clear text and remove extra spaces between the words. Whatever that is being entered into the text box shall immediately be displayed in the Preview section else it will display "Nothing to preview". At the same time the count of words and characters and minutes required to read the total number of words shall also be displayed under Text Summary section.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Enable/Disable Light Mode
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Toggle between light/dark mode.</strong> At the top right of the navigation bar there is a toggle button enabling which dark mode will be activated. Disable the button and the default light mode will enable.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

