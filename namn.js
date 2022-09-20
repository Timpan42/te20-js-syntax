const input = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');

button.addEventListener('click', () =>{ 
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    ul.appendChild(li)

    console.log(input);
    const namn = input.value;
    var length = namn.length-1;
    var print = '';

    let message = document.createElement('li');

    for(let i = 0; i < namn.length; i++){
        console.log(namn[length]);
        print = namn[length]
        message.textContent = `${print}`; 
        length = length-1;

    }
    messageBox.appendChild(ul)

});


