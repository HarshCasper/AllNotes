import React , {useEffect,useState} from 'react';
import LoadingMessage from './components/splashscreen';
import "./App.css";

function App() {
  const [loading,setLoading]= useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[])
    return (
     
      <div className="App">
      {
        loading ? <LoadingMessage /> : null
      }
        <header className="App-header">
          <h1>Hello, All-Notes :)</h1>
  
        </header>
      </div>
    );
  }

export default App;