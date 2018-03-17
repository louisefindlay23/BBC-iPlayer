$(document).ready(function () {
    $("#trigger-zoom").click(function () { 
        $("#picture-zoom").fadeIn("fast");
    });
    $("#picture-zoom").click(function() { 
        $("#picture-zoom").fadeOut("fast");
    });
});