const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const codeSymbols = {
        10: '.',
        11: '-'
    }

    const delimiterOnLength = (str, num) => {
        const res = [];
        for (let i = 0; i < str.length; i += num) {
            res.push(str.substr(i, num));
        }
        return res;
    }

    let wordsArr = expr.split('**********');
    wordsArr = wordsArr.map(i => delimiterOnLength(i, 10));
    wordsArr = wordsArr.map(i => i.map(e => delimiterOnLength(e, 2).filter(e => e !== '00').map(e => codeSymbols[e]).join('')));

    wordsArr = wordsArr.map(i => i.map(e => MORSE_TABLE[e]));
    wordsArr = wordsArr.map(i => i.join(''));

    return wordsArr.join(' ')

}

module.exports = {
    decode
}