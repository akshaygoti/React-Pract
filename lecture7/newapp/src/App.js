
import "./App.css";
import "./index.css"

import CardProps from "./Props-pass/Cardprops";

import Data from "./Props-pass/Data";



function App() {
  return <>
   <div className="App"> 
  <div className= "h-96 flex flex-wrap items-center justify-around mt-5 rounded-full text-center display: flex;">

  {/* <CardProps name="Akshay" title1="green iguana" img={Img1}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Nori desi" title1="gree" img={Img2}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Ameri" title1="greeana" img={Img3}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
 
  <CardProps name="Viki" title1="greeana" img={Img4}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Elons" title1="gree" img={Img5}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/>
  <CardProps name="Delhi" title1="green iguana" img={Img6}  ds="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."/> */}


{/* <Data/> */}

    {Data.map((value,i)=>{
       return <CardProps key={i} img={value.img} ds={value.ds} name={value.name} age={value.age} /> 
    })}
  </div>

    {/* return <CartProps name={value.name} age={value.age} key={i}/> */}
     </div>
  </>
}

export default App;