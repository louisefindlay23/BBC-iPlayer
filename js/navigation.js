// JavaScript Document

$(document).ready(function(){
	'use strict';
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
	
	$("#settings-icon").click(function(){
        $("#settings").show();
		$("#home, #profile, #tvshow, #categories, #search, #faq").hide();
		$("#settings-icon").addClass("element-active");
		$("#navhome, #navsearch, #navcategory, #navprofile").removeClass("element-active");
    });
	
	// Add more jquery
});