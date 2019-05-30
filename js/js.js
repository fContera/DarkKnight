var $mainNav = $(".mainNav"),
	$hero = $(".hero"),
	$icoArrow = $(".hero .arrow"),
	aLogoPage = $(".logoIntro"),
	spans = $(".Reveal_row span"),
	$sectionDarkNight = $(".darkNight"),
	menu = $(".mainHeader ul"),
	menuBurguer = $(".mainHeader .burger"),
	icoBurger = $(".burger use"),
	menuOpen = true,
	liSections = $(".sections li"),
	sectionPerson = $(".personajes");


//CUANDO PULSAS ICONO FLECHA
/*$icoArrow.on("click", scrollearHero);*/

function scrollearHero(){
	$("#logo path").css("fill","white");
	$hero.css("height", "30vh").css("marginTop","100px");
	var altBegins = $(".batmanBegins").offset().top - $(".mainHeader .mainNav").height()-50;
	$("html,body").animate({scrollTop:altBegins},1500);
	$(".hero h1:nth-of-type(2)").css("top", "57%").css("font-size","1.3rem");
	$(".hero h1:nth-of-type(1)").css("top", "52%").css("font-size","1.2rem");
	$icoArrow.css("display", "none");
	$(".hero div").css("display", "block").css("opacity", "1");
	$(".wrapperHero").css("transform", "translateY(-80%)")
}
	
//CUANDO HACES SCROLL
$(window).on("scroll", scrolleando);

var spans = $(".Reveal_row .Reveal_item").toArray();
var spansBegins = $(".batmanBegins .Reveal_row .Reveal_item").toArray();
var primeraVez = true ;
var spansBegins = $(".batmanBegins .Reveal_row .Reveal_item"),
	filas = $(".Reveal_row").toArray(), 
	mitadAlturaVentana =  $(window).height()/1.5;
var alturaParaIconoFicha,
	alturaParaIconoPersonajes,
	alturaParaIconoTrailer ;
var controlMenu = false,
	controlMenu2 = false,
	controlMenu3 = false ;
function scrolleando(){

	/************ SCROLL MENU PELICULA *************************/
	if($(window).scrollTop() + $mainNav.height() > $mainNav.height() + $(".portada").height() + $(".sections").height() 
		&& $(".sections").width() < 714){
		$(".sections li span").css("display", "none");
		$(".sections ul li").addClass("menufijo");
		$(".sections ul").addClass("aFixed");
		$(".sections .ico").css("width","40px").css("height","40px")
		console.log("ancho menor");
		//$(".trailer").css("margin", "450px auto 0 auto");
		controlMenu = true ;
	}else if(controlMenu){
		console.log("ancho menor quitar");
		$(".sections li span").css("display", "inline-block");
		$(".sections ul li").removeClass("menufijo");
		$(".sections ul").removeClass("aFixed");
		
		if($(".sections ul").width() < 353){
			$(".sections .ico").css("width","30px").css("height","30px");
		}
		
		controlMenu = false ;
	}
	if($(window).scrollTop() + $mainNav.height()  > $(".portada").height() + $(".sections").height() 
		&& $(".sections").width() >= 714 
		&& $(".sections").width() < 823){
		//$(".sections li span").css("display", "none");
		//$(".sections ul li").addClass("menufijo");
		$(".sections ul").addClass("aFixed");
		$(".sections .ico").css("width","40px").css("height","40px");
		console.log("ancho mayor segundo");
		console.log($(".sections").width());
		//$(".trailer").css("margin", "450px auto 0 auto");
		controlMenu2 = true ;
	}else if(controlMenu2){
		//$(".sections li span").css("display", "inline-block");
		//$(".sections ul li").removeClass("menufijo");
		$(".sections ul").removeClass("aFixed");
		
		if($(".sections ul").width() < 353){
			$(".sections .ico").css("width","30px").css("height","30px");
		}
		
		controlMenu2 = false ;
	}
	if($(window).scrollTop() > $(".portada").height()
		&& $(".sections").width() >= 823){
		//$(".sections li span").css("display", "none");
		//$(".sections ul li").addClass("menufijo");
		$(".sections ul").addClass("aFixed");
		$(".sections .ico").css("width","40px").css("height","40px");
		console.log("ancho mayor tercero");
		//$(".trailer").css("margin", "450px auto 0 auto");
		controlMenu3 = true ;
	}else if(controlMenu3){
		//$(".sections li span").css("display", "inline-block");
		//$(".sections ul li").removeClass("menufijo");
		$(".sections ul").removeClass("aFixed");
		
		if($(".sections ul").width() < 353){
			$(".sections .ico").css("width","30px").css("height","30px");
		}
		
		controlMenu3 = false ;
	}

	/*alturaParaIconoTrailer = $(".trailer").offset().top + $(".trailer").height() ;
	alturaParaIconoFicha = $(".ficha").offset().top + $(".ficha").height() ;
	alturaParaIconoPersonajes = $(".personajes").offset().top + $(".personajes").height();
	if($(window).scrollTop() + 180 > $(".trailer").offset().top && $(window).scrollTop() + 180 < alturaParaIconoTrailer ){

		$(".sections ul li:nth-child(1) .ico").addClass("icoSituado");
	}
	else{
		$(".sections ul li:nth-child(1) .ico").removeClass("icoSituado");
	}
	if($(window).scrollTop() + 180 > $(".ficha").offset().top && $(window).scrollTop() + 180 < alturaParaIconoFicha ){

		$(".sections ul li:nth-child(2) .ico").addClass("icoSituado");
	}
	else{
		$(".sections ul li:nth-child(2) .ico").removeClass("icoSituado");
	}
	if($(window).scrollTop() + 180 > $(".personajes").offset().top && $(window).scrollTop() + 180 < alturaParaIconoPersonajes ){

		$(".sections ul li:nth-child(3) .ico").addClass("icoSituado");
	}
	else{
		$(".sections ul li:nth-child(3) .ico").removeClass("icoSituado");
	}*/


	/*if($(window).scrollTop() > 0 && primeraVez){
		$(".symbolBatman").css("display","none");
		$(".mainHeader .mainNav").css("top","0%");
		$hero.css("height", "30vh").css("marginTop","100px");
		$(".hero h1:nth-of-type(1)").css("top", "80%");
		$(".hero h1:nth-of-type(2)").css("top", "88%");
		$(".hero .nolan").css("top", "96%");
		$(".arrow").css("display", "none");
		$(".wrapperHero").css("transform", "translateY(-80%)");
		primeraVez = false ;		
	}*/

	for(i = 0 ; i< filas.length; i++){
		console.log("entra");
		if($(window).scrollTop() + mitadAlturaVentana > $(filas[i]).offset().top){	
			var time = 5 ;
			var numhijos = $(filas[i]).children().length;
			for (var j = 0; j < numhijos; j++) {
				window.setTimeout("efects("+j+","+i+")",time)
				time += 5 ;
			}
		}
	}
	
}
	
function efects(i, row){
	$(filas[row]).children().eq(i).addClass("Reveal_animate")
}



menuBurguer.on("click", desplegarMenu);

console.log(menuBurguer);
function desplegarMenu(){
	
	if(menuOpen){
		icoBurger.attr("xlink:href","#close");
		menu.toggleClass("desplegar");
		menuOpen = false ;
	}
	else{
		icoBurger.attr("xlink:href","#burger");
		menu.toggleClass("desplegar");
		menuOpen = true ;
	}

}



/*if($(window).width()>764){
		$(".darkNightRises .Reveal_row .salto").css("display", "none");
	}
else{
		$(".darkNightRises .Reveal_row .salto").css("display", "block");
	}
	if($(window).width()>1000){
		$(".darkNight .Reveal_row .salto").css("display", "none");
	}
	else{
		$(".darkNight .Reveal_row .salto").css("display", "block");
	}
/*var $anchoVentana,
	margin ;*/
	if($(window).width()>1081){
		$(".darkNight .salto").css("display", "none");
		$(".darkNight .espacio").css("margin-left", "30px");
	}else{
		$(".darkNight .salto").css("display", "block");
		$(".darkNight .espacio").css("margin-left", "0");
		}	
$(window).resize(function(){
	if($(window).width()>1081){
		$(".darkNight .salto").css("display", "none");
		$(".darkNight .espacio").css("margin-left", "30px");
	}else{
		$(".darkNight .salto").css("display", "block");
		$(".darkNight .espacio").css("margin-left", "0");
		}	
	/*$anchoVentana = $(window).width();
	console.log("anchoVentana" + $anchoVentana)
	if( $anchoVentana > 345){
		console.log("entra");
		margin = 95 + ($anchoVentana - 345) ;
		console.log(margin);
		$(".darkNight .responsive").css("margin-left", margin);
		$(".darkNight p").css("margin-left", margin)
	}*/
	/*if($anchoVentana > 764){
		$(".darkNightRises .Reveal_row .salto").css("display", "none");
	}
	else{
		$(".darkNightRises .Reveal_row .salto").css("display", "block");
	}
	if($anchoVentana > 1000){
		$(".darkNight .Reveal_row .salto").css("display", "none");
	}
	else{
		$(".darkNight .Reveal_row .salto").css("display", "block");
	}*/
})
/*function scrolleando(){
	var prueba = $(window).scrollTop() + 150 ;
	if(prueba >= $(".batmanBegins").offset().top && prueba < $(".darkNight").offset().top){
	var num = $(".batmanBegins .Reveal_row .Reveal_item").length;
	console.log(num);
	var time = 20 ;

		for (var i = 0; i < num; i++) {
			window.setTimeout("efects("+i+")",time)
			time += 20 ;
		}
	}
	else if(prueba >= $(".darkNight").offset().top ){

	var num = $(".darkNight .Reveal_row .Reveal_item").length;
	console.log(num);
	var time = 20 ;

		for (var i = 0; i < num; i++) {
			window.setTimeout("efects("+i+")",time)
			time += 20 ;
		}
	}

}

function efects(n){
	spans.eq(n).addClass("Reveal_animate")
}*/


$(".music .playlist ul li").on("click", cancion);

function cancion(){
	$(".music .playlist .seleccionada").removeClass("seleccionada")
	$(this).addClass("seleccionada") ;
	//console.log($(this).find("audio"));
	
	audio = $(this).find("audio");
	reproducir();
}



$(".music .play").on("click", reproducirPlay);
var PlayPause = true ;
function reproducirPlay(){
	if(PlayPause){
		var cancion = audio ;
		$(".music .play use").attr("xlink:href","#pause");
		audio.attr("id", "prueba");
		cancion[0].play();
		duration = audio[0].duration ;
		music = document.getElementById('prueba');
		timeSong();
		PlayPause = false ;
		primerAudio = false ;
	}
	else{
		var cancion = audio ;
		$(".music .play use").attr("xlink:href","#play");
		audio.attr("id", "prueba");
		cancion[0].pause();
		duration = audio[0].duration ;
		PlayPause = true ;
	}
}

$(".music .stop").on("click", reproducirStop);

function reproducirStop(){
	anterior[0].load() ;
	$(".music .play use").attr("xlink:href","#play");
}


var audio = $(".music .playlist .seleccionada").find("audio"),/* la funcion cancion mete la selecionada y reproducir la coge de esta variable global */
	primerAudio = true,
	anterior = audio,
	music,
	duration,
	cancion ; 

function reproducir(){
	

	//var posicion = $(".music ul").find(".posicion").index();
	//audio = $(".music ul li").eq(posicion).find("audio") ;
	if(primerAudio){
		cancion = audio ;
		$(".music .play use").attr("xlink:href","#pause");
		audio.attr("id", "prueba");
		console.log(cancion[0]);
		cancion[0].play();
		duration = audio[0].duration ;
		anterior = cancion ;
		primerAudio = false ;
		console.log("carga" + cancion[0])
	}
	else{
		$(".music .play use").attr("xlink:href","#pause");
		console.log("para" + anterior[0]);
		anterior[0].load();
		
		audio.attr("id", "prueba");
		cancion  = audio ;
		cancion[0].play();
		duration = cancion[0].duration ;
		anterior = cancion ;
	}

	music = document.getElementById('prueba');
	//console.log(audio);
	timeSong();
	

}

function timeSong(){
	
	console.log("localizando audio" + music);
	// id for audio element // Duration of audio clip, calculated here for embedding purposes
	var pButton = document.getElementById('pButton'); // play button
	var playhead = document.getElementById('playhead'); // playhead
	var timeline = document.getElementById('timeline'); // timeline
	// timeline width adjusted for playhead
	var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
	// timeupdate event listener
	music.addEventListener("timeupdate", timeUpdate, false);
	// makes timeline clickable
	timeline.addEventListener("click", function(event) {
	    moveplayhead(event);
	    music.currentTime = duration * clickPercent(event);
	}, false);
	// returns click as decimal (.77) of the total timelineWidth
	function clickPercent(event) {
	    return (event.clientX - getPosition(timeline)) / timelineWidth;
	}
	// makes playhead draggable
	playhead.addEventListener('mousedown', mouseDown, false);
	window.addEventListener('mouseup', mouseUp, false);
	// Boolean value so that audio position is updated only when the playhead is released
	var onplayhead = false;
	// mouseDown EventListener
	function mouseDown() {
	    onplayhead = true;
	    window.addEventListener('mousemove', moveplayhead, true);
	    music.removeEventListener('timeupdate', timeUpdate, false);
	}
	// mouseUp EventListener
	// getting input from all mouse clicks
	function mouseUp(event) {
	    if (onplayhead == true) {
	        moveplayhead(event);
	        window.removeEventListener('mousemove', moveplayhead, true);
	        // change current time
	        music.currentTime = duration * clickPercent(event);
	        music.addEventListener('timeupdate', timeUpdate, false);
	    }
	    onplayhead = false;
	}
	// mousemove EventListener
	// Moves playhead as user drags
	function moveplayhead(event) {
	    var newMargLeft = event.clientX - getPosition(timeline);

	    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
	        playhead.style.marginLeft = newMargLeft + "px";
	    }
	    if (newMargLeft < 0) {
	        playhead.style.marginLeft = "0px";
	    }
	    if (newMargLeft > timelineWidth) {
	        playhead.style.marginLeft = timelineWidth + "px";
	    }
	}
	// timeUpdate
	// Synchronizes playhead position with current point in audio
	function timeUpdate() {
	    var playPercent = timelineWidth * (music.currentTime / duration);
	    playhead.style.marginLeft = playPercent + "px";
	    if (music.currentTime == duration) {
	        pButton.className = "";
	        pButton.className = "play";
	    }
	}
	// Gets audio file duration
	music.addEventListener("canplaythrough", function() {
	    duration = music.duration;
	}, false);
	// getPosition
	// Returns elements left position relative to top-left of viewport
	function getPosition(el) {
	    return el.getBoundingClientRect().left;
	}
}



$(".diapo div").on("click", hacerGrande);

function hacerGrande(){
	console.log($(this).index());
	var posicion = $(this).index() ;

	console.log($(".diapo div").eq(posicion));
	$(this).find(".big_image").css("display","block").css("border","none").css("box-shadow", "none");
	$(".velo").css("display", "block");	
		//.find("big_image").css("display", "block");
}

$(".diapo .big_image div").on("click", cerrarFoto);

function cerrarFoto(){
	console.log("entra foto");
	$(this).find(".big_image").css("display","none");
	$(".velo").css("display", "none");	
		//.find("big_image").css("display", "block");
}