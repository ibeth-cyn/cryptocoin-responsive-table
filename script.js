/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */

 /*Get API and connect to it - https://api.coinlore.com/api/tickers/?start=100&limit=100 * ✅/
 /*So, we are looking at 10 pages*/
 /*Create tr and add to tbody*/
 /*Create th and add to tr*/
 /*Limit to 10 coins per page*/

 let apiKey =  "https://api.coinlore.com/api/tickers/?start=10&limit=10";
 let coinsArray;
 
 $.getJSON(
    apiKey, 
     function(data){
         coinsArray = data.data;
         console.log(data);
         appendDataToBody(data);
     });

function appendDataToBody(data){
    const tBody = document.getElementsByTagName("tbody")[0]; 
    for(let i = 0; i < coinsArray.length; i++){
        const tRead = document.createElement("tr");
        
        tBody.append(tRead);

        const th1 = document.createElement("th");
        const th2 = document.createElement("th");
        const th3 = document.createElement("th");
        const th4 = document.createElement("th");

        th1.innerText = coinsArray[i].name;
        th2.innerText = coinsArray[i].symbol;
        th3.innerText = "$ " + coinsArray[i].price_usd;
        th4.innerText = coinsArray[i].tsupply + " " + coinsArray[i].symbol; 

        console.log(th1);
        console.log(th2);
        console.log(th3);
        console.log(th4);

        tBody.appendChild(th1);
        tBody.appendChild(th2);
        tBody.appendChild(th3);
        tBody.appendChild(th4);
    }
}