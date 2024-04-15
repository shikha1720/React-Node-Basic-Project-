const express = require("express");
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./itemsController');
const port = 7000;
const app = express();

//Middlewares
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//routes
app.get('/items',async (req,res)=>{
    const storedItems = await getStoredItems();
    res.json({items: storedItems});
});

app.get('/items/:id', async(req,res)=>{
    const storedItems = await getStoredItems();
    const item = storedItems.find((item)=> item.id === req.params.id);
    res.json({item});
});

app.post('/items', async(req,res)=>{
    const existingItems = await getStoredItems();
    const itemData = req.body;
    const newItem = {
        ...itemData,
        id: Math.random().toString(),
    };
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({message: 'Stored new item.', item: newItem});
})

app.listen(port,()=>{
    console.log(`App Running on Port:${port}`);
});