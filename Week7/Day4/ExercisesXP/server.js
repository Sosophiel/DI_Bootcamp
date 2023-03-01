const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cors())

app.use('/', express.static(__dirname +'/public'))

const port = process.env.PORT || 5001
app.listen(port, ()=>{
    console.log(`run on port ${port}`)
})


let shoppingList = []


app.post('/api/items', (req, res) => {
    //console.log(req.body)
    shoppingList.push(req.body)
    res.json(shoppingList)
})


app.get('/api/items', (req, res) => {
    res.json(shoppingList)
})









