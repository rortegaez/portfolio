export function checkPosition(){
	let photo = document.getElementsByClassName("photoCertificate")[0];

		let isLandscape = window.matchMedia("(orientation: landscape)").matches;

		if (isLandscape) {
			photo.classList.add("landscape");
		} else {
			photo.classList.remove("landscape");
    }
}