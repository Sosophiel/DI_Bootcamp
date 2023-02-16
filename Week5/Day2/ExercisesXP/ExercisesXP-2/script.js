

function getGifList() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET',`https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

	xhr.send()

	xhr.onload = function(evnt) {
		console.log(xhr.response)
	}
}


getGifList()