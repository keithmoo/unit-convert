import './App.css';
import React, { useState } from 'react';


function App() {
  //setup useState and initialize
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState('Select');

  const HandleAmountChange = (e) => {
    //get the amount from the form and set it to State
    let formAmount = Number(e);
    setAmount(formAmount);
  }
  
  const HandleUnitChange = (e) => {  
    //get which unit from form and set it to State
    let formUnit = e;
    setUnit(formUnit);
  }
  
  const whatToConvert = () => {
    // make sure the fields are filled in and do the calculation
    if (unit === 'Select') {
      return (
      <>
      Select A Unit
      </>
      )
    }
    // make sure there is an amount given and that it is a number
    else if (!amount || amount === 0 || typeof amount === 'string') {
      return (
        <>
        Select An Amount
        </>
      )
    }
    else if (unit === 'Gallons') {
      // if we wanted more precise calculations, we would increast the toFixed.
      // if we wanted to account for measurment precision, we would put in toPrecision and 
      // have an input for the user to specify to how many significant figures they wish 
      // the calculation to go to.
      // I specified Pounds of Water because leaving it at just Pounds is not true for 
      // any liquid of any other density.
      let toLiters = Number.parseFloat(amount * 3.8).toFixed(2);
      let toPounds = Number.parseFloat(amount * 8).toFixed(2);
      return (
      <>
      { toLiters } Liters | { toPounds } Pounds of Water
      </>
      )
    }
    else if (unit === 'Liters') {
      let toGallons = Number.parseFloat(amount * (1/3.8)).toFixed(2);
      return (
      <>
      { toGallons } Gallons
      </>
      )
    }
    else if (unit === 'Inches') {
      let toCM = Number.parseFloat(amount * 2.54).toFixed(2);
      let toFeet = Number.parseFloat(amount * (1/12)).toFixed(2);
      return (
      <>
      ({ toCM } Centimeters | ({ toFeet } Feet
      </>
      )
    }
    else if (unit === 'Centimeters') {
      let toIn = Number.parseFloat(amount * (1/2.54)).toFixed(2);
      return (
      <>
      { toIn } Inches
      </>
      )
    }
    else if (unit === 'Feet') {
      let toIn = Number.parseFloat(amount * 12).toFixed(2);
      let toYards = Number.parseFloat(amount * (1/3)).toFixed(2);
      return (
      <>
      ({ toIn }) Inches | ({ toYards }) Yards
      </>
      )
    }
    else if (unit === 'Pounds') {
      let toGallons = Number.parseFloat(amount * (1/8)).toFixed(2);
      let toKG = Number.parseFloat(amount * (1/2.2)).toFixed(2);
      return (
      <>
      { toGallons } Gallons | { toKG } Kilograms
      </>
      )
    }
    else if (unit === 'Kilograms') {
      let toPounds = Number.parseFloat(amount * 2.2).toFixed(2);
      return (
      <>
      { toPounds } Pounds
      </>
      )
    }
    else if (unit === 'Yards') {
      let toFeet = Number.parseFloat(amount * 3).toFixed(2);
      return (
      <>
      { toFeet } Feet
      </>
      )
    }
  }
 
  
  return (
    <div className="App">
      <header>
        <h1>Unit Conversion</h1>
      </header>
      <div className='conversion'>
        <form>
          <legend>
            Convert From?
          </legend>
          <select onChange={ev => HandleUnitChange(ev.target.value)} id='Select' name='Select'>
            <option value='Select'>Select</option>
            <option value='Gallons'>Gallons</option>
            <option value='Liters'>Liters</option>
            <option value='Pounds'>Pounds</option>
            <option value='Feet'>Feet</option>
            <option value='Inches'>Inches</option>
            <option value='Yards'>Yards</option>
            <option value='Kilograms'>Kilograms</option>
          </select>
          <label>Amount:</label>
          <input onChange={ev => HandleAmountChange(ev.target.value)} name='amount' id='amount'></input>
          
        </form>
        <div className='final'>
          <h2>{whatToConvert()}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;


/*
While the directions say that there should be a field to fill in the desired 
unit to convert to, most of the units supplied only have a single other unit 
to convert to.  The rest only have 2 or 3, so it is much cleaner to just 
supply them everything.  If you REALLY needed to have a desired unit, you 
would just have another Select and event listener.  The event listener would 
set the value to State and then there would be a check on the if else chain to 
determine with unit to use.  You can have error handling to make sure that the 
source unit type actually can convert to the desired unit type.

The instruction said to keep this to 1 hour, which I hope you take my word for 
that I actually did.

Lastly, the elephant in the room: The instruction called for this to be made with 
Java, not Javascript.  I'm unsure of what you have heard of me, but I do not know 
Java.  I'm happy to learn, but until I do, javascript is all I can give you.
Thank you for all your time.
*/