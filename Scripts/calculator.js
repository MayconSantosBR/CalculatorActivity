function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);

    if (result !== undefined) {
        display.value = result;
    }
}

function lastCharacter(str) {
    if (str.length === 0) {
        return null;
    }

    return str.charAt(str.length - 1);
}

function removeLastCharFromDisplay(){
    const value = document.getElementById("display").value;
    document.getElementById("display").value = value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const permitedChars = ['/', '(', ')', '*', '-', '+', '.']

    const key = event.key;
    if (!isNaN(key)) {
        appendToDisplay(key);
    }

    permitedChars.forEach(element => { 
        if (key == element) {
            const displayValue = document.getElementById('display').value;
            if (!isNaN(String(lastCharacter(displayValue)) || lastCharacter(String(displayValue)) != null))
                appendToDisplay(key);
            else if (key == '(' || key == ')' || lastCharacter(String(displayValue)) == '(' || lastCharacter(String(displayValue)) == ')')
                appendToDisplay(key);
            else
                alert("Necessário informar um número primeiro!");
        }
    });

    if (key == 'Enter'){
        calculate();
    }else if (key == 'Backspace'){
        removeLastCharFromDisplay();
    }
});
