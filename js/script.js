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
		$("#history").show();
		
		if ($('#result1 > p').is(':empty')) {
			var result1 = $(this).text();
			$("#result1 p").text(result1);
			$("#row1, #close1").addClass("showimportant");
		}
		// If not check the second row
		else if ($('#result2 > p').is(':empty')) {
			var result2 = $(this).text();
			$("#result2 p").text(result2);
			$("#row2, #close2").addClass("showimportant");
			$("#clearall").addClass("showimportant");
		}
		// If not check the third row
		else if ($('#result3 > p').is(':empty')) {

			var result3 = $(this).text();
			$("#result3 p").text(result3);
			$("#row3, #close3").addClass("showimportant");
		}
		// If not check the fourth row
		else if ($('#result4 > p').is(':empty')) {
			var result4 = $(this).text();
			$("#result4 p").text(result4);
			$("#row4, #close4").addClass("showimportant");
		}
		
		// If not check the fifth row
		else if ($('#result5 > p').is(':empty')) {
			var result5 = $(this).text();
			$("#result5 p").text(result5);
			$("#row5, #close5").addClass("showimportant");
		}
		
		// If not check the sixth row
		else if ($('#result6 > p').is(':empty')) {
			var result6 = $(this).text();
			$("#result6 p").text(result6);
			$("#row6, #close6").addClass("showimportant");
		}
		
		// If not check the seventh row
		else if ($('#result7 > p').is(':empty')) {
			var result7 = $(this).text();
			$("#result7 p").text(result7);
			$("#row7, #close7").addClass("showimportant");
		}
	});

	// Clear all searches
	$("#clearall").click(function(){
		$(".row").removeClass("showimportant");
		$("#clearall").removeClass("showimportant");
		$("#result1 p, #result2 p, #result3 p, #result4 p, #result5 p, #result6 p, #result7 p").text("");
	});


	// Clear first search
	$("#close1").click(function(){
		$("#result1 p").text("");
		$("#row1, #close1").removeClass("showimportant");
	});


	// Clear second search
	$("#close2").click(function(){
		$("#result2 p").text("");
		$("#row2, #close2").removeClass("showimportant");
	});

	// Clear third search

	$("#close3").click(function(){
		$("#result3 p").text("");
		$("#row3, #close3").removeClass("showimportant");
	});

	// Clear fourth search
	$("#close4").click(function(){
		$("#result4 p").text("");
		$("#row4, #close4").removeClass("showimportant");
	});

	// Clear fifth search
	$("#close5").click(function(){
		$("#result5 p").text("");
		$("#row5, #close5").removeClass("showimportant");
	});

	// Clear sixth search
	$("#close6").click(function(){
		$("#result6 p").text("");
		$("#row6, #close6").removeClass("showimportant");
	});

	// Clear seventh search
	$("#close7").click(function(){
		$("#result7 p").text("");
		$("#row7, #close7").removeClass("showimportant");
	});

	$(".close-search").click(function(){
		$(".dropdown").hide();
		$("#history").show();
		$("#searchbox").val("");
		$("#searchbox").attr("placeholder", "S E A R C H");
		$(".close-search").hide();
	});

	$("input").click(function(){
		$(".dropdown").show();
		$(".dropdown-content").show();
		$(".close-search").show();
		$("#history").hide();
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
	
	initTVShow('blackmirror', blackmirror, 42009);

	initTVShow('brooklynninenine', brooklynninenine, 48891);

	initTVShow('westworld', westworld, 63247);

	initTVShow('houseofcards', houseofcards, 1425);

	initTVShow('sense8', sense8, 61664);

	initTVShow('theblacklist', theblacklist, 46952);

	initTVShow('daredevil', daredevil, 61889);

	initTVShow('breakingbad', breakingbad, 1396);

	initTVShow('safe', safe, 72792);

	initTVShow('americanhorrorstory', americanhorrorstory, 1413);

	initTVShow('arrow', arrow, 1412);

	initTVShow('bigmouth', bigmouth, 74204);

	initTVShow('bobsburgers', bobsburgers, 32726);

	initTVShow('designatedsurvivor', designatedsurvivor, 67026);

	initTVShow('dexter', dexter, 1405);

	initTVShow('thelastmanonearth', thelastmanonearth, 61888);

	initTVShow('futurama', futurama, 615);

	initTVShow('gotham', gotham, 60708);

	initTVShow('greysanatomy', greysanatomy, 1416);

	initTVShow('homeland', homeland, 1407);

	initTVShow('gameofthrones', gameofthrones, 1399);
	
	initTVShow('mindhunter', mindhunter, 67744);
	
	initTVShow('moneyheist', moneyheist, 71446);
	
	initTVShow('mrrobot', mrrobot, 62560);
	
	initTVShow('parksandrecreation', parksandrecreation, 8592);
	
	initTVShow('personofinterest', personofinterest, 1411);
	
	initTVShow('rickandmorty', rickandmorty, 60625);
		
	initTVShow('shameless', shameless, 34307);

	initTVShow('siliconvalley', siliconvalley, 60573);

	initTVShow('sonsofanarchy', sonsofanarchy, 1409);

	initTVShow('strangerthings', strangerthings, 66732);

	initTVShow('thehundred', thehundred, 48866);

	initTVShow('thementalist', thementalist, 5920);

	initTVShow('thewalkingdead', thewalkingdead, 1402);

	initTVShow('evilgenius', evilgenius, 79126);

});
