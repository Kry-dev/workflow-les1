$(document).ready(function() {
	
	// Проверка наличия JS, jQuery.
	console.log("js works");
	if($) {
		console.log("jQuery works");
	}
	
	// toggle функция открытия/закрытия меню.
	var openCloseMenu = function() {
		$(".mnu-button-wrap").click(function() {
			$(".arrow-up").toggleClass("hide");
			$(".nav-mnu-head").toggleClass("hide");
		});
	};

	openCloseMenu();

});	
