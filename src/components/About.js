import React, {useState} from 'react'

export default function About(props) {

  return (
    <div classNameName="container">
        <h1 classNameName='my-5' style={{ color: props.mode==='dark'? 'white':'black'}}>About Us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={{backgroundColor: props.mode==='dark'? 'black':'white', color: props.mode==='dark'? 'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About the Application</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}}>
                    <strong>The app provides various utilities to modify your text in the way you desire :</strong> UpperCase and LowerCase converter, Extra Spaces Remover, Clearing the text, Words and Characters Count, estimated predicted time for reading, as well as Copying your text to the Clipboard.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='dark'? 'black':'white', color: props.mode==='dark'? 'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>About the Developer</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}}>
                    This app is developed by <strong> Arush Bhatia.</strong>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
