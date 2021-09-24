function dna(str) {
    if (str === '') {
            return '';
    }
    for (let i=0; i<str.length; i++) {
        if (str[i] !== 'C'){
            let newStr = str.replace(str[i], '');
            return newStr;
        } else {
            return str;
        }
    }
}

module.exports = dna;