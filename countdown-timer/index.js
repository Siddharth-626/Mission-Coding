const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const inputs = document.querySelectorAll('.container__input');
const hour = inputs[0]
const min = inputs[1]
const sec = inputs[2]
let count;
start.addEventListener('click',()=>{
    if(hour.value == "" && min.value == "" && sec.value =="") return;

    stop.style.display = "initial";
    start.style.display = "none"
    
    count = setInterval(()=>{
      timer()
    },1000)
function timer() {
    if(sec.value > 60){
        min.value++;
        sec.value -= 59;
    }
    if (min.value > 60) {
        hour.value++;
        min.value -= 60
    }
    if(hour.value == 0 && min.value == 0 && sec.value ==0){
        hour.value = ""
        min.value = ""
        sec.value = ""
        
    }
    else if(sec.value != 0){
        sec.value = `${sec.value <= 10 ?"0":""}${sec.value - 1}`
    }
    else if(min.value != 0 &&sec.value == 0){
        sec.value = 59;
        min.value = `${min.value <= 10 ?"0":""}${min.value - 1}`
    }
    else if(min.value == 0 &&hour.value != 0){
        min.value = 60;
        hour.value = `${hour.value <= 10 ?"0":""}${hour.value - 1}`
    }

}
})
function stopInterval(state) {
    start.innerHTML = state == 'pause' ?"Continue":"Start";
    stop.style.display = "none";
    start.style.display = "initial"
    clearInterval(count);

}
stop.addEventListener('click',()=>{
    stopInterval('pause');
})
reset.addEventListener('click',()=>{
    hour.value = ""
        min.value = ""
        sec.value = ""
    stopInterval('pause');
})

