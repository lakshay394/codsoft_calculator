
let textarea = document.getElementById("input_number");

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const dot = document.getElementById('.');
const perc = document.getElementById('%');
const del = document.getElementById('del');
const lbr = document.getElementById('(');
const plus = document.getElementById('+');
const sub = document.getElementById('-');
const product = document.getElementById('*');
const div = document.getElementById('/');
const equal = document.getElementById('=');
const clear = document.getElementById('clr');




// variable and function for input in display
let entry = "";


function onClickButton(event) {
    entry = textarea.value;
    entry += this.id;
    textarea.value = entry;
    entry = textarea.value;
}

function onClickEqual() {
    entry = textarea.value;
    // alert(eval(entry))
    let ans = eval(entry);
    entry = ans;
    textarea.value = ans
}

function onClear() {
    textarea.value = '';
    entry = '';
}

function oneCharDown() {
    entry = textarea.value;
    entry = entry.slice(0, -1);
    textarea.value = entry;
}



document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        onClickEqual();
    }
});

document.addEventListener("keydown", (e) => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == e.key) {
            entry = textarea.value;
            entry += e.key;
            textarea.value = entry;
        }
    }
});



one.addEventListener('click', onClickButton);
two.addEventListener('click', onClickButton);
three.addEventListener('click', onClickButton);
four.addEventListener('click', onClickButton);
five.addEventListener('click', onClickButton);
six.addEventListener('click', onClickButton);
seven.addEventListener('click', onClickButton);
eight.addEventListener('click', onClickButton);
nine.addEventListener('click', onClickButton);
zero.addEventListener('click', onClickButton);
dot.addEventListener('click', onClickButton);
perc.addEventListener('click', onClickButton);
lbr.addEventListener('click', onClickButton);
plus.addEventListener('click', onClickButton);
sub.addEventListener('click', onClickButton);
product.addEventListener('click', onClickButton);
div.addEventListener('click', onClickButton);
equal.addEventListener('click', onClickEqual);
clear.addEventListener('click', onClear);
del.addEventListener('click', oneCharDown);


