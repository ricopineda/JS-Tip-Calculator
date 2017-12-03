

// Hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";






function calculateTip(){

	// store the data of the inputs

	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;

	// add quick validations

	if(billAmount === "" || serviceQuality == 0 ){
		
		return window.alert("Please enter values");
	} 

	if(numPeople === "" || numPeople <= 1){
		numPeople = 1;

		document.getElementById("each").style.display = "none";
	} else{
		document.getElementById("each").style.display = "block";
	}

	var total = (billAmount * serviceQuality) / numPeople;

	total = Math.round(total * 100)/ 100;
	total = total.toFixed(2);

	//display the tip

	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;


}



document.getElementById("calculate").onclick = function() {calculateTip()};


 
	








