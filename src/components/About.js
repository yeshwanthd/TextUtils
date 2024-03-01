import React,{useState} from "react";




export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    let toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '2px solid black'
            })

            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid white'
            })
            setBtnText("Enable Light Mode")
        }
    }
    return (
        <div className="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne" style = {myStyle}
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is
                            the first item's accordion body.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is
                            the second item's accordion body. Let's imagine this being filled
                            with some actual content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is
                            the third item's accordion body. Nothing more exciting happening
                            here in terms of content, but just filling up the space to make it
                            look, at least at first glance, a bit more representative of how
                            this would look in a real-world application.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
            <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div>
            
        </div>
    );
}
