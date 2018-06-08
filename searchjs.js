$( document ).ready(function() {
	
	
	$("input").value = "";
	
		

		
	
	$("#search").click(function(){
		if(document.getElementById("resto").value == ""){
			if((document.getElementById( "field1_star5").checked == true )||(document.getElementById( "field1_star4").checked == true )||(document.getElementById( "field1_star3").checked == true )){
			
				document.location.href = 'result.html';
			}
			else{
				document.location.href = 'result2.html';
			}
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
	
	$("#search1").click(function(){
		if((document.getElementById("resto").value == "")){
			if((document.getElementById("field1_star5").checked == true )||(document.getElementById( "field1_star4").checked == true )||(document.getElementById( "field1_star3").checked == true )){
			
				document.location.href = 'result1.html';
			}
			else{
				document.location.href = 'result.html';
			}

			
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