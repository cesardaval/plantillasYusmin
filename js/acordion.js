	/*$(".accordion-titulo").click(function(){
			
		var contenido=$(this).next(".accordion-content");
				
			if(contenido.css("display")=="none"){ //open
				contenido.slideDown(250);
		$(this).addClass("open");
		}
			else{ //close
		contenido.slideUp(250);
		$(this).removeClass("open");
		}
	});*/
	$(document).ready(function(){
	$('.menu li:has(ul)').click(function(e){
		e.preventDefault();

		if ($(this).hasClass('activado')){
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		} else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();
		}
	});

	$('.btn-menu').click(function(){
		$('.contenedor-menu .menu').slideToggle();
	});

	$(window).resize(function(){
		if ($(document).width() > 450){
			$('.contenedor-menu .menu').css({'display' : 'block'});
		}

		if ($(document).width() < 450){
			$('.contenedor-menu .menu').css({'display' : 'none'});
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
		}
	});

	$('.menu li ul li a').click(function(){
		window.location.href = $(this).attr("href");
	});
});