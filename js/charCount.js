exports.charCount = function(str) {
    // Build object of count of characters, excluding anything not a letter
    str = str.toLowerCase();
    const validChars = "abcdefghijklmnopqrstuvwxyz"
    let countOfChars = {};
    let unsortedCountOfChars = [];

    for (char of str) {
        if (validChars.includes(char)) {
            if (countOfChars.hasOwnProperty(char)) {
                countOfChars[char]++;
            } else {
                countOfChars[char] = 1;
            }
        }
    }

    // Build array of arrays of characters and their count
    for (char in countOfChars) {
        unsortedCountOfChars.push([char, countOfChars[char]]);
    }

    // Sort character count by most chars, then alpahbetically into an array
    sortedCountOfChars = unsortedCountOfChars.sort(function(a,b) {
        if (a[1] >  b[1]) { return -1  }
        if (a[1] <  b[1]) { return 1 }
        if (a[1] == b[1]) {
            if (a[0] >  b[0]) { return 1  }
            if (a[0] <  b[0]) { return -1 }
            if (a[0] == b[0]) { return 0  }
        }
    })

    return sortedCountOfChars;

};
// console.log(charCount("an apple a day will keep the doctor away"))