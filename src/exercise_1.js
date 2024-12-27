/**
 * Write a function to check if a string is empty
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
function isStringEmpty(text) {
  if (text === undefined) {
    return "text must be defined";
  } else if (text.trim().length > 0) {
    return false;
  } else {
    return true;
  }
}

/**
 * Write a function to truncate text
 * @param {String} text
 * @param {Number} numberOfCharacters
 * @returns {String}
 * @example
 * truncateString('Hello World', 2); => 'He'
 * truncateString('Hello world'); => throws error "Please specify number of characters to extract"
 * truncateString(''); => throws error "text must have at least one character"
 */
function truncateString(text, numberOfCharacters) {
  if (text === undefined) {
    return "text must be defined";
  }

  if (text === '') {
    return "text must have at least one character";
  }

  if (numberOfCharacters === undefined) {
    return "Please specify number of characters to extract";
  } else if (numberOfCharacters < 0) {
    return "The value indicating how many characters to extract must be a natural number";
  }

  // first solution
  let truncatedText = ''
  for (let i = 0; i < numberOfCharacters; i++ ) {
    truncatedText += text[i];
  }
  return truncatedText;

  // second solution
  // return text.slice(0, numberOfCharacters);
}

/**
 * Write a function to create social media post hash tag
 * @param {String} text
 * @returns {String}
 * @example
 * createHashTag('Hello World'); => '#helloWorld'
 * createHashTag('i love javascript'); => '#iLoveJavascript'
 * createHashTag(''); => throws error "Text should have at least three characters"
 * createHashTag(); => throws error "Text should have at least three characters"
 * createHashTag('   '); => throws error "Text should have at least three characters"
 */
function createHashTag(text) {
  if (text === undefined || text.trim() === '') {
    return "Text should have at least three characters";
  }

  const textAsArray = text.split(" ");
  textAsArray[0] = textAsArray[0].charAt(0).toLowerCase() + textAsArray[0].slice(1, textAsArray[0].length);

  const textAsArrayLength = textAsArray.length;
  for (let i = 1; i < textAsArrayLength; i++) {
    textAsArray[i] = textAsArray[i].charAt(0).toUpperCase() + textAsArray[i].slice(1, textAsArray[i].length);
  }

  text = textAsArray.join('');
  return '#' + text;
}

/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber
 * @returns {String}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */
function formatPhoneNumber(phoneNumber) {
  if (phoneNumber === undefined || typeof phoneNumber !== 'number') {
    // return "Phone number must be either 9 or 12 characters long";
    throw "Phone number must be either 9 or 12 characters long";
  } else if (phoneNumber.toString().length > 12 || phoneNumber.toString().length < 9) {
    // return "Phone number must be either 9 or 12 characters long";
    throw "Phone number must be either 9 or 12 characters long";
  }

  phoneNumber = phoneNumber.toString();
  if (phoneNumber.length === 12) {
    return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 10)} ${phoneNumber.slice(10, 12)}`
  } else if (phoneNumber.length === 9) {
    return `+998 ${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 9)}`
  } else {
    // return "Phone number must be either 9 or 12 characters long";
    throw "Phone number must be either 9 or 12 characters long";
  }
}

/**
 * Write a function that transforms text to different cases
 * @param {String} text
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 *
 */
function changeTextCase(text, caseName) {
  let textAsArray = text.split(" ");
  let textAsArrayLength = textAsArray.length;

  if (text === undefined) {
    return "A value must be entered for the text parameter!";
  }

  if (caseName === undefined) {
    return "A value must be entered for the caseName parameter!";
  }

  if (caseName === 'camel') {
    textAsArray[0] = textAsArray[0].charAt(0).toLowerCase() + textAsArray[0].slice(1, textAsArray[0].length);
    for (let i = 1; i < textAsArrayLength; i++ ) {
      textAsArray[i] = textAsArray[i].charAt(0).toUpperCase() + textAsArray[i].slice(1, textAsArray[i].length);
    }
    text = textAsArray.join('');
    return text;
  } else if (caseName === 'kebab') {
    textAsArray[0] = textAsArray[0].charAt(0).toLowerCase() + textAsArray[0].slice(1, textAsArray[0].length);
    for (let i = 1; i < textAsArrayLength; i++ ) {
      textAsArray[i] = textAsArray[i].charAt(0).toLowerCase() + textAsArray[i].slice(1, textAsArray[i].length);
    }
    text = textAsArray.join('-');
    return text;
  } else if (caseName === 'snake') {
    textAsArray[0] = textAsArray[0].charAt(0).toLowerCase() + textAsArray[0].slice(1, textAsArray[0].length);
    for (let i = 1; i < textAsArrayLength; i++ ) {
      textAsArray[i] = textAsArray[i].charAt(0).toLowerCase() + textAsArray[i].slice(1, textAsArray[i].length);
    }
    text = textAsArray.join('_');
    return text;
  } else if (caseName === 'pascal') {
    textAsArray[0] = textAsArray[0].charAt(0).toUpperCase() + textAsArray[0].slice(1, textAsArray[0].length);
    for (let i = 1; i < textAsArrayLength; i++ ) {
      textAsArray[i] = textAsArray[i].charAt(0).toUpperCase() + textAsArray[i].slice(1, textAsArray[i].length);
    }
    text = textAsArray.join('');
    return text;
  } else {
    return "The value of the caseName parameter can only be 'camel', 'kebab', 'snake', or 'pascal'.";
  }
}

/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 * @example
 * const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
 * const replacedWord = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(bigText, replacedWord, replacementWord); =>
 * 'Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.'
 */
function replaceWordInText(text, word, replacement) {
  if (text === undefined || word === undefined || replacement ===undefined) {
    return "The values ​​of the text, word and replacement parameters must be provided..."
  }

  text = text.replaceAll(word, replacement);
  return text;
}

/**
 * Write a function to extract price in number format from the text
 * @param {String} text
 * @returns {Number}
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
function extractPriceFromText(text) {
  if (text === undefined) {
    return "For the function to work properly, you must provide a value for the text parameter..."
  }

  let priceAsNumber = undefined;
  let textAsArray = text.split(" ");
  let textAsArrayLength = textAsArray.length;
  for (let i = 0; i < textAsArrayLength; i++) {
    if (textAsArray[i].charAt(0) === '$' ) {
      priceAsNumber = textAsArray[i].slice(1, textAsArray[i].length);
      break;
    }
  }
  return Number(priceAsNumber) || 'No matching price was found';
}

module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber
}