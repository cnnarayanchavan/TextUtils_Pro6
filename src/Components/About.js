import React, {useState} from 'react'

export default function About() {

  // const applyStyle = {
  //   color : 'white',
  //   backgroundColor : 'black',
  // }

  //convert this applyStype variable into useState variable

  //state for changing button text 
  const[btntext,setBthText] = useState("Enable Dark Mode")


  //state for on and off of background color
   const [applyStyle, setStyle] = useState(  
    {
      color : 'black',
      backgroundColor : 'white',
      border: '1px solid black'
    }
  )

  const changeMode = () => {
    if (applyStyle.color === 'white') {
      setStyle({
        color : 'black',
        backgroundColor : 'white',
      })

      setBthText("Enable Dark Mode")
    }else{
      setStyle({
        color : 'white',
        backgroundColor : 'black',
      })
      setBthText("Enable Light Mode")
    }
  }

  
  

  return (
    <div className='container my-4'style={applyStyle}>
        <h1 className='my-3'>About us..</h1>
      <div className="accordion" id="accordionExample">

  <div className="accordion-item" style={applyStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={applyStyle}>  
        <h5><strong>TextUtils..</strong></h5>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" > 
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={applyStyle}>
        <h5><strong>GitRepo..</strong></h5>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={applyStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={applyStyle}>
        <h5><strong>About Project..</strong></h5>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={applyStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

</div>
<div className=' my-3'>
<button className="btn btn-danger    my-2" onClick={changeMode}>{btntext}</button>
</div>
    </div>
  )
}
