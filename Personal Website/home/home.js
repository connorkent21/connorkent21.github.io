var backToTop = document.getElementById("btt");

backToTop.addEventListener("click", function(){
	window.location.href = "#top";
});

backToTop.addEventListener("mouseover", function(){
	this.classList.add("hovered");
});

backToTop.addEventListener("mouseout", function(){
	this.classList.remove("hovered");
});