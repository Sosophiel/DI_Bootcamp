


let firstDiv = document.body.firstElementChild
firstDiv.setAttribute("id", "socialNetworkNavigation")

console.log(firstDiv.id);


let li = document.createElement("li");
let textnode = document.createTextNode("Logout");
li.append(textnode); 

firstDiv.firstElementChild.appendChild(li)
