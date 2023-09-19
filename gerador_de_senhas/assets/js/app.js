/* 
    elements selection 
*/
const generated_password_element = document.querySelector('[data_generated_password]');
const generate_password_button = document.querySelector('[data_generate_password]');

/*
    new features
*/
const open_close_generate_button = document.querySelector('[data_open_generate_password]');
const generate_password_container = document.querySelector('[data_generate_options]');
const copy_password_button = document.querySelector('[data_copy_password]');
const letters_input = document.querySelector('[data_letters]');
const numbers_input = document.querySelector('[data_numbers]');
const symbols_input = document.querySelector('[data_symbols]');
const length_input = document.querySelector('[data_length]');

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
    const password_length = +length_input.value;
    const generators = [];

    if (letters_input.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase);
    };

    if (numbers_input.checked) {
        generators.push(getNumber);
    };

    if (symbols_input.checked) {
        generators.push(getSymbol);
    };

    if (generators.length === 0) {
        return;
    };

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
// 
generate_password_button.addEventListener('click', () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});

// 
open_close_generate_button.addEventListener('click', () => {
    generate_password_container.classList.toggle('hide');
});

// 
copy_password_button.addEventListener('click', (event)=>{
    event.preventDefault();
    const copied_password = generated_password_element.querySelector('h4').innerText;

    navigator.clipboard.writeText(copied_password).then(() => {
        copy_password_button.innerHTML = 'Senha copiada com sucesso!';
    });

    setTimeout(() => {
        copy_password_button.innerText = 'Copiar';
    },2000);
});