const volumeChange = function() {
	let setting = {
		vol: this.volume
	}
	chrome.storage.local.set(setting, function() {
		console.log(setting)
	});
}
const volumeSetter = function() {
	chrome.storage.local.get(void 0, function(setting) {
		console.log(setting)
		this.document.getElementById("video01").volume = setting.vol || 0.1;
	});
}
window.addEventListener("load", function() {
	var video01 = this.document.getElementById("video01");
	if(video01) {
		volumeSetter()
		video01.addEventListener("volumechange",volumeChange)
	}
})

