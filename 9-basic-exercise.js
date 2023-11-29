//social media profile

//1. user information
const userName = 'codingAdventurer';
const fullName = 'Jhon Doe';
const age = 25;
const isStudent = true;

//2. Address
const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'codingland',
    zipCode: 54321,
};

//3.hobbies
const hobbies = ['coding','reading','gaming'];

//4. Generating personalized bio
const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adveturer!
`
//5. print the user profile and bio
console.log(personalizedBio)