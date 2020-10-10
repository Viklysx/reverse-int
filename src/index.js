module.exports = function reverse (n) {
 if (n < 0) n = n*(-1);
 if (n % 10 === 0) n = n/10;
 n = String(n);
 return n.split('').reverse().join('');
}
