const express = require('express');
const cors = require('cors');


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.sendFile('./index.html');
})

app.listen(port,()=>{
    console.log(`app listening at ${port}`);
})