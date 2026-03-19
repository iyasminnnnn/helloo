const data = [
    { name: "Bitcoin", ticker: "BTC", "value": "9685", "change": "2.83%" },
    { name: "Ethereum", ticker: "ETH", "value": "210.5", "change": "6.17%" },
    { name: "Ripple", ticker: "XRP", "value": "0.2812", "change": "2.47%" },
    { name: "Bitcoin Cash", ticker: "BCH", "value": "441.4", "change": "5.01%" },
    { name: "Bitcoin SV", ticker: "BSV", "value": "303.17", "change": "5.53%" },
    { name: "Litecoin", ticker: "LTC", "value": "74.935", "change": "4.25%" },
    { name: "Tether", ticker: "USDT", "value": "0.9994", "change": "-1.7%" },
    { name: "EOS", ticker: "EOS", "value": "4.6161", "change": "3.15%" },
    { name: "Binance Coin", ticker: "BNB", "value": "19.824", "change": "-3.82%" },
    { name: "Cardano", ticker: "ADA", "value": "0.060389", "change": "2.93%" },
    { name: "Tezos", ticker: "XTZ", "value": "2.1247", "change": "6.12%" },
    { name: "Ethereum Classic", ticker: "ETC", "value": "12.5988", "change": "4.09%" },
    { name: "Stellar", ticker: "XLM", "value": "0.07034", "change": "-4.10%" },
    { name: "Monero", ticker: "XMR", "value": "79.523", "change": "3.45%" },
    { name: "TRON", ticker: "TRX", "value": "0.020881", "change": "5.21%" }
];
let table=document.querySelector(".table")
table.innerHTML = `
    <thead>
        <tr>
            <th class="border namee">Name</th>
            <th class="border">Ticker</th>
            <th class="border">Value</th>
            <th class="border">Change</th>
        </tr>
    </thead>
`;
for(let i=0;i<data.length;i++){
    table.innerHTML+=`   
    <tr>
        <td class="border">${data[i].name}</td>
        <td class="border">${data[i].ticker}</td>
        <td class="border">${data[i].value}</td>
         <td class="border">${change(data[i].change)}</td>
    </tr>`  
function change(changeValue){
const val=parseFloat(changeValue)
const color = val >= 0 ? "green" : "red";
return `<p style="color: ${color}; margin: 0;">${changeValue}</p>`;
}
}
let isAscending = true;
function renderTable(arr) {
    let table = document.querySelector(".table");

    table.innerHTML = `
        <thead>
            <tr>
                <th class="border namee">Name</th>
                <th class="border">Ticker</th>
                <th class="border">Value</th>
                <th class="border">Change</th>
            </tr>
        </thead>
    `;

    for (let i = 0; i < arr.length; i++) {
        table.innerHTML += `
        <tr>
            <td class="border">${arr[i].name}</td>
            <td class="border">${arr[i].ticker}</td>
            <td class="border">${arr[i].value}</td>
            <td class="border">${change(arr[i].change)}</td>
        </tr>`;
    }
     let nameHeader = document.querySelector(".namee");

    nameHeader.addEventListener("click", function () {
        let sorted = arr.sort((a, b) => {
            return isAscending
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });

        isAscending = !isAscending;
        renderTable(sorted);
    });
}
renderTable(data);
let input = document.getElementById("searchInput");
input.addEventListener("input", function () {
    let searchValue = input.value.toLowerCase();
    let filtered = data.filter(item => {
    const name = item.name.toLowerCase();
    const ticker = item.ticker.toLowerCase();
    return name.startsWith(searchValue) || ticker.startsWith(searchValue);
});
    renderTable(filtered);
});



