// РЕГУЛЯРКИ — ПРАКТИКА ТІЛЬКИ .match() (115 задач)
// Запуск: node regex-match-practice.js
//
// Як працювати: заміни кожне /___/ на свою регулярку (з флагами!) і запусти файл.
// ✅ правильно · ❌ показує що вийшло і що треба · ⏳ ще не розв'язано.
// Решту коду в задачі не чіпай — міняй тільки регулярку.
// Порада: спочатку подивись на дані нижче, потім читай задачу.

// ---------- ДАНІ ----------
const order = 'Order #A-1024 placed 2026-03-15 by jan.kowalski@firma.pl, total 1249.99 zł. Track: PL123456789PL. Promo: WINTER25, expires 31.03.2026. Call +48 512 345 678.';
const log = `[2026-11-20 08:15:32] INFO  User 42 logged in from 192.168.0.15
[2026-11-20 08:17:01] ERROR Payment failed for order #A-1024 (code 502)
[2026-11-20 09:02:45] WARN  Disk usage 91%
[2026-11-20 09:30:12] INFO  User 7 logged out
[2026-11-20 10:11:59] ERROR Timeout after 3000ms on /api/v2/orders`;
const html = '<div class="card active" id="main"><a href="https://shop.pl/item?id=15&color=red">Buy now</a><img src="/img/cat.png" alt="Cat"><a href="/about">About</a></div>';
const tweet = 'Wow!!! #JavaScript is 🔥 and #regex rocks. Ping @maks_dev and @anna.k → https://t.co/xyz123 or http://bit.ly/abc lol 😂';
const csv = `name;age;city
Ola;23;Kraków
Maks;19;Warszawa
Ivan;31;Lviv`;
const code = 'const userName = getUser(); let total_sum = 0; var isReady = true; function calcTax(price) { return price * 0.23; }';
const prices = 'Coffee $3.50, Cake €4, Tea 7,50 zł, Laptop $1299.00, Book 250 UAH, Free 0';
const ua = 'Привіт, Максиме! Їжак з’їв 3 яблука у Львові о 14:30. Wi-Fi пароль: Kyiv2026.';

// ---------- перевірялка (не чіпай) ----------
let solved = 0;
let total = 0;
function check(n, desc, fn, expected) {
    total++;
    if (fn.toString().includes('___')) {
        console.log(`⏳ ${n}. ${desc}`);
        return;
    }
    let got;
    try {
        got = fn();
    } catch (e) {
        got = 'ПОМИЛКА: ' + e.message;
    }
    if (JSON.stringify(got) === JSON.stringify(expected)) {
        solved++;
        console.log(`✅ ${n}. ${desc}`);
    } else {
        console.log(`❌ ${n}. ${desc}`);
        console.log('     вийшло:', JSON.stringify(got));
        console.log('     треба: ', JSON.stringify(expected));
    }
}

// ================= РІВЕНЬ 1 — базові символи =================

// 1. order: номер замовлення (A-1024, без #)
check(1, "order: номер замовлення (A-1024, без #)", () => {
    return order.match(/(?<=#)[\w-]+/)?.[0];
}, "A-1024");

// 2. order: перше число в тексті
check(2, "order: перше число в тексті", () => {
    return order.match(/\d+/)?.[0];
}, "1024");

// 3. order: усі числа (групи цифр)
check(3, "order: усі числа (групи цифр)", () => {
    return order.match(/\d+/g);
}, ["1024","2026","03","15","1249","99","123456789","25","31","03","2026","48","512","345","678"]);

// 4. order: слово Promo
check(4, "order: слово Promo", () => {
    return order.match(/Promo/)?.[0];
}, "Promo");

// 5. order: перше слово рядка
check(5, "order: перше слово рядка", () => {
    return order.match(/[a-z]+/i)?.[0];
}, "Order");

// 6. order: число в самому кінці рядка (перед останньою крапкою)
check(6, "order: число в самому кінці рядка (перед останньою крапкою)", () => {
    return order.match(/\d+(?=\.$)/)?.[0];
}, "678");

// 7. order: усі шматки з 2+ великих літер підряд
check(7, "order: усі шматки з 2+ великих літер підряд", () => {
    return order.match(/[A-Z]{2,}/g);
}, ["PL","PL","WINTER"]);

// 8. order: усі символи # і @
check(8, "order: усі символи # і @", () => {
    return order.match(/[#@]/g);
}, ["#","@"]);

// 9. tweet: усі знаки оклику одним шматком
check(9, "tweet: усі знаки оклику одним шматком", () => {
    return tweet.match(/!+/);
}, ["!!!"]);

// 10. Слова рівно з 3 літер у 'cat dog fish bird ant'
check(10, "Слова рівно з 3 літер у 'cat dog fish bird ant'", () => {
    return 'cat dog fish bird ant'.match(/\b[a-z]{3}\b/g);
}, ["cat","dog","ant"]);

// 11. code: ключові слова const, let, var
check(11, "code: ключові слова const, let, var", () => {
    return code.match(/const|let|var/g);
}, ["const","let","var"]);

// 12. code: усі символи = (окремо)
check(12, "code: усі символи = (окремо)", () => {
    return code.match(/=/g);
}, ["=","=","="]);

// 13. csv: перший рядок (заголовок)
check(13, "csv: перший рядок (заголовок)", () => {
    return csv.match(/.+/)[0];
}, "name;age;city");

// 14. Усі цифри по одній з 'a1b22c333'
check(14, "Усі цифри по одній з 'a1b22c333'", () => {
    return 'a1b22c333'.match(/\d/g);
}, ["1","2","2","3","3","3"]);

// 15. Усі літери по одній з 'a1b22c333'
check(15, "Усі літери по одній з 'a1b22c333'", () => {
    return 'a1b22c333'.match(/\D/g);
}, ["a","b","c"]);

// 16. Слово world у будь-якому регістрі з 'Hello WoRLD'
check(16, "Слово world у будь-якому регістрі з 'Hello WoRLD'", () => {
    return 'Hello WoRLD'.match(/world/i)?.[0];
}, "WoRLD");

// ================= РІВЕНЬ 2 — класи [], квантифікатори {} + * ? =================

// 17. order: дата РРРР-ММ-ДД
check(17, "order: дата РРРР-ММ-ДД", () => {
    return order.match(/\b\d{4}[\d-]+(?=\s)/)?.[0];
}, "2026-03-15");

// 18. order: дата ДД.ММ.РРРР
check(18, "order: дата ДД.ММ.РРРР", () => {
    return order.match(/\b\d{2}\.[\d.]+(?=\.)/)?.[0];
}, "31.03.2026");

// 19. order: сума з копійками
check(19, "order: сума з копійками", () => {
    return order.match(/\d+\.\d+/)?.[0];
}, "1249.99");

// 20. order: трек-номер (2 великі + 9 цифр + 2 великі)
check(20, "order: трек-номер (2 великі + 9 цифр + 2 великі)", () => {
    return order.match(/[A-Z]{2}\d{9}[A-Z]{2}/)?.[0];
}, "PL123456789PL");

// 21. order: промокод (великі літери + цифри)
check(21, "order: промокод (великі літери + цифри)", () => {
    return order.match(/\b[A-Z]+\d+\b/)?.[0];
}, "WINTER25");

// 22. order: телефон +48 XXX XXX XXX
check(22, "order: телефон +48 XXX XXX XXX", () => {
    return order.match(/\+[\d\s]+/)?.[0];
}, "+48 512 345 678");

// 23. order: email
check(23, "order: email", () => {
    return order.match(/[a-z.]+@[a-z.]+/)?.[0];
}, "jan.kowalski@firma.pl");

// 24. log: усі часи ГГ:ХХ:СС
check(24, "log: усі часи ГГ:ХХ:СС", () => {
    return log.match(/[\d:]{8}/g);
}, ["08:15:32","08:17:01","09:02:45","09:30:12","10:11:59"]);

// 25. log: IP-адреса
check(25, "log: IP-адреса", () => {
    return log.match(/\d{3}\.[\d.]+/)?.[0];
}, "192.168.0.15");

// 26. log: усі рівні логів
check(26, "log: усі рівні логів", () => {
    return log.match(/[A-Z]{4,5}/g);
}, ["INFO","ERROR","WARN","INFO","ERROR"]);

// 27. log: шлях API (починається з /api)
check(27, "log: шлях API (починається з /api)", () => {
    return log.match(/\/[\w/]+/)?.[0];
}, "/api/v2/orders");

// 28. log: усі числа з 3+ цифр
check(28, "log: усі числа з 3+ цифр", () => {
    return log.match(/\d{3,}/g);
}, ["2026","192","168","2026","1024","502","2026","2026","2026","3000"]);

// 29. code: snake_case слова
check(29, "code: snake_case слова", () => {
    return code.match(/[a-z]+_[a-z]+/);
}, ["total_sum"]);

// 30. code: camelCase слова
check(30, "code: camelCase слова", () => {
    return code.match(/\b[a-z]+[A-Z][a-zA-Z]+\b/g);
}, ["userName","getUser","isReady","calcTax"]);

// 31. code: десяткові числа
check(31, "code: десяткові числа", () => {
    return code.match(/\d\.\d+/);
}, ["0.23"]);

// 32. code: усі дужки ( ) { }
check(32, "code: усі дужки ( ) { }", () => {
    return code.match(/[()]|[{}]/g);
}, ["(",")","(",")","{","}"]);

// 33. prices: доларові ціни разом із $
check(33, "prices: доларові ціни разом із $", () => {
    return prices.match(/\$\d+\.\d+/g);
}, ["$3.50","$1299.00"]);

// 34. prices: усі ціни з копійками (через . або ,)
check(34, "prices: усі ціни з копійками (через . або ,)", () => {
    return prices.match(/\d+([,.]\d+)/g);
}, ["3.50","7,50","1299.00"]);

// 35. prices: валютні символи $ і €
check(35, "prices: валютні символи $ і €", () => {
    return prices.match(/[$€]/g);
}, ["$","€","$"]);

// 36. ua: українські слова
check(36, "ua: українські слова", () => {
    return ua.match(/[а-яіїєґ’]+/ig);
}, ["Привіт","Максиме","Їжак","з’їв","яблука","у","Львові","о","пароль"]);

// 37. ua: слова з великої кириличної літери
check(37, "ua: слова з великої кириличної літери", () => {
    return ua.match(/[А-ЯІЇЄҐ][а-яіїєґ’]+/g);
}, ["Привіт","Максиме","Їжак","Львові"]);

// 38. ua: латинські слова (можуть мати цифри і дефіс)
check(38, "ua: латинські слова (можуть мати цифри і дефіс)", () => {
    return ua.match(/[A-Z][\w-]+/g);
}, ["Wi-Fi","Kyiv2026"]);

// 39. ua: час
check(39, "ua: час", () => {
    return ua.match(/\d{2}:\d{2}/)?.[0];
}, "14:30");

// 40. html: усі назви тегів, що відкриваються (div, a, img…)
check(40, "html: усі назви тегів, що відкриваються (div, a, img…)", () => {
    return html.match(/(?<=<)[a-z]+/g);
}, ["div","a","img","a"]);

// ================= РІВЕНЬ 3 — lookahead / lookbehind =================

// 41. order: домен email без @
check(41, "order: домен email без @", () => {
    return order.match(/(?<=@)[a-z.]+\.[a-z]{2,12}/)?.[0];
}, "firma.pl");

// 42. order: ім'я в email (до @)
check(42, "order: ім'я в email (до @)", () => {
    return order.match(/[a-z.]+(?=@)/)?.[0];
}, "jan.kowalski");

// 43. order: число після #A-
check(43, "order: число після #A-", () => {
    return order.match(/\d+/)?.[0];
}, "1024");

// 44. order: сума перед " zł"
check(44, "order: сума перед \" zł\"", () => {
    return order.match(/\d+\.\d{2}/)?.[0];
}, "1249.99");

// 45. order: текст після "Promo: " до коми
check(45, "order: текст після \"Promo: \" до коми", () => {
    return order.match(/\b[A-Z]+\d+\b/)?.[0];
}, "WINTER25");

// 46. prices: доларові ціни без $
check(46, "prices: доларові ціни без $", () => {
    return prices.match(/(?<=\$)\d+\.\d+/g);
}, ["3.50","1299.00"]);

// 47. prices: числа перед " zł" або " UAH"
check(47, "prices: числа перед \" zł\" або \" UAH\"", () => {
    return prices.match(/[\d,]+(?= (zł|UAH))/g);
}, ["7,50","250"]);

// 48. prices: назви товарів (слово перед пробілом і ціною/символом)
check(48, "prices: назви товарів (слово перед пробілом і ціною/символом)", () => {
    return prices.match(/[A-Z][a-z]+/g);
}, ["Coffee","Cake","Tea","Laptop","Book","Free"]);

// 49. log: тексти ERROR-повідомлень
check(49, "log: тексти ERROR-повідомлень", () => {
    return log.match(/(?<=ERROR\s).+/g);
}, ["Payment failed for order #A-1024 (code 502)","Timeout after 3000ms on /api/v2/orders"]);

// 50. log: номери користувачів
check(50, "log: номери користувачів", () => {
    return log.match(/(?<=User\s)\d+/g);
}, ["42","7"]);

// 51. log: число перед %
check(51, "log: число перед %", () => {
    return log.match(/\d+(?=%)/)?.[0];
}, "91");

// 52. log: код помилки в дужках (без "code ")
check(52, "log: код помилки в дужках (без \"code \")", () => {
    return log.match(/(?<=code\s)\d+/)?.[0];
}, "502");

// 53. html: усі href без лапок
check(53, "html: усі href без лапок", () => {
    return html.match(/(?<=href=")[\w:/.?=&]+(?=")/g);
}, ["https://shop.pl/item?id=15&color=red","/about"]);

// 54. html: id
check(54, "html: id", () => {
    return html.match(/(?<=id=")[a-z]+/)?.[0];
}, "main");

// 55. html: текст у <a>
check(55, "html: текст у <a>", () => {
    return html.match(/(?<=>)[\w\s]+(?=<\/a>)/g);
}, ["Buy now","About"]);

// 56. html: значення alt
check(56, "html: значення alt", () => {
    return html.match(/(?<=alt=")[\w]+(?=")/)?.[0];
}, "Cat");

// 57. tweet: хештеги без #
check(57, "tweet: хештеги без #", () => {
    return tweet.match(/(?<=#)[\w_]+/g);
}, ["JavaScript","regex"]);

// 58. tweet: нікнейми без @
check(58, "tweet: нікнейми без @", () => {
    return tweet.match(/(?<=@)[\w_.]+/g);
}, ["maks_dev","anna.k"]);

// 59. tweet: усі посилання http/https
check(59, "tweet: усі посилання http/https", () => {
    return tweet.match(/https?:\/\/[\w./]+/g);
}, ["https://t.co/xyz123","http://bit.ly/abc"]);

// 60. code: назви функцій (слово перед "(")
check(60, "code: назви функцій (слово перед \"(\")", () => {
    return code.match(/___/);
}, ["getUser","calcTax"]);

// 61. code: імена змінних (слово після const/let/var)
check(61, "code: імена змінних (слово після const/let/var)", () => {
    return code.match(/___/);
}, ["userName","total_sum","isReady"]);

// 62. Числа без мінуса перед ними: '5 -3 10 -7 2'
check(62, "Числа без мінуса перед ними: '5 -3 10 -7 2'", () => {
    return '5 -3 10 -7 2'.match(/___/);
}, ["5","10","2"]);

// 63. Слова без коми після: 'red, green blue, black'
check(63, "Слова без коми після: 'red, green blue, black'", () => {
    return 'red, green blue, black'.match(/___/);
}, ["green","black"]);

// ================= РІВЕНЬ 4 — групи в match: [1], .slice(1), .groups, .index, \1 =================

// 64. order: дата → [рік, місяць, день] (групи, .slice(1))
check(64, "order: дата → [рік, місяць, день] (групи, .slice(1))", () => {
    return order.match(/___/)?.slice(1);
}, ["2026","03","15"]);

// 65. order: дата іменованими групами year, month, day
check(65, "order: дата іменованими групами year, month, day", () => {
    return { ...order.match(/___/)?.groups };
}, {"year":"2026","month":"03","day":"15"});

// 66. order: email → [ім'я, домен] (групи)
check(66, "order: email → [ім'я, домен] (групи)", () => {
    return order.match(/___/)?.slice(1);
}, ["jan.kowalski","firma.pl"]);

// 67. order: телефон → код країни групою (48)
check(67, "order: телефон → код країни групою (48)", () => {
    return order.match(/___/)?.[1];
}, "48");

// 68. log: перший ERROR → [час, повідомлення] (групи)
check(68, "log: перший ERROR → [час, повідомлення] (групи)", () => {
    return log.match(/___/)?.slice(1);
}, ["08:17:01","Payment failed for order #A-1024 (code 502)"]);

// 69. html: перше посилання → іменовані групи host і path
check(69, "html: перше посилання → іменовані групи host і path", () => {
    return { ...html.match(/___/)?.groups };
}, {"host":"shop.pl","path":"/item"});

// 70. Ім'я та прізвище з 'Kowalski, Jan' → [прізвище, ім'я]
check(70, "Ім'я та прізвище з 'Kowalski, Jan' → [прізвище, ім'я]", () => {
    return 'Kowalski, Jan'.match(/___/)?.slice(1);
}, ["Kowalski","Jan"]);

// 71. Повтори слів підряд (\1): 'this is is a test test ok'
check(71, "Повтори слів підряд (\\1): 'this is is a test test ok'", () => {
    return 'this is is a test test ok'.match(/___/);
}, ["is is","test test"]);

// 72. Подвоєні літери: 'balloon coffee bookkeeper'
check(72, "Подвоєні літери: 'balloon coffee bookkeeper'", () => {
    return 'balloon coffee bookkeeper'.match(/___/);
}, ["ll","oo","ff","ee","oo","kk","ee"]);

// 73. Індекс першого числа через match(...).index в 'abc 42 x 7'
check(73, "Індекс першого числа через match(...).index в 'abc 42 x 7'", () => {
    return 'abc 42 x 7'.match(/___/)?.index;
}, 4);

// 74. Без g vs з g: скільки елементів у масиві для /(\d)(\d)/ на '12 34' (без g)
check(74, "Без g vs з g: скільки елементів у масиві для /(\\d)(\\d)/ на '12 34' (без g)", () => {
    return '12 34'.match(/___/)?.length;
}, 3);

// 75. Те саме, але з g
check(75, "Те саме, але з g", () => {
    return '12 34'.match(/___/)?.length;
}, 2);

// 76. Група без запам'ятовування (?:): токени MESS/CALL з tokens-рядка 'MESSAB12CA CALLXY34US'
check(76, "Група без запам'ятовування (?:): токени MESS/CALL з tokens-рядка 'MESSAB12CA CALLXY34US'", () => {
    return 'MESSAB12CA CALLXY34US'.match(/___/);
}, ["MESSAB12CA","CALLXY34US"]);

// ================= РІВЕНЬ 5 — флаги m s u, жадібний vs лінивий =================

// 77. log (m): дати на початку кожного рядка
check(77, "log (m): дати на початку кожного рядка", () => {
    return log.match(/___/);
}, ["2026-11-20","2026-11-20","2026-11-20","2026-11-20","2026-11-20"]);

// 78. log (m): останнє слово кожного рядка
check(78, "log (m): останнє слово кожного рядка", () => {
    return log.match(/___/);
}, ["192.168.0.15","502)","91%","out","/api/v2/orders"]);

// 79. log (m): рядки, що починаються ERROR-подією цілком
check(79, "log (m): рядки, що починаються ERROR-подією цілком", () => {
    return log.match(/___/);
}, ["[2026-11-20 08:17:01] ERROR Payment failed for order #A-1024 (code 502)","[2026-11-20 10:11:59] ERROR Timeout after 3000ms on /api/v2/orders"]);

// 80. csv (m): рядки, що закінчуються на ów або wa
check(80, "csv (m): рядки, що закінчуються на ów або wa", () => {
    return csv.match(/___/);
}, ["Ola;23;Kraków","Maks;19;Warszawa"]);

// 81. csv (m): імена (перше поле кожного рядка, без заголовка)
check(81, "csv (m): імена (перше поле кожного рядка, без заголовка)", () => {
    return csv.match(/___/);
}, ["Ola","Maks","Ivan"]);

// 82. s: усе між START\n і \nEND
check(82, "s: усе між START\\n і \\nEND", () => {
    return 'START\nline1\nline2\nEND'.match(/___/)?.[0];
}, "line1\nline2");

// 83. Лінивий: перший тег з '<b>bold</b> and <i>it</i>'
check(83, "Лінивий: перший тег з '<b>bold</b> and <i>it</i>'", () => {
    return '<b>bold</b> and <i>it</i>'.match(/___/)?.[0];
}, "<b>");

// 84. Жадібний: від першого < до останнього >
check(84, "Жадібний: від першого < до останнього >", () => {
    return '<b>bold</b> and <i>it</i>'.match(/___/)?.[0];
}, "<b>bold</b> and <i>it</i>");

// 85. Усі теги з того ж рядка
check(85, "Усі теги з того ж рядка", () => {
    return '<b>bold</b> and <i>it</i>'.match(/___/);
}, ["<b>","</b>","<i>","</i>"]);

// 86. Текст у лапках разом із лапками: 'say "hi" and "bye"'
check(86, "Текст у лапках разом із лапками: 'say \"hi\" and \"bye\"'", () => {
    return 'say "hi" and "bye"'.match(/___/);
}, ["\"hi\"","\"bye\""]);

// 87. u: емодзі в tweet
check(87, "u: емодзі в tweet", () => {
    return tweet.match(/___/);
}, ["🔥","😂"]);

// 88. u: усі кириличні літери через \p{Script=Cyrillic} у 'Hi Привіт'
check(88, "u: усі кириличні літери через \\p{Script=Cyrillic} у 'Hi Привіт'", () => {
    return 'Hi Привіт'.match(/___/);
}, ["Привіт"]);

// ================= РІВЕНЬ 6 — валідація: x.match(/^...$/) =================

// 89. Поштовий код XX-XXX (повертай збіг або null)
check(89, "Поштовий код XX-XXX (повертай збіг або null)", () => {
    return ['00-950', '31-123', '00950', '1-123', '31-1234'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["00-950","31-123",null,null,null]);

// 90. HEX-колір
check(90, "HEX-колір", () => {
    return ['#fff', '#1a2B3c', '#ffff', 'fff', '#ggg'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["#fff","#1a2B3c",null,null,null]);

// 91. Час 24h
check(91, "Час 24h", () => {
    return ['00:00', '09:45', '23:59', '24:00', '12:60', '7:30'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["00:00","09:45","23:59",null,null,null]);

// 92. IPv4 (0–255)
check(92, "IPv4 (0–255)", () => {
    return ['192.168.0.15', '255.255.255.255', '256.1.1.1', '1.2.3'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["192.168.0.15","255.255.255.255",null,null]);

// 93. Username: 3–16, літери/цифри/_, з літери
check(93, "Username: 3–16, літери/цифри/_, з літери", () => {
    return ['maks_dev', 'a1', '1maks', 'super_long_username_123', 'Ola'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["maks_dev",null,null,null,"Ola"]);

// 94. Пароль: 8+, мала, велика, цифра, спецсимвол
check(94, "Пароль: 8+, мала, велика, цифра, спецсимвол", () => {
    return ['Qwerty1!', 'qwerty1!', 'QWERTY1!', 'Qwerty!!', 'Qw1!'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["Qwerty1!",null,null,null,null]);

// 95. Дата ДД.ММ.РРРР
check(95, "Дата ДД.ММ.РРРР", () => {
    return ['31.03.2026', '01.12.1999', '32.01.2020', '15.13.2020', '1.1.2020'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["31.03.2026","01.12.1999",null,null,null]);

// 96. Email
check(96, "Email", () => {
    return ['my@adrenalin.life', 'm.b_20@gmail.com', 'bad@mail', '@mail.ru', 'a b@mail.ru'].map((x) => x.match(/___/)?.[0] ?? null);
}, ["my@adrenalin.life","m.b_20@gmail.com",null,null,null]);

// ================= РІВЕНЬ 7 — полагодь зламану регулярку =================

// 97. ПОЛАГОДЬ: /[A-z]+/g на 'abc_[x]^DEF' → треба ['abc', 'x', 'DEF']
check(97, "ПОЛАГОДЬ: /[A-z]+/g на 'abc_[x]^DEF' → треба ['abc', 'x', 'DEF']", () => {
    return 'abc_[x]^DEF'.match(/___/);
}, ["abc","x","DEF"]);

// 98. ПОЛАГОДЬ: /\d{1, 3}/ на '12345' → треба '123'
check(98, "ПОЛАГОДЬ: /\\d{1, 3}/ на '12345' → треба '123'", () => {
    return '12345'.match(/___/)?.[0];
}, "123");

// 99. ПОЛАГОДЬ: /.com/ на 'xcom.com' → треба '.com'
check(99, "ПОЛАГОДЬ: /.com/ на 'xcom.com' → треба '.com'", () => {
    return 'xcom.com'.match(/___/)?.[0];
}, ".com");

// 100. ПОЛАГОДЬ: /<.*>/g на '<a><b>' → треба ['<a>', '<b>']
check(100, "ПОЛАГОДЬ: /<.*>/g на '<a><b>' → треба ['<a>', '<b>']", () => {
    return '<a><b>'.match(/___/);
}, ["<a>","<b>"]);

// 101. ПОЛАГОДЬ: /cat/g на 'concatenate cat cats' → треба тільки ['cat'] (окреме слово)
check(101, "ПОЛАГОДЬ: /cat/g на 'concatenate cat cats' → треба тільки ['cat'] (окреме слово)", () => {
    return 'concatenate cat cats'.match(/___/);
}, ["cat"]);

// 102. ПОЛАГОДЬ: /^\d+$/g на '12\n34' дає null → треба ['12', '34']
check(102, "ПОЛАГОДЬ: /^\\d+$/g на '12\\n34' дає null → треба ['12', '34']", () => {
    return '12\n34'.match(/___/);
}, ["12","34"]);

// 103. ПОЛАГОДЬ: /\d+/ на '1 22 333' дає тільки перше → треба всі
check(103, "ПОЛАГОДЬ: /\\d+/ на '1 22 333' дає тільки перше → треба всі", () => {
    return '1 22 333'.match(/___/);
}, ["1","22","333"]);

// 104. ПОЛАГОДЬ: /(abc)?/g — треба ab + необов'язкове c: 'ab abc a' → ['ab', 'abc']
check(104, "ПОЛАГОДЬ: /(abc)?/g — треба ab + необов'язкове c: 'ab abc a' → ['ab', 'abc']", () => {
    return 'ab abc a'.match(/___/);
}, ["ab","abc"]);

// 105. ПОЛАГОДЬ: /[0-9]+.[0-9]+/ на 'v1x2 3.14' знаходить '1x2' → треба '3.14'
check(105, "ПОЛАГОДЬ: /[0-9]+.[0-9]+/ на 'v1x2 3.14' знаходить '1x2' → треба '3.14'", () => {
    return 'v1x2 3.14'.match(/___/)?.[0];
}, "3.14");

// ================= РІВЕНЬ 8 — міні-задачі =================

// 106. Голосні в 'Regular Expressions are awesome' (кількість)
check(106, "Голосні в 'Regular Expressions are awesome' (кількість)", () => {
    return 'Regular Expressions are awesome'.match(/___/)?.length;
}, 13);

// 107. Ініціали з 'jan maria kowalski' (масив перших літер)
check(107, "Ініціали з 'jan maria kowalski' (масив перших літер)", () => {
    return 'jan maria kowalski'.match(/___/);
}, ["j","m","k"]);

// 108. Слова довші за 5 літер у 'I love regular expressions so much'
check(108, "Слова довші за 5 літер у 'I love regular expressions so much'", () => {
    return 'I love regular expressions so much'.match(/___/);
}, ["regular","expressions"]);

// 109. Кількість слів в ua
check(109, "Кількість слів в ua", () => {
    return ua.match(/___/)?.length;
}, 14);

// 110. Розбий номер картки на групи по 4: '1111222233334444'
check(110, "Розбий номер картки на групи по 4: '1111222233334444'", () => {
    return '1111222233334444'.match(/___/);
}, ["1111","2222","3333","4444"]);

// 111. Розбий рядок на шматки по 3 символи: 'abcdefgh'
check(111, "Розбий рядок на шматки по 3 символи: 'abcdefgh'", () => {
    return 'abcdefgh'.match(/___/);
}, ["abc","def","gh"]);

// 112. Ключі шаблону з 'Hi {{ name }}, you owe {{amount}} zł'
check(112, "Ключі шаблону з 'Hi {{ name }}, you owe {{amount}} zł'", () => {
    return 'Hi {{ name }}, you owe {{amount}} zł'.match(/___/);
}, ["name","amount"]);

// 113. Розширення файлів з 'a.js b.test.ts c.png README'
check(113, "Розширення файлів з 'a.js b.test.ts c.png README'", () => {
    return 'a.js b.test.ts c.png /___/ADME'.match(/___/);
}, ["js","ts","png"]);

// 114. Слова, що починаються і закінчуються на одну літеру: 'level noon test abc wow'
check(114, "Слова, що починаються і закінчуються на одну літеру: 'level noon test abc wow'", () => {
    return 'level noon test abc wow'.match(/___/);
}, ["level","noon","test","wow"]);

// 115. Числа з плаваючою крапкою і від'ємні: 't=-3.5, x=10, y=-2, z=0.25'
check(115, "Числа з плаваючою крапкою і від'ємні: 't=-3.5, x=10, y=-2, z=0.25'", () => {
    return 't=-3.5, x=10, y=-2, z=0.25'.match(/___/);
}, ["-3.5","10","-2","0.25"]);

console.log(`\nРозв'язано: ${solved} / ${total}`);