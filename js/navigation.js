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
    });
	
	$("#navcategory").click(function(){
        $("#categories").show();
		$("#home").hide();
		$("#tvshow").hide();
		$("#search").hide();
		$("#profile").hide();
		$("#faq").hide();
    });
	
	$("#navsearch").click(function(){
        $("#search").show();
		$("#home").hide();
		$("#tvshow").hide();
		$("#categories").hide();
		$("#profile").hide();
		$("#faq").hide();
    });
	
	$("#navprofile").click(function(){
        $("#profile").show();
		$("#home").hide();
		$("#tvshow").hide();
		$("#categories").hide();
		$("#search").hide();
		$("#faq").hide();
    });
	
	// Add more jquery
});