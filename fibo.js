// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
// fibo [2] = 1;
// fibo [1] = 1;
// fibo[3] = 2;

// fibo [3] = 2;
// fibo [2] = 1;
// fibo[4] = 3;

// fibo [4] = 3;
// fibo [3] = 2;
// fibo[5] = 5;

// fibo [5] = 5;
// fibo [4] = 3;
// fibo[6] = 8;

// fibo [6] = 8;
// fibo [5] = 5;
// fibo[7] = 13;

// fibo [7] = 13;
// fibo [6] = 8;
// fibo[8] = 21;

/*
fibo[3] = fibo[2]+fibo[1]
fibo[4] = fibo[3]+fibo[2]
fibo[5] = fibo[4]+fibo[3]
fibo[50] = fibo[49]+fibo[48]
fibo[487] = fibo[486]+fibo[485]
fibo[n] = fibo[n-1]+fibo[n-2]
fibo[i] = fibo[i-1]+fibo[i-2]
*/

// এখানে 1 ও 2 নং পদের মান ডিফল্ট ভাবে দিয়ে দিতে হবে তা না হলে 3 নং পদের মান আসবে না । অর্ধাৎ গুরুত্বপূর্ন কাজ হচ্ছে 1 ও 2 নং পদের মান দিয়ে দেওয়া।

const fibo = [0, 1];
for (let i = 2; i <= 25; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
