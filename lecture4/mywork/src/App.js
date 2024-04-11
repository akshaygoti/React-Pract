import './App.css';
import Img from './components/assets/9.jpg'

function App() {
  return (
    <div className="App">
      <h1>my all img</h1>
        <img src="https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-auto' alt="Girl in a jacket" width="500" height="600"></img>

        <div className='flex justify-between'>
           <img src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='rounded-full' alt="Girl in a jacket" width="500" height="600"></img>
          <img src="https://images.pexels.com/photos/11060892/pexels-photo-11060892.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='rounded-full' alt="Girl in a jacket" width="500" height="600"></img>
        </div>
          <img src="https://images.pexels.com/photos/11060892/pexels-photo-11060892.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='w-full' alt="Girl in a jacket" width="500" height="600"></img>
    </div>
  );
}

export default App;
