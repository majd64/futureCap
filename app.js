const path = require("path");
https = require('https');

const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

let coins = []
const totalCryptoCap = 960000000000
const t1c = 2977680000000
const t2c = 6048412500000
const t3c = 11166300000000

const phrases = ["Analyzing charts", "Processing sentiment", "Facetiming Charles Hoskinso", "Buffering data science models"]

fetchCoinData()
function fetchCoinData(){
  let chunks = [];
  coins = []
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  https.get(url, function(response){
    response.on('data', function(data) {
      chunks.push(data);
    }).on('end', function() {
      let data   = Buffer.concat(chunks);
      let listOfCoinData = JSON.parse(data);
      listOfCoinData.forEach((coin, i) => {
        const dom = coin.market_cap / totalCryptoCap
        const sup = coin.circulating_supply
        const t1 = dom/sup * t1c
        const t2 = dom/sup * t2c
        const t3 = dom/sup * t3c
        coins.push({phrases: phrases, id: coin.id, name: coin.name, symbol: coin.symbol, price: coin.current_price, marketCap: coin.market_cap, image: coin.image, supply: sup, lower: t1, middle: t2, upper: t3, change: coin.price_change_percentage_24h})
      });
    });
  });
  setTimeout(fetchCoinData, 12000);
}

app.get("/coins", (req, res) => {
  const result = []
  coins.forEach((coin, i) => {
    if (coin.id != "tether"){
      result.push({name: coin.name, symbol: coin.symbol, id: coin.id})

    }
  });
  res.status(200).send({coins: result})
})

app.get("/coins/:id", (req, res) => {
  console.log(req.params.id)
  var result = coins.find(coin => {
    return coin.id === req.params.id
  })
  res.status(200).send({coin: result})
})

app.get('/*', (req, res) => {
  console.log("here")
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, function() {console.log("server started")});
