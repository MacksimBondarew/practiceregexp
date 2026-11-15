const tasks = [
    {
        name: '1. Телефони',
        text: 'Call +38 (050) 552-35-05 or 0671234567, office: +48 600 700 800, old: 8-800-555-35-35',
        expected: ['+38 (050) 552-35-05', '0671234567', '+48 600 700 800', '8-800-555-35-35'],
    },
    {
        name: '2. IP-адреси (тільки валідні, 0-255)',
        text: '192.168.0.1 256.1.1.1 10.0.0.255 1.2.3 127.0.0.1',
        expected: ['192.168.0.1', '10.0.0.255', '127.0.0.1'],
    },
    {
        name: '3. MAC-адреси',
        text: '00:1A:2B:3C:4D:5E, 00-1a-2b-3c-4d-5e, 00:1A:2B:3C:4D, GG:1A:2B:3C:4D:5E',
        expected: ['00:1A:2B:3C:4D:5E', '00-1a-2b-3c-4d-5e'],
    },
    {
        name: '4. Назви тегів (тільки відкриваючі)',
        text: '<div class="box"><p>Hello</p><br/><img src="a.png"></div>',
        expected: ['div', 'p', 'br', 'img'],
    },
    {
        name: '5. Нікнейми (без @, і не з емейла)',
        text: 'Thanks @max_dev and @Anna-99, cc @x, mail me at test@mail.com',
        expected: ['max_dev', 'Anna-99', 'x'],
    },
    {
        name: '6. Емейли',
        text: 'm.b_20@gmail.com, bad@, @bad.com, user+tag@sub.domain.co.uk, bondarew@mail.ru.',
        expected: ['m.b_20@gmail.com', 'user+tag@sub.domain.co.uk', 'bondarew@mail.ru'],
    },
    {
        name: '7. Посилання',
        text: 'Go to https://google.com, http://sub.site.org/path/page?x=1#top and www.test.pl but not ftp://old.net',
        expected: ['https://google.com', 'http://sub.site.org/path/page?x=1#top', 'www.test.pl'],
    },
    {
        name: '8. Query parameter: значення page та sort',
        text: 'https://shop.com/search?q=pizza&page=2&sort=price_asc&utm_source=fb',
        expected: ['2', 'price_asc'],
    },
    {
        name: '9. Текст у лапках (без самих лапок)',
        text: 'He said "hello world" and then "bye", but not this',
        expected: ['hello world', 'bye'],
    },
];

const my = {
    1: /(\+?)\d[0-9)(-\s]{9,17}/g,
    2: /(2[0-5][0-5]|1[0-9][0-9]|[0-9][0-9])[\d.]+/g,
    3: /00[\w-:]{15}/g,
    4: /(?<=<)[a-z]+(?=[\s>/])/g,
    5: /(?<=\s@)[\w-_]+/g,
    6: /[\w_+.]+@[\w_+.]+\.[a-z]{2,3}/g,
    7: /(http(s?)|www.)[\w:\/#*.=?]+/g,
};

for (const [i, t] of tasks.entries()) {
    const re = my[i + 1];
    if (!re) { console.log('—   ', t.name); continue; }
    const got = t.text.match(re) || [];
    const ok = JSON.stringify(got) === JSON.stringify(t.expected);
    console.log(ok ? 'OK  ' : 'FAIL', t.name, ok ? '' : got);
}