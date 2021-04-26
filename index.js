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


let usdUkCurrencyRate = (1 - 0.72) / 0.72 * 100
let ukbigMacIndex = usdUkCurrencyRate

let usdFranceCurrencyRate = (1 - 0.83) / 0.83 * 100
let francebigMacIndex = usdFranceCurrencyRate

let usdJapanCurrencyRate = (1 - 107.90) / 107.90 * 100
let japanbigMacIndex = usdJapanCurrencyRate


/* uk */

let iPPPUk = baseCurrency - ukBigMac

console.log("Implied UK Purchasing Power Parity is " + iPPPUk);

console.log("Uk Big Mac Index =" + ukbigMacIndex + "%");

/* france */

let iPPPFr = baseCurrency - franceBigMac

console.log("Implied French Purchasing Power Parity is " + iPPPFr);

console.log("French Big Mac Index =" + francebigMacIndex + "%");


/* japan */

let iPPPJp = baseCurrency - japanBigMac

console.log("Implied Japanese Purchasing Power Parity is " + iPPPJp);

console.log("Japanese Big Mac Index =" + japanbigMacIndex + "%");


/* spain */