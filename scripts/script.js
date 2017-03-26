(function(){
	document.addEventListener("DOMContentLoaded", function(event){
	
		var mainMenu = document.getElementById('main-menu');
		
		function onScrolledTop(){
			mainMenu.classList.add("main-menu-scrolled");
		}
		
		window.onscroll = function(){
			document.documentElement.scrollTop || document.body.scrollTop > 13 ?
				onScrolledTop()
				: mainMenu.classList.remove("main-menu-scrolled");
		};
	
	});
})();
