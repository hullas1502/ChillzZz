$( document ).ready(function() {
	
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

$('input[name="rating1"]').change(function(){
 	sessionStorage.setItem('star', this.value);
	
});

$("#checkBox").change(function(){
	$("#restoplace").attr("disabled", this.checked);
});