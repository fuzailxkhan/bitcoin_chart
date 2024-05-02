const express = require('express');
const cors  = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());


app.listen(3000,(err)=>{
    if(err) console.log("Ran into this Error" ,err);
    console.log("NO Error incountered the server is running at port 3000")
})

const btc_update = async()=>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin?x_cg_demo_api_key=CG-ZtUcUjv9LWbACKwGorKfc7jj")
    return res.data;
}

app.get('/line-chart',async(req,res)=>{
    const data = await btc_update()
    console.log("btc update",data)
    res.send(data);
})