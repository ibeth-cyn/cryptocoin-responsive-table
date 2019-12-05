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
 
 $.getJSON(
    apiKey, 
     function(data){
         console.log(data);
         appendDataToBody(data);
     });

function appendDataToBody(data){
    
}