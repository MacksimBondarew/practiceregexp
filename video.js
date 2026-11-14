const hello = "1Hello1 World312 1234";
const text = '<@Viktor/>Hey team.  +38 (050) 552-35-05 380505523505 I would m.b_20@gmail.com._fewdfewfew like to have a call with <@Megan123/> at 17:00. <@Mike/> would bondarew@mail.ru you join us?';
const tokens = 'MESS1KXD6S49CA CALL1KXD6S49USMESS63PP0V3LUS, CALLPZDE12S4US, MESSKXS49D16US';
const testOne = 'my@adrenalin.life'

const link = 'https://mygoogle.service.com';
// const regexp = /world/i;
// const regexp = /[a-zA-z]/;
// const regexp = /[a-z]{3,5}/i;
// const regexp = /[a-z]+/ig;
// const regexp = /[a-z]*/ig;
// const regexp = /[0-9]+[a-z]+/ig;
// const regexp = /[^0-9\s]+/ig; //ignore + \s ignore probe
// const regexp = /\w+/g;
// const regexp = /\d+/g;
// const regexp = /(?<=\s)\w+(?=\s)/;
// const regexp = /(?<=\s)\w+(?:\s)/;
// const regexp = /\s\w+(?=\s)/;
// const regexp = /(?<=\s)[a-z]+(?=\d)/ig;
// const regexp = /(?<=@)\w+(?=\/)/g
// const regexp = /(?<=<@)[a-z]+/ig;
// const regexp = /[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]{2,12}/g
// const regexp = /./g
// const regexp = /(\+?)\d+[0-9\-)(\s]{10,16}\d/g;
// const  regexp = /(mess|call)\w{8}(ca|us)/ig;
// const regexp = /^\w+@[a-z0-9_.]+\.[a-z]{2,12}$/ig;
// const regexp = /^https?:\/\/[a-z0-9_.]+\.[a-z]{2,12}$/
// console.log(test.match(regexp));
// console.log(link.match(regexp));




// \s - пробел
// \w - a-zA-Z0-9
// \d - 0-9
// \t - enter или отступ с новой строки
// ^ - начало строки. Текст начинается на определенное выражение
// $ - конец строки. Текст заканчивается на определенное выражение
// [] - диапазон символов
// [^] - отрицательный диайпазон. Символы которые нужно игнорировать
// (abc?) - знак вопросо говорит что abc может быть а может и не быть
// (?<=abc) - наше выражение должно начинаться на abc, при этом abc не будет добавлено на выходе
// (?=abc) - наша фраза заканчивается на abc, где abc не будет добавлено к выводу
// (?:abc) - наша фраза заканчивается на abc, где abc будет добавлено к выводу
// знак + - повторять патерн, до тех пор пока это возможно
// знак . - найти любой символ
// знак ? вместо + - повторять патерн до тех пор пока это возможно, если патерн не повторяется вернуть пустую строку
// {1,10} - количество символов от одного до десяти.
// {2} - должно быть 2 символа
// {2,} - должно быть 2 символа или более
// (abc|def) - найти abc или def

// flag i - игнорировать большие буквы
// flag g - глобальный поиск
