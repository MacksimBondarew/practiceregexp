// const message = ':apple::apple:<@KATE / >:apple:<@VIKTOR/ >:apple::apple:<@SERGEY/><@Dima />:apple::apple:<@viktor/><@Kate /><@Max/><@alisa /> :like: received:apple::apple::apple: this is so cool:apple: <@oleg/>:like:apple:like:!'
//
//
// function countEmojies(message, emoji) {
//     const parts = message.match(/(?<=<@)\w+|:\w+(?=:)/g);
//     parts.reverse();
//     let emojis = 0;
//     let lastWasName = false;
//     let result = {};
//     for (const part of parts) {
//         if (part === ":" + emoji) {
//             if (lastWasName) emojis = false;
//             emojis += 1;
//             lastWasName = false;
//         } else if (part[0] !== ":") {
//             const name = part.toLowerCase();
//             result[name] = (result[name] || 0) + emojis;
//             lastWasName = true;
//         }
//     }
//     return result;
// }
//
// console.log(countEmojies(message, 'apple'));

// результат
//
// {
//     kate: 5,
//     viktor: 6,
//     sergey: 2,
//     dima: 2,
//     max: 4,
//     alisa: 4,
//     oleg: 1
// }

// const freshCourses = {usd: 37.44, eur: 39.905}
//
// const data = `
// - 02.10 Эдик 23524 грн
// - 03.10 Саша 17328,грн
// - 04.10 Денис 21570 грн
// - 10.10 Данил 9200 грн
// - 11.10 Саша 31050 грн
// - 13.10 Денис 20264 грн
// - 18.10 Данил 17250 грн
// - 03.10 Илья 315$
// - 04.10 Денис 277 €
// - 06.10 Денис 503$
// - 11.10 Денис 525€
// - 23.10 Илья 650 $
// - 31.10 Денис 596-$
// - 31.10 Тимур 2350$
// - 04.10 Федя 360€
// - 17.10 Федя 720€
// - 24.10 Федя 360€
// - 04.10 Виталик 52000 грн
// - 10.10 Виталик 54500 грн
// - 10.10 Виталик 48700 грн
// - 20.10 Виталик 52200 грн
// - 06.10 Максим 83472 грн
// - 10.10 Федя 54690 грн
// - 10.10 Саша 91000 грн
// - 16.10 Илья 108800 грн
// - 17.10 Игорь 72000 грн
// - 26.10 Федя 52200 грн
// `;
//
// function groupAmountOfGrivnasByDate(str, freshCourses) {
//     const dataEarn = str.match(/[0-9]{2}\.[0-9]{2}\D+\d+\D?(грн|\$|€)/g);
//     let result = {};
//     let total = 0;
//     for (let dataEarnElement of dataEarn) {
//         const date = dataEarnElement.match(/[0-9]{2}\.[0-9]{2}/)[0];
//         const amount = Number(dataEarnElement.match(/\d+(?=\D?(грн|\$|€))/)[0])
//         const walut = dataEarnElement.match(/(грн|\$|€)/)[0];
//         let uah = amount;
//         if (walut === '$') {
//             uah = amount * freshCourses.usd;
//         }
//         if (walut === '€') {
//             uah = amount * freshCourses.eur;
//         }
//         result[date] = (result[date] || 0) + uah;
//         total += uah;
//     }
//     return [result, total];
// }
//
// console.log(groupAmountOfGrivnasByDate(data, freshCourses));

// [
//     {
//         '26.10': 52200,
//         '17.10': 100731.6,
//         '16.10': 108800,
//         '10.10': 258090,
//         '06.10': 102304.32,
//         '20.10': 52200,
//         '04.10': 98989.485,
//         '24.10': 14365.800000000001,
//         '31.10': 110298.23999999999,
//         '23.10': 24336,
//         '11.10': 52000.125,
//         '03.10': 29121.6,
//         '18.10': 17250,
//         '13.10': 20264,
//         '02.10': 23524
//     },
//     1064475.17
// ]

// Код страны может быть необязательным и может начинаться с + и содержать от 1 до 3 цифр.
//     Код города может быть обернут в скобки, но это необязательно.
//     Разделителями могут быть дефис -, точка . или пробел, или их может не быть вовсе.
//     Телефонный номер должен состоять из 10 цифр без учёта кода страны.

function isValidPhoneNumber(phoneNumber) {
    return /^(\+\d{1,3}[-.\s]?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phoneNumber);
}

console.log(isValidPhoneNumber("(123) 456-7890"));  // true
console.log(isValidPhoneNumber("123-456-7890"));    // true
console.log(isValidPhoneNumber("123.456.7890"));    // true
console.log(isValidPhoneNumber("1234567890"));      // true
console.log(isValidPhoneNumber("+31636363634"));    // true
console.log(isValidPhoneNumber("123-45-6789"));     // false
console.log(isValidPhoneNumber("(123 456-7890"));   // false
console.log(isValidPhoneNumber("12345678"));        // false