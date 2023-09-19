/* 
    elements selection 
*/
const generate_password_element = document.querySelector('[data_generated_password]');
const generate_password_button = document.querySelector('[data_generate_password]');

/* 
    functions 
*/
// 
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// 
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// 
const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

// 
const getSymbol = () => {
    const symbols = '[]{}()"!@#$%¨&*-_=+§ªº~^/?;:.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(getSymbol());

/* 
    events 
*/
generate_password_button.addEventListener('click', () => {
    console.log('teste');
});