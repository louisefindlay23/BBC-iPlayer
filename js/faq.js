$(document).ready(function(){
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
});