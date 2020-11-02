"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById('inputFibonum');
  var display = document.getElementById('fiboVal');

  input.oninput = function (e) {
    var entered = e.target.value;
    var fibonum = Number.parseInt(entered);

    if (Number.isNaN(fibonum)) {
      display.textContent = "ERROR: Non-number entered ".concat(entered);
    } else {
      var fiboval = fibonacciLoop(fibonum);
      display.textContent = "Fibonacci ".concat(fibonum, " = ").concat(fiboval);
    }
  };

  function fibonacciLoop(n) {
    var fibos = [];
    fibos[0] = 0;
    fibos[1] = 1;
    fibos[2] = 1;

    for (var i = 3; i <= n; i++) {
      fibos[i] = fibos[i - 2] + fibos[i - 1];
    }

    return fibos[n];
  }
});