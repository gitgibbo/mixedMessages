// Hello, thanks for looking at this portfolio project!
// This is a haiku generator...


// I Will store the components of the message as an object to keep the code neat and readable.
const messageObj = {
    opening: ['hello', 'hiya', 'greetings'],
    middle: ['sunshine', 'beautiful'],
    closing: ['you are pretty', 'i love you'],
};

// This is the function which concats randomly picked elements out of the arrays of a message obj
const messageBuilder = obj => {
    let msg = `${obj.opening[Math.floor(Math.random()*obj.opening.length)]}\n${obj.middle[Math.floor(Math.random()*obj.middle.length)]},\n${obj.closing[Math.floor(Math.random()*obj.closing.length)]}.`;
    return msg;
}

console.log(messageBuilder(messageObj));