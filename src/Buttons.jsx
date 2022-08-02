import React from "react"
function Button(){
    return(
    <div className="button">
       <button className="email-button"><img src = "../src/Images/icon.png"  className='button-icon' />Email</button>
       <button className="linkedin-button"><img src = "../src/Images/Vector.png"className='button-icon'/>LinkedIn</button>
    </div>
    )
}
export default Button