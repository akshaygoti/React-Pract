// import React from 'react'
import React, {useRef} from 'react'

function Useref() {
    const ref = useRef();
    console.log(ref,"ref");

    const handleRef = () => {
        ref.current.focus();
        ref.current.style.color="red";
        // ref.current.style.display="none"
    }
  return (
    <div>
      <input ref={ref} className='App'/>
      <button onClick={handleRef}>Submit</button>
    </div>
  )
}

export default Useref;
