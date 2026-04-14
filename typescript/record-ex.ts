// record<K, T> ->유틸리티 타입
// K는 key(속성), T는 타입
 type stringMap = Record<string, string>

 const translation: stringMap = {
    hello: '안녕하세요',
    goodbye: '안녕히 가세요'
 }

 console.log(translation.hello);
 

 type fruit= 'apple' | 'banana' | 'orange'
 const prices: Record<fruit, number> = {
      apple: 1000,
      banana: 500,
      orange: 800 
 }
   console.log(`사과의 가격: ${prices.apple}`);

   for (const fruit in prices) {
    console.log(`${fruit}의 가격: ${prices[fruit as fruit]} 원`);
   }