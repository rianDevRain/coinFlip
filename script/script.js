/** @format */

const coin = {
	state: 0,
	flip() {
		this.state = Math.round(Math.random());
	},
	toString() {
		if (this.state === 0) {
			return "Tails";
		} else {
			return "Heads";
		}
	},
	toHTML() {
		let image = document.createElement("img");
		if (this.state === 0) {
			return "./images/tails.jpg";
		} else {
			return "images/heads.jpg";
		}
		return image;
	},
};



function display20Flips() {
	for (let i = 0; i < 19; i++) {
		coin.flip();
		let paragraph = document.createElement("p");
		paragraph.innerHTML = coin.toString();
		document.body.append(paragraph);
			}
}
display20Flips();

function display20Images() {
	for (let i = 0; i < 19; i++) {
		coin.flip();
		let img = document.createElement("img");
		img.src = coin.toHTML();
		document.body.append(img);
	}
}
display20Images();
