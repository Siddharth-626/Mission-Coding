 const boxContainer = document.querySelector('.container__box');
 const box = document.querySelectorAll('.box');
 let arr = [];
 boxContainer.addEventListener('click',(e)=>{
     let index = e.target.dataset.index;

     if(index != undefined){
        arr.push(index);
        box[index].classList.add('color')
     }
     if (arr.length == 9) {
        let cnt = 0
        while (arr.length > 0) {
            let i = arr.shift();
            cnt++;
            setTimeout(()=>{
                box[i].classList.remove('color');
            }, cnt * 1000)
        }
     }
    
 })