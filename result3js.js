$( document ).ready(function() {
	if(sessionStorage.getItem('star')!=null)
		$(".star").attr("src", "star"+sessionStorage.getItem('star')+".PNG");
	$("#resto_name").text(sessionStorage.getItem('name'));
	$("#search_header").text("Restaurant \""+sessionStorage.getItem('name')+"\"");
	if(sessionStorage.getItem("location") != "")
		$(".address").text("Address: "+sessionStorage.getItem("location"));
});

