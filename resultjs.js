$( document ).ready(function() {
	var resto_pairs = pairs;
	var randnum1 = getRandomInt(pairs.length);
	if(randnum1 < 5){
		var randnum2 = randnum1+1;
		var randnum3 = randnum1+2;
		var randnum4 = randnum1+3;
		var randnum5 = randnum1+4;
		var randnum6 = randnum1+5;
	}
	else{
		var randnum2 = randnum1-1;
		var randnum3 = randnum1-2;
		var randnum4 = randnum1-3;
		var randnum5 = randnum1-4;
		var randnum6 = randnum1-5;
	}
	
    var resto1 = pairs[randnum1].resto;
	var resto2 = pairs[randnum2].resto;
	var resto3 = pairs[randnum3].resto;
	var resto4 = pairs[randnum4].resto;
	var resto5 = pairs[randnum5].resto;
	var resto6 = pairs[randnum6].resto;
	
	var pic1 = pairs[randnum1].pic;
	var pic2 = pairs[randnum2].pic;
	var pic3 = pairs[randnum3].pic;
	var pic4 = pairs[randnum4].pic;
	var pic5 = pairs[randnum5].pic;
	var pic6 = pairs[randnum6].pic;
	
	$("#resto1").text(resto1);
	$("#resto2").text(resto2);
	$("#resto3").text(resto3);
	$("#resto4").text(resto4);
	$("#resto5").text(resto5);
	$("#resto6").text(resto6);
	
	document.getElementById("pic1").src= pic1;
	document.getElementById("pic2").src= pic2;
	document.getElementById("pic3").src= pic3;
	document.getElementById("pic4").src= pic4;
	document.getElementById("pic5").src= pic5;
	document.getElementById("pic6").src= pic6;
	
	
	if(sessionStorage.getItem('star')!=null){
		$(".star").attr("src", "star"+sessionStorage.getItem('star')+".PNG");
		$("#h5").text("Restaurants with spice rate "+sessionStorage.getItem('star'))
	}
	if(sessionStorage.getItem("location") != "")
		$(".address").text("Address: "+sessionStorage.getItem("location"));
});
function getRandomInt(max){
	return Math.floor(Math.random()*(max));	
}

