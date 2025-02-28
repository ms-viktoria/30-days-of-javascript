function encrypt(str, n) {
    function shiftLetterLeft(char, n) {
        const newCharCode = ((char.toUpperCase().charCodeAt(0) - 65 - n) % 26 + 26) % 26 + 65;
        return String.fromCharCode(newCharCode);
    }

    if (n < 0) {
        return str;
    }

    return str.split('').map((letter) => shiftLetterLeft(letter, n)).join('');
}
