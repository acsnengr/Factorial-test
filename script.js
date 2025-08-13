const myNumber = document.getElementById("myNumber"); //selects the number id for the myNumber variable
const enter = document.getElementById("enter"); //selects the enter id for inputting the value in the input
const resultElement = document.getElementById("result");
//upon clicking the ENTER button, the eventlistener, listens if the enter button is clicked.
//other syntax to use are click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, contextmenu

function calculateFact() {
  const inputValue = myFactorial.value;
  console.log("input value:", inputValue);
  let result = 1;
  //let i means selecting the variable inputValue for the for loop

  const resultElement = document.getElementById("result");

  //set resultElement as a variable for fetching result element id in DOM
  //which will then be overwritten by these conditions
  if (inputValue === 0) {
    // edge case condition
    result = 1;
    resultElement.textContent = result;
  } else if (!myFactorial.value) {
    resultElement.textContent = "Please input a value";
    return;
  } else {
    // i > 1 simply states the condition for the loop
    //i-- is a decrement operator  i++ is an increment operator
    //the operator i-- means that it decreases by 1 for each loop until the condition i > 1 is false
    for (let i = inputValue; i >= 1; i--) {
      result *= i;
    }
    console.log(result);

    resultElement.textContent = result;
  }
}
enterButton.addEventListener("click", calculateFact);

myFactorial.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    //event.preventDefault();
    calculateFact();
  }
});
