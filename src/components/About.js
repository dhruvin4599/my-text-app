import React,{useState} from 'react'

export default function About(props) {

//    const [myStyle, setmyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
    
//    })
let myStyle = {
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'black':'white',
    border: '1px solid',
    borderColor: props.mode ==='dark'?'white':'black', 
}
//    const[btntext, setBtnText] = useState("Enable Dark Mode")

//    const toggleStyle = ()=>{
//         if (myStyle.color === 'white') {
//             setmyStyle({
//                 color: 'black',
//                 backgroundColor: 'white'
//             })
//             setBtnText("Enable Dark Mode")
//         }
//         else {
//             setmyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//                 border: '1px solid white'
//             })
//             setBtnText("Enable Light Mode")

//         }
//     }

  return (
    <div className="container" >
        <h2 className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>About Us</h2> 
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This Application gives you a way to analyze your text quickly and efficiently. Be it word count and character count.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This is free character counter tool that provides instant character count and statistics for a given text. This Application reports the number of words and characters.Thus, it is suitable for writing text word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web Browsers such as Chrome, Firefox, Internet Explorer, Safari, Microsoft Edge, Opera. It suits to count characters in facebook, blog, books, excle document, pdf document, essays, etc. 
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
        
    </div>
  )
}