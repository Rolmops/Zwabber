$(document).ready(function(){
$('button').click(function() {
$(this).toggleClass('expanded').siblings('div').slideToggle();});
	 //Balk komt in beeld
		 var t = $("#spacer").offset().top - 500;

		$(document).scroll(function(){
			if($(this).scrollTop() > t)
			{
				$('.topbar-box').addClass("scrolled");
			}
		});

		//Balk komt uit beeld
		 var t = $("#spacer").offset().top;

		$(document).scroll(function(){
			if($(this).scrollTop() < t)
			{
				$('.topbar-box').removeClass("scrolled");

			}
		});
		

});

