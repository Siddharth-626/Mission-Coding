const comp = document.getElementById("star-com");
const star = document.querySelectorAll('.star');
let filled = 0;
comp.addEventListener('click',function(e) {
    let currentClick = e.target.dataset.index;
   
    for (let i = 0; i < filled; i++) {
        star[i].classList.remove("star-list");
        
    } 
    for (let i = 0; i < currentClick; i++) {
        star[i].classList.add("star-list");
        
    }

    document.getElementById('count').textContent = `Rating count :${currentClick}`;
    filled=currentClick;
});

comp.addEventListener('mouseover',function (e) {
    let currentClick = e.target.dataset.index;

    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("star-list");
        
    }
    for (let i = 0; i < currentClick; i++) {
        star[i].classList.add("star-list");
        
    }
    
})
comp.addEventListener('mouseleave',function (e) {
    let currentClick = e.target.dataset.index;

    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("star-list");
        
    }
    for (let i = 0; i < filled; i++) {
        star[i].classList.add("star-list");
        
    }

})