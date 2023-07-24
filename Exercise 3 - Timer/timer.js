// console.log("Exercise 3 - Timer");
const time = document.querySelector('h2');
let btnContainer = document.querySelector('btn')
let btn1 = document.querySelector('.add')
let btn2 = document.querySelector('.minus')
let timeSecond = 32;

time.innerHTML = timeSecond;

const countDown = setInterval (()=>{
    timeSecond--;
    time.innerHTML = timeSecond;
    if(timeSecond <=0 || timeSecond <1){
        clearInterval(countDown);
        hidden();
    }
},1000)

btn1.addEventListener('click', function(){
    timeSecond += 1;
    time.innerHTML = timeSecond;
})

btn2.addEventListener('click', function(){
    timeSecond -= 1;
    time.innerHTML = timeSecond;
})