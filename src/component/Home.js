import React from 'react';  
const Home = () => {
  let updateValue =''
const handleClick = (e) =>{
  let  checkOperants =["+", "-", "*", "/", "."] ;
  console.log(updateValue.length) 

//  let slice = updateValue?updateValue.slice(updateValue.length,updateValue.length-1):e.target.value
//  console.log(slice) 

let slice = updateValue.slice(updateValue.length-1);
console.log(slice)
let ifexists = checkOperants.indexOf(slice)
console.log( ifexists)

if (ifexists >=0 && slice === e.target.value ) {
  return
} 


updateValue = updateValue + e.target.value

let display = document.getElementById('display').value 
console.log (display)
document.getElementById('display').value = updateValue;
};
  
const handleCalculate =() => {
let result = eval(updateValue);
document.getElementById('display').value = result;
updateValue= String(result)
console.log(typeof (result))

            
}
const handleClear = () => {
  document.getElementById('display').value = "";
  updateValue = '';
}
const handleClearOnce = () => {
  console.log(updateValue)
let slice = updateValue.slice(0,updateValue.length-1)
console.log(slice)
updateValue= slice
document.getElementById('display').value = updateValue;


} 

// const checkOperants =() =>{
  
// }
// const Addition =(a,b) =>{
//   return a+b;
// }
// const Subtraction =(a,b) =>{

// }
// const Multiplication =(a,b) =>{

// }
// const Division =(a,b) =>{

// }
// const Decpoint =(a,b) =>{

// }
  
    return (

    <div>
        <h1 className='h1'> Calculate me!</h1>
      <div className="container  flex flex-column  item-center mx-auto">
        <div className="row">
          <h4>Calculator...000</h4>
            <input disabled id='display' className="input" type="text" />
        
        <div className="row ">  
            <button  onClick={handleClear} className='button'>AC</button>
            <button onClick={handleClearOnce} className='button'>DE</button>
        
        </div>
        <div className="row ">
            <button value={7} onClick={handleClick} className='button'>7</button>
            <button value={8}  onClick={handleClick} className='button'>8</button>
            <button value={'/'}  onClick={handleClick} className='button'>/</button>
            <button value={'*'}  onClick={handleClick} className='button'>*</button>
        </div>
        <div className="row">
            <button value={4}  onClick={handleClick} className='button'>4</button>
            <button value={5}  onClick={handleClick} className='button'>5</button>
            <button value={9}  onClick={handleClick} className='button'>9</button>
            <button value={'-'} onClick={handleClick} className='button'>-</button>
        </div>
        <div className="row">
            <button value={1}  onClick={handleClick} className='button'>1</button>
            <button value={2} onClick={handleClick} className='button'>2</button>
            <button value={6}  onClick={handleClick} className='button'>6</button>
            <button value={'+'} onClick={handleClick}  className='button'>+</button>
        </div>
        <div className="row">
            <button  value={0} onClick={handleClick} className='button'>0</button>
            <button value={3}  onClick={handleClick} className='button'>3</button>
            <button value={'.'} onClick={handleClick} className='button'>.</button>
            <button value={'='} onClick={handleCalculate} className='button'>=</button>
        </div>
      </div>
      </div>
      
    
    </div>
  );
}

export default Home;
