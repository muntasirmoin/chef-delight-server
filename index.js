const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;

const chef = require('./data/chef.json');
app.use(cors());

app.get('/', (req, res) =>{
res.send('Chef Delight is running');
});

// chef data sending

app.get('/chef', (req, res) =>{
    res.send(chef);
});

// chef selected id

app.get('/chef/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedChef = chef.find(n => parseInt(n.id) === id);
    res.send(selectedChef);
})

app.listen(port,()=>{
    console.log(`Chef Delight API is running on port: ${port}`);
})