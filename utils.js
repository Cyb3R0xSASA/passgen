const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '1234567890';
const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export {
    lower,
    upper,
    number,
    symbols,
    randomInt
};
