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

let newDiv = document.createElement('div')
newDiv.id = 'div1'
document.body.append(newDiv)
let notherDiv = document.createElement('div')
notherDiv.id = 'div2'
document.body.append(notherDiv)
let orderList = document.createElement('ol')
newDiv.append(orderList)
let orderList2 = document.createElement('ol')
notherDiv.append(orderList2)


const display20Flips = () => {
	for (let i = 0; i < 20; i++) {
		coin.flip();
		let listItem = document.createElement("li");
		listItem.append(coin.toString());
		orderList.append(listItem);
	}
}
display20Flips();

const display20Images = () => {
	for (let i = 0; i < 20; i++) {
		coin.flip();
		let img = document.createElement("img");
		let listItem = document.createElement('li')
		img.src = coin.toHTML();
		img.style.height = '100px'
		orderList2.append(listItem);
		listItem.append(img)
	}
}
display20Images();

let divSelector = document.querySelector('div1')
