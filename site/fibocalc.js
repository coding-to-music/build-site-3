document.addEventListener("DOMContentLoaded", function() {

    let input = document.getElementById('inputFibonum');
    let display = document.getElementById('fiboVal');

    input.oninput = function(e) {
        let entered = e.target.value;
        let fibonum = Number.parseInt(entered);
        if (Number.isNaN(fibonum)) {
            display.textContent = `ERROR: Non-number entered ${entered}`;
        } else {
            let fiboval = fibonacciLoop(fibonum);
            display.textContent = `Fibonacci ${fibonum} = ${fiboval}`;
        }
    }
    

    function fibonacciLoop(n) {
        let fibos = [];
        fibos[0] = 0;
        fibos[1] = 1;
        fibos[2] = 1;
        for (let i = 3; i <= n; i++) {
            fibos[i] = fibos[i-2] + fibos[i-1];
        }
        return fibos[n];
    }
});
