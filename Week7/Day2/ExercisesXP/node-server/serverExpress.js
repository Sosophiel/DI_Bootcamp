const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.listen(3000, ()=>{
    console.log('run on port 3000')
})

app.get('/', (req, res) => {
    res.send("This in an HTML tag");
});
