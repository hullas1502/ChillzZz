$( document ).ready(function() {
	var resto_pairs = pairs;
	var randnum1 = getRandomInt(pairs.length);
	var randnum2 = getRandomInt(pairs.length);
	var randnum3 = getRandomInt(pairs.length);
	var randnum4 = getRandomInt(pairs.length);
	var randnum5 = getRandomInt(pairs.length);
	var randnum6 = getRandomInt(pairs.length);
	
    var resto1 = pairs[randnum1].resto;
	var resto2 = pairs[randnum2].resto;
	var resto3 = pairs[randnum3].resto;
	var resto4 = pairs[randnum4].resto;
	var resto5 = pairs[randnum5].resto;
	var resto6 = pairs[randnum6].resto;
	
	$("#resto1").text(resto1);
	$("#resto2").text(resto2);
	$("#resto3").text(resto3);
	$("#resto4").text(resto4);
	$("#resto5").text(resto5);
	$("#resto6").text(resto6);
	
	$("input").value = "";
	
	$("#search").click(function(){
		if(document.getElementById("resto").value == ""){
			document.location.href = 'result.html';
			
		}

	    else{
			document.location.href = 'result3.html';
			sessionStorage.setItem('name', document.getElementById("resto").value);
			
		}
		sessionStorage.setItem("location", $("#restoplace").prop("disabled") ? "" : $("#restoplace").val());
		document.getElementById("checkBox").checked = false;
		$("#resto").val("");
		$("#restoplace").val("");
		document.getElementById("field1_star"+sessionStorage.getItem('star')).checked = false;


    });

});
function getRandomInt(max){
	return Math.floor(Math.random()*(max));	
}
$('input[name="rating1"]').change(function(){
 	sessionStorage.setItem('star', this.value);
	
});

$("#checkBox").change(function(){
	$("#restoplace").attr("disabled", this.checked);
});

$("#username").html(sessionStorage.getItem("username"));