$(document).ready(function(){
	'use strict';
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
    });
	
	$("#navprofile").click(function(){
        $("#profile").show();
		$("#home, #faq, #search, #categories, #tvshow, #settings").hide();
		$("#navprofile").addClass("element-active");
		$("#navhome, #navsearch, #navcategory, #settings-icon").removeClass("element-active");
	});
	
	$(".fa-cog").click(function(){
		$("#settings").fadeIn();
		$("#settings-icon").toggleClass("fa-times fa-cog");
	});
	
	$(".fa-times").click(function(){
		$("#settings").hide();
		$("#settings-icon").toggleClass("fa-cog fa-times");
	});
});