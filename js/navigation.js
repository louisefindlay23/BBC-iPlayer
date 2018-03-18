// JavaScript Document

$(document).ready(function(){
	'use strict';
    $("#navhome").click(function(){
        $("#home").show();
		$("#tvshow").hide();
		$("#categories").hide();
		$("#search").hide();
		$("#profile").hide();
		$("#faq").hide();
		$("#navhome").addClass("element-active");
		$("#navcategory, #navsearch, #navprofile, #settings-icon").removeClass("element-active");
    });
	
	$("#navcategory").click(function(){
        $("#categories").show();
		$("#home").hide();
		$("#tvshow").hide();
		$("#search").hide();
		$("#profile").hide();
		$("#faq").hide();
		$("#navcategory").addClass("element-active");
		$("#navhome, #navsearch, #navprofile, #settings-icon").removeClass("element-active");
    });
	
	$("#navsearch").click(function(){
        $("#search").show();
		$("#home").hide();
		$("#tvshow").hide();
		$("#categories").hide();
		$("#profile").hide();
		$("#faq").hide();
		$("#navsearch").addClass("element-active");
		$("#navhome, #navcategory, #navprofile, #settings-icon").removeClass("element-active");
    });
	
	$("#navprofile").click(function(){
        $("#profile").show();
		$("#home").hide();
		$("#tvshow").hide();
		$("#categories").hide();
		$("#search").hide();
		$("#faq").hide();
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