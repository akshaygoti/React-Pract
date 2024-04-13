import React from 'react'

function Task() {
    
// const customStyle={
    // color: " "
//   }
  let greet;
    const time=new Date().getHours ()
    if (time >= 0 && time < 12){
      greet="Good Morning"
    //   customStyle.color='red'
    }
   else if(time >= 12 && time < 18){
      greet="Good Afternoon"
    //   customStyle.color='green'
    }
    else if (time >= 18 && time < 24){
      greet="Good Evening"
      // customStyle.color='blue'
}
  return (
    <div>
        <h1 className='heading text-5xl font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'>{greet}</h1>
    </div>
  )
}

export default Task;