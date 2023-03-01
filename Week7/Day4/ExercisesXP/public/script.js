const addItem = async () => {

    try {

        const form = document.getElementById("form")
        const formData = new FormData(form)
        const data = {
            quantity : formData.get('quantity'),
            item: formData.get('item'),
        }

        let response = await fetch(`http://localhost:5001/api/items`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          });

        console.log(data)

        response = await fetch(`http://localhost:5001/api/items`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            }         
        });
        const res = await response.json()
       showShoppingList(res);

    } catch (error) {
        console.log(error);
    }
        
}

const showShoppingList = (arr) => {
    const html = arr.map(x =>{
        return `<div>${x.item} ${x.quantity}</div>`
    })
    document.getElementById('root').innerHTML = html.join('')
}