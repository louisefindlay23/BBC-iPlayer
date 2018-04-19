// JavaScript Document

$(document).ready(function(){
	"use strict";
	
	$("#seasons").click(function(){
		
		$(".season").slideToggle(150)({display:"block"});
		
	});
	
	$(".season-1").click(function(){
		
		$(".eps1").slideDown({display:"block"});
		
		$(".eps2").slideUp(100)({display:"none"});
		
	});
	
	$(".season-2").click(function(){
		
		$(".eps2").slideDown({display:"block"});
		
		$(".eps1").slideUp({display:"none"});
		
	});
	
});
