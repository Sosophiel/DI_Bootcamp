


let allBooks = [
    {
        title : "Les Misérables",
        author : "Victor Hugo",
        image : "https://cdn1.booknode.com/book_cover/83/les_miserables-83116-264-432.jpg",
        alreadyRead  : false
    },
    {
        title : "Hamlet",
        author : "William Shakespeare",
        image : "https://kbimages1-a.akamaihd.net/389c6a10-f026-4bbe-a132-34072053689a/1200/1200/False/hamlet-271.jpg",
        alreadyRead  : true
    }
]

let table = document.createElement("table");
let thead = document.createElement("thead");
table.appendChild(thead)

let bookTitle = document.createElement("th");
let th1 = document.createTextNode("Book Title");
bookTitle.append(th1); 
let author = document.createElement("th");
let th2 = document.createTextNode("Author");
author.append(th2); 
let image = document.createElement("th");
let th3 = document.createTextNode("Image");
image.append(th3); 

thead.appendChild(bookTitle)
thead.appendChild(author)
thead.appendChild(image)

let tbody = document.createElement("tbody");
table.appendChild(tbody)

for (const book of allBooks) {
    let tr = document.createElement("tr")

    if(book.alreadyRead) {
        tr.style.backgroundColor = "Red"
    }

    let td1 = document.createElement("td")
    let textNode = document.createTextNode(book.title);
    td1.append(textNode)

    let td2 = document.createElement("td")
    let textNode2 = document.createTextNode(book.author);
    td2.append(textNode2)

    let td3 = document.createElement("td")
    let image = document.createElement("img");
    image.setAttribute("src", book.image)
    image.setAttribute("width","100px")
    td3.appendChild(image)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    tbody.appendChild(tr)
}

document.body.firstElementChild.appendChild(table)
