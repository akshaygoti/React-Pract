import React from 'react'

const Destructuring = props => {
  return (
    <div>
        {/* Without Destructuring:- */}
      <div className="XYZ"> 
               <h3> {props.active} </h3> 
            </div> 
  
            <div className="PQR"> 
                <h1>{props.activeStatus}</h1> 
            </div> 

            {/* With Destructuring:- */}

            {/* <div className="XYZ"> 
               <h3> {active} </h3> 
            </div> 
  
            <div className="PQR"> 
                <h1>{activeStatus}</h1> 
            </div>  */}

    </div>
  )
}

export default Destructuring;
