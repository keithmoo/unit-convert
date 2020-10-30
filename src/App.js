import './App.css';
import React, { useState } from 'react';


function HandleAmountChange(e) {
  const [amount, setAmount] = useState(0);
  let formAmount = e.target.Amount.value;
  setAmount(formAmount);
}

function HandleUnitChange(e) {
  const [unit, setUnit] = useState('Select');
  let formUnit = e.target.Select.value;
  setUnit(formUnit);
}

function whatToConvert() {
  
  let unit = this.state.unit;
  let formAmount = this.state.amount;

  if (unit === 'Select') {
    return <>
    Select A Unit
    </>
  }
  else if (unit === 'Gallons') {
    return <>
    {gallonsToLiters(formAmount)} Liters | {gallonsToPounds(formAmount)} Pounds of Water
    </>
  }
  else if (unit === 'Liters') {
    return <>
    {litersToGallons(formAmount)} Gallons
    </>
  }
  else if (unit === 'Inches') {
    return <>
    {inchesToCentimeters(formAmount)} Centimeters | {InchesToFeet()} Feet
    </>
  }
  else if (unit === 'Centimeters') {
    return <>
    {centimetersToInches(formAmount)} Inches
    </>
  }
  else if (unit === 'Feet') {
    return <>
    {feetToInches(formAmount)} Inches | {feetToYards(formAmount)} Yards
    </>
  }
  else if (unit === 'Pounds') {
    return <>
    {poundsToGallons(formAmount)} Gallons | {poundsToKilograms(formAmount)} Kilograms
    </>
  }
  else if (unit === 'Kilograms') {
    return <>
    {kilogramsToPounds(formAmount)} Pounds
    </>
  }
  else if (unit === 'Yards') {
    return <>
    {yardsToFeet(formAmount)} Feet
    </>
  }
}


function litersToGallons(num) {

  return (num * (1/3.8));

};

function gallonsToLiters(num) {

  return (num * 3.8);

};

function inchesToCentimeters(num) {

  return (num * 2.54);

};

function centimetersToInches(num) {

  return (num * (1/2.54));

};

function gallonsToPounds(num) {

  return (num * 8);

};

function poundsToGallons(num) {

  return (num * (1/8));

};

function feetToInches(num) {

  return (num * 12);

};

function InchesToFeet(num) {

  return (num * (1/12));

};

function yardsToFeet(num) {

  return (num * 3);

};

function feetToYards(num) {

  return (num * (1/3));

};

function kilogramsToPounds(num) {

  return (num * 2.2);

};

function poundsToKilograms(num) {

  return (num * (1/2.2));

};

function App() {
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
          <button>Submit</button>
        </form>
        <div className='final'>
          <h2>{whatToConvert()}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
