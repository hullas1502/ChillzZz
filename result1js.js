$( document ).ready(function() {
	var resto_pairs = pairs1;
	var randnum1 = getRandomInt(pairs1.length);
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
    var resto1 = pairs1[randnum1].resto;
	var resto2 = pairs1[randnum2].resto;
	var resto3 = pairs1[randnum3].resto;
	var resto4 = pairs1[randnum4].resto;
	var resto5 = pairs1[randnum5].resto;
	var resto6 = pairs1[randnum6].resto;
	
	var pic1 = pairs1[randnum1].pic;
	var pic2 = pairs1[randnum2].pic;
	var pic3 = pairs1[randnum3].pic;
	var pic4 = pairs1[randnum4].pic;
	var pic5 = pairs1[randnum5].pic;
	var pic6 = pairs1[randnum6].pic;
	
	
	
	$("#resto11").text(resto1);
	$("#resto21").text(resto2);
	$("#resto31").text(resto3);
	$("#resto41").text(resto4);
	$("#resto51").text(resto5);
	$("#resto61").text(resto6);
	
	document.getElementById("pic11").src= pic1;
	document.getElementById("pic21").src= pic2;
	document.getElementById("pic31").src= pic3;
	document.getElementById("pic41").src= pic4;
	document.getElementById("pic51").src= pic5;
	document.getElementById("pic61").src= pic6;
	
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

