
function sumPrimes(num) {
  // 1 + 2 + 3 + 5 + 7 
  // sieve implementation
  var sieve = [], i, j, primes = [];
  for (i = 2; i <= num; ++i) {
      if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (j = i << 1; j <= num; j += i) {
              sieve[j] = true;
          }
      }
  }
  return primes.reduce(function(accumlator, currentValue) {
    return accumlator + currentValue;
  });
}

sumPrimes(10);
