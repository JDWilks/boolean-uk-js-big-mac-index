/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

let baseCurrency = 5.66
let ukBigMac = 3.19
let franceBigMac = 8
let japanBigMac = 390
let peruBigMac = 10.50
let russianBigMac = 135


let usdUkCurrencyRate = (1 - 0.72) / 0.72 * 100
let ukBigMacIndex = usdUkCurrencyRate

let usdFranceCurrencyRate = (1 - 0.83) / 0.83 * 100
let franceBigMacIndex = usdFranceCurrencyRate

let usdJapanCurrencyRate = (1 - 107.90) / 107.90 * 100
let japanBigMacIndex = usdJapanCurrencyRate

let usdPeruCurrencyRate = (1 - 3.78) / 3.78 * 100
let peruBigMacIndex = usdPeruCurrencyRate

let usdRuassianCurrencyRate = (1 - 74.81) / 74.81 * 100
let russianBigMacIndex = usdRuassianCurrencyRate


/* 1.uk */

let iPPPUk = baseCurrency - ukBigMac

console.log("Implied UK Purchasing Power Parity is " + iPPPUk);

console.log("Uk Big Mac Index =" + ukBigMacIndex + "%");

console.log("The Pound is overvalued against the dollar by " +(Math.trunc(ukBigMacIndex)) + "%");

console.log("The Uk Big Mac index is greater than France : " + (ukBigMacIndex > franceBigMacIndex));

/* 2.france */

let iPPPFr = baseCurrency - franceBigMac

console.log("Implied French Purchasing Power Parity is " + iPPPFr);

console.log("French Big Mac Index =" + franceBigMacIndex + "%");

console.log("The Euro is overvalued against the dollar by " +(Math.trunc(franceBigMacIndex)) + "%");

console.log("The French Big Mac index is greater than Japan : " + (franceBigMacIndex > japanBigMacIndex));


/* 3.japan */

let iPPPJp = baseCurrency - japanBigMac

console.log("Implied Japanese Purchasing Power Parity is " + iPPPJp);

console.log("Japanese Big Mac Index =" + japanBigMacIndex + "%");

console.log("The Yen is overvalued against the dollar by " +(Math.trunc(japanBigMacIndex)) + "%");

console.log("The Japanese Big Mac index is greater than Peru : " + (japanBigMacIndex > peruBigMacIndex));


/* 4.Peru */

let iPPPPu = baseCurrency - peruBigMac

console.log("Implied Peru Purchasing Power Parity is " + iPPPPu);

console.log("Peru Big Mac Index =" + peruBigMacIndex + "%");

console.log("The Sol is overvalued against the dollar by " +(Math.trunc(peruBigMacIndex)) + "%");

console.log("The Peruvian Big Mac index is greater than Russian : " + (peruBigMacIndex > russianBigMacIndex));


/* 5.Russia */

let iPPPRu = baseCurrency - russianBigMac

console.log("Implied Russian Purchasing Power Parity is " + iPPPRu);

console.log("Russian Big Mac Index =" + russianBigMacIndex + "%");

console.log("The Ruble is overvalued against the dollar by " +(Math.trunc(russianBigMacIndex)) + "%");

console.log("The Russian Big Mac index is greater than UK : " + (russianBigMacIndex > ukBigMacIndex));
