let data =[];
const card = document.querySelector('.container__card');
document.addEventListener('DOMContentLoaded',()=>{
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
     .then((res)=>res.json()).then((res)=>{data = res

     for (let i = 0; i < data.length; i++) {
          card.innerHTML += `
           <div class="card">
            <div class="card__image">
                <img src="${data[i].image}" alt="">
            </div>
            <div class="card__detials">
                <div class="row">
                    <span class="card__detials--name">${data[i].name}</span>
                    <span class="card__detials--price">${data[i].current_price}</span>
                </div>
                <div class="row">
                    <span class="card__detials--short-name">${data[i].symbol}</span>
                    <span class="card__detials--change">${data[i].market_cap_change_24h}%</span>
                </div>
            </div>

         </div>
          `

     }
    });
})