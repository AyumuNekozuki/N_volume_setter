//TODO
//体育教材の場合、ドメインが"https://cdn.fccc.info/*"になり、IDもvideo01ではなくmovieになる
//適当に実装したけど動いてないっぽいので、要修正

const volumeChange = function() {
	let setting = {
		vol: this.volume
	}
	chrome.storage.local.set(setting, function() {
		console.log(`[volume]Change>>${setting.vol}`)
	});
}
const volumeSetter = function() {
	chrome.storage.local.get(void 0, function(setting) {
		console.log(`[volume]Setter>>${setting.vol}`)
		this.document.getElementById("video01").volume = setting.vol >= 0 ?setting.vol:0.1;
		this.document.getElementById("movie").volume = setting.vol >= 0 ?setting.vol:0.1;
	});
}
window.addEventListener("load", function() {
	var video01 = this.document.getElementById("video01");
	if(video01) {
		volumeSetter()
		video01.addEventListener("volumechange",volumeChange)
	}

	var movie = this.document.getElementById("movie");
	if(movie) {
		volumeSetter()
		movie.addEventListener("volumechange",volumeChange)
	}
})