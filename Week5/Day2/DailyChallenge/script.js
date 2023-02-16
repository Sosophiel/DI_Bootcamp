/* Use this Giphy API documentation. Use the API KEY provided in Exercises XP.

In the HTML file, add a form, containing an input and a button. 
This input is used to fetch gif depending on a specific category.
In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, 
    append on the page one gif with a category of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, 
look for the sub-object named “images” inside the data you receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

 */


function submitXRH(event) {
	event.preventDefault()
	getRandomGif(event.target.elements['search'].value)
}

const getRandomGif = (search) => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET',`https://api.giphy.com/v1/gifs/random?q=${search}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

	xhr.send()

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log("error");
        } else {
            displayGif(JSON.parse(xhr.response));
        }
    } 

    xhr.onerror = function() {
        console.log("error");
    }
    
}


function displayGif(gifData) {
    console.log(gifData);
    const url = gifData.data.images.original.url

    const div = document.createElement("div")
    
    const img = document.createElement("img")
    img.src = url
    div.appendChild(img)

    const button = document.createElement("button")
    button.addEventListener("click", deleteGif)
    button.textContent = "Delete GIF"
    div.appendChild(button)

    document.getElementById("container").appendChild(div)
}

function deleteGif(event) { 
    event.target.parentElement.remove()
}


