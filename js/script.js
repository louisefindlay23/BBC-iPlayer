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
	
	$("#navhome").click(function(){
		$("#home").show();
		$("#faq, #search, #categories, #tvshow, #settings, #profile").hide();
		$("#navhome").addClass("element-active");
		$("#navcategory, #navsearch, #navprofile, #settings-icon").removeClass("element-active");
	});
	
	$("#navcategory").click(function(){
		$("#categories").show();
		$("#home, #faq, #search, #tvshow, #settings, #profile").hide();
		$("#navcategory").addClass("element-active");
		$("#navhome, #navsearch, #navprofile, #settings-icon").removeClass("element-active");
	});
	
	$("#navsearch").click(function(){
		$("#search").show();
		$("#home, #faq, #categories, #tvshow, #settings, #profile").hide();
		$("#navsearch").addClass("element-active");
		$("#navhome, #navcategory, #navprofile, #settings-icon").removeClass("element-active");
		$(".fa-times").hide();
		$(".dropdown").hide();
		$(".row").hide();
		$("#clearall").hide();
	});
	
	$("#navprofile").click(function(){
		$("#profile").show();
		$("#home, #faq, #search, #categories, #tvshow, #settings").hide();
		$("#navprofile").addClass("element-active");
		$("#navhome, #navsearch, #navcategory, #settings-icon").removeClass("element-active");
	});
	
	$("#settings-icon").click(function(){
		$("#settings").fadeToggle("fast");
		$("#settings-icon").toggleClass("fa-times fa-cog");
	});
	
	
	// P R O F I L  P I C T U R E
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
	
	// T V  S H O W

	var elementsToHide = "#faq, #search, #categories, #settings, #profile, #home";
	
	// Black Mirror
	$('.blackmirror').one("click", function () { 
		var blackmirror_id = 42009;
		var blackmirror_hid = 'blackmirror';
		create_tvshow(blackmirror_id, blackmirror_hid);
		$("#blackmirror, #tvshow").show();
		$(elementsToHide + ", #americandad, #brooklynninenine").hide();
		$("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
	});
	
	$('.blackmirror').click(function (e) { 
		e.preventDefault();
		$("#blackmirror, #tvshow").show();
		$(elementsToHide + ", #americandad, #brooklynninenine").hide();
		$("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
	});
	
	// American Dad
	$('.americandad').one("click", function () { 
		var americandad_id = 1433;
		var americandad_hid = 'americandad';
		create_tvshow(americandad_id, americandad_hid);
		$("#americandad, #tvshow").show();
		$(elementsToHide + ", #blackmirror, #brooklynninenine").hide();
		$("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
		$('.tvshow:nth-child(3)').show();
	});
	
	$('.americandad').click(function (e) { 
		e.preventDefault();
		$("#americandad, #tvshow").show();
		$(elementsToHide + ", #blackmirror, #brooklynninenine").hide();
		$("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
	});

	// Brooklyn Nine-Nine
	$('.brooklynninenine').one("click", function () { 
		var brooklynninenine_id = 48891;
		var brooklynninenine_hid = 'brooklynninenine';
		create_tvshow(brooklynninenine_id, brooklynninenine_hid);
		$("#brooklynninenine, #tvshow").show();
		$(elementsToHide + ", #blackmirror, #americandad").hide();
		$("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
	});
	
	$('.brooklynninenine').click(function (e) { 
		e.preventDefault();
		$("#brooklynninenine, #tvshow").show();
		$(elementsToHide + ", #blackmirror, #americandad").hide();
		$("#navcategory, #navsearch, #navprofile, #settings-icon, #navhome").removeClass("element-active");
	});
	
		
	$('.season-button').click(function (e) { 
		e.preventDefault();
		$('.season-dropdown').slideToggle();
	});	
	
	// var sense8_id = 61664;
	// var sense8_hid = 'sense8';
	// create_tvshow(sense8_id, sense8_hid);
	
	// var westworld_id = 63247;
	// var westworld_hid = 'westworld';
	// create_tvshow(westworld_id, westworld_hid);
	
	// var americandad_id = 1433;
	// var americandad_hid = 'americandad';
	// create_tvshow(americandad_id, americandad_hid);
	// 
	// var theblacklist_id = 46952;
	// var theblacklist_hid = 'theblacklist';
	// create_tvshow(theblacklist_id, theblacklist_hid);
	
});
