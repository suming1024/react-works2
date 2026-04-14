"use strict";
const translation = {
    hello: '안녕하세요',
    goodbye: '안녕히 가세요'
};
console.log(translation.hello);
const prices = {
    apple: 1000,
    banana: 500,
    orange: 800
};
console.log(`사과의 가격: ${prices.apple}`);
for (const fruit in prices) {
    console.log(`${fruit}의 가격: ${prices[fruit]}`);
}
