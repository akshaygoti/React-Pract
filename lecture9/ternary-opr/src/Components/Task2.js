 import React from 'react'

const Task2 = ({ a, b, c }) => {
    let tx =" ";

    if (a === b && b === c) {
        tx ="Matching"
    }
    else {
        tx = "NOT Metching"
    }
    return(
       <>
        <h1 className=' text-red-800'> {a} {b} {c} </h1>
        <h1>{tx}</h1>
       </>
    )
    
}

// const Task2 =({ a, b, c}) => {
//     // let a;
//     // let b;
//     // let c;
//     let text = "";

//     if(a===b && b===c){
//         text ="Matching";
//     }
//     else{
//         text = "No Matching";
//     } 
//     return(
//         <>
//             <h1> {a} {b} {c} </h1>
//             <p>{text}</p>
//         </>
//     )

// }

export default Task2 