const element = document.querySelector('button');
console.log(element);

const element2 = document.querySelector('.bee');
element2.textContent = '9b done!';

function nameInput() {
    const inputElement = document.querySelector('.name');
    const text= inputElement.value;
    const nameElement = document.querySelector('.nameAnswer');
    nameElement.textContent = `Your name is:${text}` 
}



