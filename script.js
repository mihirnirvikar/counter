const reset = document.getElementById('reset');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const count = document.querySelector('#count');
const auto = document.querySelector('.auto');

let myInterval = null;

reset.addEventListener('click', () => {
    if(auto.classList.contains('active')){
        auto.classList.remove('active');
        clearInterval(myInterval);
        myInterval = null;
    }
    count.innerText = 0;
})

increment.addEventListener('click', () => {
    count.innerText++;
})

decrement.addEventListener('click', () => {
    count.innerText--;
})

auto.addEventListener('click', () => {
    if(!myInterval){
        auto.classList.add('active')
        myInterval = setInterval(() => {
            count.innerText++;
        }, 1000);
    }
})