let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;
    document.getElementById("increase").style.backgroundColor = "green";
    if(updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue < 0){
    counterElement.style.color="red";
}
else{
    counterElement.style.color="black";
}
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    document.getElementById("decrease").style.backgroundColor = "red";
     if(updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue < 0){
    counterElement.style.color="red";
}
else{
    counterElement.style.color="black";
}



}

function onReset() {
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
    document.getElementById("reset").style.backgroundColor = "grey";
    if(updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue < 0){
    counterElement.style.color="red";
}
else{
    counterElement.style.color="black";
}
}
