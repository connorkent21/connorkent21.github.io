// var backToTop = document.getElementById("btt");

// backToTop.addEventListener("click", function(){
// 	window.location.href = "#top";
// });

// backToTop.addEventListener("mouseover", function(){
// 	this.classList.add("hovered");
// });

// backToTop.addEventListener("mouseout", function(){
// 	this.classList.remove("hovered");
// });

window.onload=function() {
	$("#content").toggleClass("hidden");
	$("#content").hide().fadeIn(1000); 
} 

$(document).ready(function(){
    $(this).scrollTop(0);
});


$("#btt").on("click", function(){
	$("html").animate({scrollTop: 0}, "slow");
});

$("#aboutLink").on("click", function(){
	$("html").animate({scrollTop: $("#about").offset().top}, "slow");
});

$("#projectsLink").on("click", function(){
	$("html").animate({scrollTop: $("#projects").offset().top}, "slow");
});

$("#projectsBtn").on("click", function(){
	$("html").animate({scrollTop: $("#projects").offset().top}, "slow");
});