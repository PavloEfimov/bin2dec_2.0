let inpBinary = document.querySelector('#inpBinary');
let divDecimOutput = document.querySelector('#divDecimOutput');
let btn = document.querySelector('#btn');
let binaryLength = document.querySelector('#binaryLength');

let binaryValue;
let decimalValue=0;

let fnCheckInput = function(e){
    console.log('e.key', e.key);
    console.log('inpBinary.value',inpBinary.value)
    console.log('e.target.value', e.target.value)
    console.log('binaryLength.value', binaryLength.value)
    // inpBinary.value = 'test'
  
   if (inpBinary.value.length == binaryLength.value){
    divDecimOutput.textContent = `binary length - max ${binaryLength.value}` 
    if(e.key != 'Backspace'){
        e.preventDefault();
    }
   
   }

    if ((e.key != 0) && (e.key != 1)&&(e.key != 'Backspace')){
        divDecimOutput.textContent = 'input should be "0" or "1"!' 
        e.preventDefault();
    }
    console.log(inpBinary.value.length)
}

let binaryToDecimal = function(){
    binaryValue = inpBinary.value;
    for (let i=0; i<binaryValue.length; i++){
        decimalValue = decimalValue*2 + +binaryValue[i];
    }

}

let fnBtn = function(){
    binaryToDecimal();
    divDecimOutput.textContent = decimalValue;
    decimalValue=0;
    inpBinary.value='';

}

inpBinary.addEventListener('keydown', fnCheckInput);
btn.addEventListener('click', fnBtn);

