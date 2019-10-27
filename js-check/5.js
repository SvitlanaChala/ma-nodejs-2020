const data = '235a125346a34asgas129ga';
 let result = '';

 for (let i = 0; i < data.length; i++) {
   if (data[i] % 2 ===0 ) {
     result += data[i];
   }
 }
console.log(result);
