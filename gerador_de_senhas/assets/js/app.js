/* 
    elements selection 
*/
const generated_password_element = document.querySelector('[data_generated_password]');
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

// 
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = '';
    const password_length = 10;

    const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

    for (i = 0; i < password_length; i = i + generators.length) {
        generators.forEach(() => {
            const random_value = generators[Math.floor(Math.random() * generators.length)]();
            password += random_value;
        })
    };

    password = password.slice(0, password_length);

    generated_password_element.style.display = 'block';
    generated_password_element.querySelector('h4').innerText = password;
};

/* 
    events 
*/
generate_password_button.addEventListener('click', () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});