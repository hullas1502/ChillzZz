$( document ).ready(function() {
	$(".star").attr("src", "star"+sessionStorage.getItem('star')+".PNG");
	$("#h5").text("Restaurants with spice rate "+sessionStorage.getItem('star'))
	if(sessionStorage.getItem("location") != "")
		$(".address").text("Address: "+sessionStorage.getItem("location"));
});

