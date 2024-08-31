const number = document.getElementById('isprime-number-input');
const Answer = document.getElementById('Answer');
const submit = document.getElementById('submit-button');

const cal = (number, el) => {
    const num = parseInt(number);

    if (isNaN(num)) {
        el.innerHTML = "This is Not a Number";
    } else if (num < 2) {
        el.innerHTML = "Not a Prime Number";
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        el.innerHTML = isPrime ? "Prime Number" : "Not a Prime Number";
    }
};


submit.addEventListener('click', function(){
    cal(number.value,Answer)
})
