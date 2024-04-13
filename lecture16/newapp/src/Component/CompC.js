import React,{useContext} from 'react'
import { Context } from '../App'

const CompC = () =>{
    const name = useContext(Context)
    return(
        <div className='flex justify-center text-center max-h-screen p-6 text-4xl bg-orange-400 text-white  '>
            <h1>This is ...{name}</h1>
        </div>
    )

    }

export default CompC;