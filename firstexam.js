// const text = 'My wallet balance is 14960 USDT'

// function parseBalance(message) {
//     return message.match(/\d+/g)[0]
// }
//
// const text = 'Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'
//
// function countBalance(message) {
//     let object = {};
//     const names = message.match(/(?<=@)[a-z]+/ig);
//     const balance = message.match(/\d+/g);
//     for (let i = 0; i < names.length; i++) {
//         object[names[i].toLowerCase()] = Number(balance[i])
//     }
//     return object;
// }
//
// console.log(countBalance(text))

// result {
//  kate: 1000,
//  dmitrty: 350,
//  max: 600
//}

// const text = 'My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat'
// const textTwo = 'I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.'
// function countBalance(str) {
//     const balances = str.match(/\d+/g);
//     let maxNumber = 0;
//     let total = 0;
//     for (const balanceItem of balances) {
//         const numberBalanceItem = Number(balanceItem)
//         if (maxNumber < balanceItem) {
//             maxNumber = Number(numberBalanceItem);
//         }
//         total += Number(numberBalanceItem)
//     }
//     const spent = total - maxNumber;
//     return maxNumber - spent;
// }
//
// console.log(countBalance(textTwo))