const hello = "1Hello1 World312 1234";

const regexp = /world/i;
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

console.log(hello.match(regexp));