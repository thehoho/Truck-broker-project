document.addEventListener("DOMContentLoaded", function() {
	let mobileToggle = document.querySelector(".mobile-toggle");
	let mobileMenu = document.querySelector(".mobile-menu");
	
	mobileToggle.addEventListener("click", function() {
		let links = mobileMenu.querySelectorAll("a");
		let height = links.length * 35;
		if (mobileToggle.classList.contains("active")) {
			mobileToggle.classList.remove("active");
			mobileMenu.classList.remove("active");
			mobileMenu.style.height = "0";
		} else {
			mobileToggle.classList.add("active");
			mobileMenu.classList.add("active");
			mobileMenu.style.height = `${height}px`;
		}
	});
});