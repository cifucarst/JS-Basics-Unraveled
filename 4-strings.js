// String creation
const firstOption = 'single quotes';
const secondOption = "single quotes";
const thirdOption = `single quotes`;

// 1. Concatenation: option +
const address = '123 Fake Street';
const city = 'Springfield';
const completeAddress = 'My complete address is ' + address + city;
console.log(completeAddress);

const addressWithSpace = 'My complete address is ' + address + ' ' + city;
console.log(addressWithSpace);

// 2. Concatenation - template literal
const name = "Jules";
const country = '🇨🇴';
const introduction = `Hello, I'm ${name} from ${country}`;
console.log(introduction);

// 3. Concatenation: join()
const firstPart = 'I love';
const secondPart = 'the people of';
const thirdPart = '🇲🇽';
const thought = [firstPart, secondPart, thirdPart];
console.log(thought.join('🧸'));

// 3. Concatenation: concat()
const hobby1 = 'running';
const hobby2 = 'reading';
const hobby3 = 'studying';
const hobbies = 'My hobbies are: '.concat(hobby1, ', ', hobby2, ', ', hobby3, ', ');
console.log(hobbies);

// Escape characters
// const whatDoIDo = 'I'm a software Engineer';

// 1. Alternative escape
const alternativeEscape = "I'm a Software Engineer";

// 2. Backslash
const backslashEscape = 'I\'m a Software Engineer';

// 3. Template literals
const backtickEscape = `I'm a Software Engineer`;

// Writing long strings
/*
Roses are red,
Violets are blue,
Unexpected character,
At line 86.
*/

const poem = 'Roses are red,\n' +
    'Violets are blue,\n' +
    'Unexpected character,\n' +
    'At line 86.\n';
console.log(poem);

const poem2 = 'Roses are red,\n\
Violets are blue,\n\
Unexpected character,\n\
At line 86.';
console.log(poem2);

const poem3 = `Roses are red,
Violets are blue,
Unexpected character,
At line 86.`;
console.log(poem3);

// Primitive strings
const primitiveString = 'I am a primitive string';
console.log(typeof primitiveString);

const alsoPrimitiveString = String('I am a primitive string');
console.log(typeof alsoPrimitiveString);

// Object type string
const objectString = new String('I am an object string');
console.log(typeof objectString);

// Accessing characters
const greeting = 'Hello, how are you?';
console.log(greeting[2]);
console.log(greeting.charAt(2));

// Knowing the index
console.log(greeting.indexOf('o'));
console.log(greeting.indexOf('how'));

// Finding the index of the last 'o'
console.log(greeting.lastIndexOf('o'));

// Finding letters within the string
console.log(greeting.slice(3, 5));

// String length
console.log(greeting.length);

// Convert to uppercase
console.log(greeting.toUpperCase());
// Convert to lowercase
console.log(greeting.toLowerCase());

// Splitting a string into an array
const greetingSplit = greeting.split(' ');
console.log(greeting.toUpperCase());
console.log(greetingSplit);
console.log(greetingSplit[1]);

// Removing spaces
const spacedGreeting = ' Hello World ';
const trimmedGreeting = spacedGreeting.trim();
console.log(trimmedGreeting);

// Replacing words in the string
const originalGreeting = 'Hello world';
const newGreeting = originalGreeting.replace('world', '🌘');
console.log(newGreeting);
