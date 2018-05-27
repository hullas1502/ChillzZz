$( document ).ready(function() {
	if(sessionStorage.getItem('star')!=null){
		$(".star").attr("src", "star"+sessionStorage.getItem('star')+".PNG");
		$("#h5").text("Restaurants with spice rate "+sessionStorage.getItem('star'))
	}
	if(sessionStorage.getItem("location") != "")
		$(".address").text("Address: "+sessionStorage.getItem("location"));
});

