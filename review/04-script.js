/*
Operations
*/

let s1 = "Hello";
let s2 = "Python";

// Concatenation
console.log(s1 + ", " + s2 + "!");

// Repetition
console.log(s1.repeat(3));

// Indexing
console.log(s1[0] + s1[1] + s1[2] + s1[3]);

// Length
console.log(s2.length);

// Slicing
console.log(s2.slice(2, 6));
console.log(s2.slice(2));
console.log(s2.slice(0, 2));
console.log(s2.slice(0, 2));

// Search
console.log(s1.includes("a"));
console.log(s1.includes("i"));

// Replacement
console.log(s1.replace("o", "a"));

// Division
console.log(s2.split("t"));

// Uppercase, lowercase, and title case
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log("brais moure".charAt(0).toUpperCase() + "brais moure".slice(1));
console.log("brais moure".charAt(0).toUpperCase() + "brais moure".slice(1).toLowerCase());

// Removing spaces
s1 = "Hello";
s2 = "Python";

// Concatenation
console.log(s1 + ", " + s2 + "!");

// Repetition
console.log(s1.repeat(3));

// Indexing
console.log(s1[0] + s1[1] + s1[2] + s1[3]); // Beginning and end
console.log(" brais moure ".trim());

// Search at the beginning and end
console.log(s1.startsWith("Ho"));
console.log(s1.startsWith("Py"));
console.log(s1.endsWith("la"));
console.log(s1.endsWith("thon"));

let s3 = "Brais Moure @mouredev";

// Position search
console.log(s3.indexOf("moure"));
console.log(s3.indexOf("Moure"));
console.log(s3.indexOf("M"));
console.log(s3.toLowerCase().indexOf("m"));

// Occurrence search
console.log(s3.toLowerCase().split("m").length - 1);

// Formatting
console.log(`Greeting: ${s1}, language: ${s2}!`);

// Interpolation
console.log(`Greeting: ${s1}, language: ${s2}!`);

// Transforming into an array of characters
console.log(Array.from(s3));

// Transforming array into string
let l1 = [s1, ", ", s2, "!"];
console.log(l1.join(""));

// Numeric transformations
let s4 = "123456";
s4 = parseInt(s4);
console.log(s4);

let s5 = "123456.123";
s5 = parseFloat(s5);
console.log(s5);

// Various checks
s4 = "123456";
console.log(s1.match(/^[0-9a-zA-Z]+$/));
console.log(s1.match(/^[a-zA-Z]+$/));
console.log(s4.match(/^[a-zA-Z]+$/));
console.log(s4.match(/^[0-9]+$/));

/*
Extra
*/

function check(word1, word2) {

    // Palindromes
    console.log(`Is ${word1} a palindrome?: ${word1 === word1.split("").reverse().join("")}`);
    console.log(`Is ${word2} a palindrome?: ${word2 === word2.split("").reverse().join("")}`);

    // Anagrams
    console.log(`Is ${word1} an anagram of ${word2}?: ${word1.split("").sort().join("") === word2.split("").sort().join("")}`);

    // Isograms
    function isogram(word) {
        let wordDict = {};
        for (let character of word) {
            wordDict[character] = (wordDict[character] || 0) + 1;
        }
        let isogram = true;
        let values = Object.values(wordDict);
        let isogramLen = values[0];
        for (let wordCount of values) {
            if (wordCount !== isogramLen) {
                isogram = false;
                break;
            }
        }
        return isogram;
    }

    console.log(`Is ${word1} an isogram?: ${isogram(word1)}`);
    console.log(`Is ${word2} an isogram?: ${isogram(word2)}`);
}

check("radar", "pythonpythonpythonpython");
// check("love", "rome");