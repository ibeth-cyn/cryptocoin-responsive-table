/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */

 /*Get API and connect to it - https://api.coinlore.com/api/tickers/?start=100&limit=100 ✅* /
 /*Create tr and add to tbody✅* /
 /*Create td and add to tr ✅*/
 /*Limit to 10 coins per page*/

 let apiKey =  "https://api.coinlore.com/api/tickers/?start=10&limit=10";
 let coinsArray;
 
 $.getJSON(
    apiKey, 
     function(data){
         coinsArray = data.data;
         appendDataToBody(data);
     });

function appendDataToBody(data){
    const tBody = document.getElementsByTagName("tbody")[0]; 
    for(let i = 0; i < coinsArray.length; i++){
        const tRows = document.createElement("tr");

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        td1.innerText = coinsArray[i].name;
        td2.innerText = coinsArray[i].symbol;
        td3.innerText = "$ " + coinsArray[i].price_usd;
        td4.innerText = coinsArray[i].tsupply + " " + coinsArray[i].symbol; 

        tRows.appendChild(td1);
        tRows.appendChild(td2);
        tRows.appendChild(td3);
        tRows.appendChild(td4);

        tBody.append(tRows);
    }
}