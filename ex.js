let btn = document.querySelector("#readBtn");
let redDot = document.querySelector(".redDot");
let redDotByClass = document.getElementsByClassName("redDot");
let newClass = document.getElementsByClassName("new");
let num = document.querySelector("#numbers");
let redDotLength = redDotByClass.length;
num.innerHTML = redDotLength;

btn.addEventListener("click", () => {
	for(let i = 0; i < redDotLength; i++) {
		let c = redDotByClass[i].classList;
		let n = newClass[i].classList;
		c.add("redDot-invisible");
		n.add("new-white");
	}
	num.innerHTML = 0;
});