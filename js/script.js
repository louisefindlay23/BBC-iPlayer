$(document).ready(function () {

	// C A R O U S E L
	$('.carousel').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: true,
	});


	// D R O P D O W N

	function filterFunction() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("searchbox");
		filter = input.value.toUpperCase();
		div = document.getElementById("myDropdown");
		a = div.getElementsByTagName("p");
		for (i = 0; i < a.length; i++) {
			if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
				a[i].style.display = "";
			} else {
				a[i].style.display = "none";
			}
		}
	}

$("input").keydown(filterFunction);


	// F A Q
	$("#q1").click(function(){
		$("#a1").slideToggle();
		$("#q1").toggleClass("element-active");
		$("#s1").toggleClass("fa-caret-right fa-caret-down");
	});
	$("#q2").click(function(){
		$("#a2").slideToggle();
		$("#q2").toggleClass("element-active");
		$("#s2").toggleClass("fa-caret-right fa-caret-down");
	});
	$("#q3").click(function(){
		$("#a3").slideToggle();
		$("#q3").toggleClass("element-active");
		$("#s3").toggleClass("fa-caret-right fa-caret-down");
	});
	$("#q4").click(function(){
		$("#a4").slideToggle();
		$("#q4").toggleClass("element-active");
		$("#s4").toggleClass("fa-caret-right fa-caret-down");
	});


	// H E A D E R
	var myElement = document.querySelector("header");
	var headroom = new Headroom(myElement, {
		"offset": 65,
		"tolerance": 3
	});
	headroom.init();


	// N A V I G A T I O N
	$("#profile").hide();
	$("#home").show();
	$("#categories").hide();

	$("#navhome").click(function(){
		$("#home").show();
		$("#faq, #search, #categories, #settings, #profile, #tvshow").hide();
		$("#navhome").addClass("element-active");
		$("#navcategory, #navsearch, #navprofile, #settings-icon").removeClass("element-active");
	});

	$("#navcategory").click(function(){
		$("#categories").show();
		$("#home, #faq, #search, #settings, #profile, #tvshow").hide();
		$("#navcategory").addClass("element-active");
		$("#navhome, #navsearch, #navprofile, #settings-icon").removeClass("element-active");
	});

	$("#navsearch").click(function(){
		$("#search").show();
		$("#home, #faq, #categories, #settings, #profile, #tvshow").hide();
		$("#navsearch").addClass("element-active");
		$("#navhome, #navcategory, #navprofile, #settings-icon").removeClass("element-active");
		$(".fa-times, .dropdown, .row, #clearall").hide();
	});

	$("#navprofile").click(function(){
		$("#profile").show();
		$("#home, #faq, #search, #categories, #settings, #tvshow").hide();
		$("#navprofile").addClass("element-active");
		$("#navhome, #navsearch, #navcategory, #settings-icon").removeClass("element-active");
	});

	$("#settings-icon").click(function(){
		$("#settings").fadeToggle("fast");
		$("#settings-icon").toggleClass("fa-times fa-cog");
	});

	$('.faq').click(function () {
		$('#faq-container').slideToggle();
	});


	// P R O F I L E  P I C T U R E
	$("#trigger-zoom").click(function () {
		$("#picture-zoom").fadeIn("fast");
	});
	$("#picture-zoom").click(function() {
		$("#picture-zoom").fadeOut("fast");
	});


	// S E A R C H
	// Search history
	$(".result").click(function(){
		// If statement querying whether the first row is empty or not
		if ($('#result1 > p').is(':empty')) {
			var result1 = $(this).text();
			$("#result1 p").text(result1);
			$("#row1").show();
			$("#clearall").fadeIn();
		}
		// If not check the second row
		else if ($('#result2 > p').is(':empty')) {
			var result2 = $(this).text();
			$("#result2 p").text(result2);
			$("#row2").show();
		}
		// If not check the third row
		else if ($('#result3 > p').is(':empty')) {

			var result3 = $(this).text();
			$("#result3 p").text(result3);
			$("#row3").show();
		}
		// If not check the fourth row
		else if ($('#result4 > p').is(':empty')) {
			var result4 = $(this).text();
			$("#result4 p").text(result4);
			$("#row4").show();
		}
	});

	// Clear all searches
	$("#clearall").click(function(){
		$("#clearall").hide();
		$(".row").hide();
		$("#result1 p").text("");
	});


	// Clear first search
	$("#close1").click(function(){
		$("#result1 p").text("");
		$("#row1").fadeOut();
	});


	// Clear second search
	$("#close2").click(function(){
		$("#row2").fadeOut();
	});

	// Clear third search

	$("#close3").click(function(){
		$("#row3").fadeOut();
	});

	// Clear fourth search
	$("#close4").click(function(){
		$("#row4").fadeOut();
	});

	// Clear fifth search
	$("#close5").click(function(){
		$("#row5").fadeOut();
	});

	// Clear sixth search
	$("#close6").click(function(){
		$("#row6").fadeOut();
	});

	// Clear seventh search
	$("#close7").click(function(){
		$("#row7").fadeOut();
	});

	$(".close-search").click(function(){
		$(".dropdown, .close-search").hide();
		$("#history").show();
		$("#searchbox").val("");
		$("#searchbox").attr("placeholder", "S E A R C H");
	});

	$("input").click(function(){
		$(".dropdown, .dropdown-content, .close-search").show();
		$("#history").hide();
	});
	

	// T V  S H O W

	initTVShow('americandad', americandad, 1433);
	clickTVShow('americandad');
	
	initTVShow('blackmirror', blackmirror, 42009);
	clickTVShow('blackmirror');

	initTVShow('brooklynninenine', brooklynninenine, 48891);
	clickTVShow('brooklynninenine');

	initTVShow('westworld', westworld, 63247);
	clickTVShow('westworld');

	initTVShow('houseofcards', houseofcards, 1425);
	clickTVShow('houseofcards');

	initTVShow('sense8', sense8, 61664);
	clickTVShow('sense8');

	initTVShow('theblacklist', theblacklist, 46952);
	clickTVShow('theblacklist');

	initTVShow('daredevil', daredevil, 61889);
	clickTVShow('daredevil');

	initTVShow('breakingbad', breakingbad, 1396);
	clickTVShow('breakingbad');

	initTVShow('safe', safe, 72792);
	clickTVShow('safe');

	initTVShow('americanhorrorstory', americanhorrorstory, 1413);
	clickTVShow('americanhorrorstory');

	initTVShow('arrow', arrow, 1412);
	clickTVShow('arrow');

	initTVShow('bigmouth', bigmouth, 74204);
	clickTVShow('bigmouth');

	initTVShow('bobsburgers', bobsburgers, 32726);
	clickTVShow('bobsburgers');

	initTVShow('designatedsurvivor', designatedsurvivor, 67026);
	clickTVShow('designatedsurvivor');

	initTVShow('dexter', dexter, 1405);
	clickTVShow('dexter');

	initTVShow('thelastmanonearth', thelastmanonearth, 61888);
	clickTVShow('thelastmanonearth');

	initTVShow('futurama', futurama, 615);
	clickTVShow('futurama');

	initTVShow('gotham', gotham, 60708);
	clickTVShow('gotham');

	initTVShow('greysanatomy', greysanatomy, 1416);
	clickTVShow('greysanatomy');

	initTVShow('homeland', homeland, 1407);
	clickTVShow('homeland');

	initTVShow('gameofthrones', gameofthrones, 1399);
	clickTVShow('gameofthrones');
	
	initTVShow('mindhunter', mindhunter, 67744);
	clickTVShow('mindhunter');
	
	initTVShow('moneyheist', moneyheist, 71446);
	clickTVShow('moneyheist');
	
	initTVShow('mrrobot', mrrobot, 62560);
	clickTVShow('mrrobot');
	
	initTVShow('parksandrecreation', parksandrecreation, 8592);
	clickTVShow('parksandrecreation');
	
	initTVShow('personofinterest', personofinterest, 1411);
	clickTVShow('personofinterest');
	
	initTVShow('rickandmorty', rickandmorty, 60625);
	clickTVShow('rickandmorty');
		
	initTVShow('shameless', shameless, 34307);
	clickTVShow('shameless');

	initTVShow('siliconvalley', siliconvalley, 60573);
	clickTVShow('siliconvalley');

	initTVShow('sonsofanarchy', sonsofanarchy, 1409);
	clickTVShow('sonsofanarchy');

	initTVShow('strangerthings', strangerthings, 66732);
	clickTVShow('strangerthings');

	initTVShow('thehundred', thehundred, 48866);
	clickTVShow('thehundred');

	initTVShow('thementalist', thementalist, 5920);
	clickTVShow('thementalist');

	initTVShow('thewalkingdead', thewalkingdead, 1402);
	clickTVShow('thewalkingdead');

});
