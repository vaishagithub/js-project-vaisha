import { useState } from 'react';
import './App.css';

function App() {
  const [height,setHeight] = useState("");
  const [weight,setWeight] =useState("");
  const [bmi,setBmi] = useState(null);
  const [bmiStatus,setBmiStatus]=useState("");
  const [errorMessage,seterrorMessage]=useState("");


  const calculateBmi=()=>{

    const  isvalidHeight= /^\d+$/.test(height);
    const isvalidWeight = /^\d+$/.test(weight);
    
    if(isvalidHeight && isvalidWeight){
      const heightInMeters =  height/100;
      const bmiValue = weight/(heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setBmiStatus("Underweight")
      }else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setBmiStatus("Normal Weight")
      }else if(bmiValue>=25 && bmiValue< 29.9){
        setBmiStatus("Overweight");
      }else{
        setBmiStatus("Obesity")
      }
      seterrorMessage("")//all condition satisfied finally empty error message
    }else{
     setBmi(null);
     setBmiStatus("");
     seterrorMessage("Please enter valid numeric values for height and weight.")
  }
};

const clearAll = () =>{
  setHeight("");
  setWeight("");
  setBmi(null);
  setBmiStatus("");
}

 
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
          <div className="data">
            <h1>BMI Calculator</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="input-container">
              <label htmlFor='height'>Height (cm) :</label>
              <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="inout-container">
              <label htmlFor='weight'>Weight (Kg) :</label>
              <input type="text" value={weight} id="weight" onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>Clear</button>
            

            {bmi !== null && (<div className='result'>
                <p>Your BMI is :{bmi}</p>
                <p>Status:{bmiStatus}</p>
            </div>)}
         
        </div>
      </div>
    </>
  );
}

export default App
