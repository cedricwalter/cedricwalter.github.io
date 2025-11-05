const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=1';
function displayData() {
	fetch(API_URL)
  	.then(res => res.json())
    .then(json => {
    	const topCoin = json[0];
    	document.getElementById('price').innerHTML = `$${topCoin.price_usd}`;
    });
}
setInterval(displayData, 5000);