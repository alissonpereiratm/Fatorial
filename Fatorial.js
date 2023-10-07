const n = 5; 
const fatorialN = calcularFatorial(n);

function calcularFatorial(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * calcularFatorial(n - 1);
    }
  }
  console.log(`O fatorial de ${n} é ${fatorialN}`);

  