// JavaScript Document

$(document).ready(function(){
	'use strict';
    $("#navhome").click(function(){
        $("#home").show();
		$(".hero").show();
		$(".carousel").show();
    });
	
	$("#navcategory").click(function(){
        $("#categories").show();
    });
	
	$("#navsearch").click(function(){
        $("#search").show();
    });
	
	$("#navprofile").click(function(){
        $("#profile").show();
    });
	
	// Add more jquery
});