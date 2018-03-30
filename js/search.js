// JavaScript Document

$(document).ready(function(){
	
	"use strict";
	
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
	
	$(".fa-times").click(function(){
		$(".dropdown").hide();
		$("#history").show();
		$("#searchbox").val("");
		$("#searchbox").attr("placeholder", "S E A R C H");
		$(".fa-times").hide();
    });
	
	$("input").click(function(){
		$(".dropdown").show();
		$(".dropdown-content").show();
		$(".fa-times").show();
		$("#history").hide();
    });
	
});