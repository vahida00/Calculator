var numberButtons=document.querySelectorAll('.data-number');
var operationButtons=document.querySelectorAll('.data-operation');
var clearButton=document.querySelector('.clear-all');
var deleteButton=document.querySelector('.data-delete');
var equalButton=document.querySelector('.data-equals');
var previousOperandTextElement=document.querySelector('.previous-operand');
var currentOperandTextElement=document.querySelector('.current-operand');
// var finalResult=document.querySelector('.result');
let previousOperand="";
let currentOperand="";
let computation='';

numberButtons.forEach(button=>{
	button.addEventListener('click',()=>{
		appendNumber(button.innerText);
		updateDisplay();
	})
})
operationButtons.forEach(button=>{
	button.addEventListener('click',()=>{
		appendNumber(button.innerText);
		chooseOperation(button.innerText);
		updateDisplay();
	})
})
equalButton.addEventListener("click",button=>{
	compute();
	updateDisplay();
});
clearButton.addEventListener('click',button=>{
	clear();
	updateDisplay();
});
deleteButton.addEventListener('click',button=>{
	deletebutton();
	updateDisplay();
});
function appendNumber(number){
	   if(number==='.' && currentOperand.includes('.')) return 
	   currentOperand=currentOperand.toString()+number.toString();
	}
function chooseOperation(operation){
	if(currentOperand === "") return
	if(previousOperand !== ""){
		compute();
	}
	this.operation=operation;
	previousOperand=currentOperand;
	currentOperand="";
}
function compute(){
	const prev= parseFloat(previousOperand);
	const current=parseFloat(currentOperand);
	if(isNaN(prev) || isNaN(current)) return
	switch(this.operation){
		case '+':
			computation=prev+current;
			break;
		case '-':
			computation=prev-current;
			break;
		case '*':
			computation=prev*current;
			break;
		case '÷':
			computation=prev/current;
			break;
		case '%':
			computation=prev%current;
			break;
		default:
			return
	}
	currentOperand=computation;
	operation=undefined;
	previousOperand='';

}
function clear(){
	previousOperand='';
	currentOperand='';
}
function updateDisplay(){
   currentOperandTextElement.innerText=currentOperand;
   previousOperandTextElement.innerText=previousOperand;
  
   // finalResult.innerText=computation;
}
function deletebutton(){
	currentOperand=currentOperand.toString().slice(0,-1);
}

