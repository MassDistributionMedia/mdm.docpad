document.addEventListener("DOMContentLoaded", function(event){

	var mainMenu = document.getElementById('main-menu');
	
	function onScrolledTop(){
		// AdobeEdge.getComposition("docpad-keys-animation").getStage().play("start");
		mainMenu.classList.add("main-menu-scrolled");
	}
	
	// document.documentElement.className += " foo";
	// document.documentElementstyle.borderBottom = '7px solid #005EAC';
	
	window.onscroll = function(){
		document.documentElement.scrollTop || document.body.scrollTop > 366 ?
			onScrolledTop()
			: mainMenu.classList.remove("main-menu-scrolled");
	};

});