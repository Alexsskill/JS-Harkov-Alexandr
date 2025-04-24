const blocksContainer = document.getElementById('blocksContainer');
const colorInput = document.getElementById('colorInput');

const numberOfBlocks = 5;

for (let i = 0; i < numberOfBlocks; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    blocksContainer.appendChild(block);
}

blocksContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('block')) {
        const selectedColor = colorInput.value;
        event.target.style.backgroundColor = selectedColor;
    }
});

///////////////////////////////////////////////////////////

function validatePassword() {
    let password = document.getElementById("passwordInput").value;

    let errorMessageElement = document.getElementById("errorMessage");

    if (password.length <= 8) {
        errorMessageElement.textContent = "Некорректный пароль: длина должна быть больше 8 символов.";
        return;
    }

    let hasLetter = /[a-zA-Z]/.test(password);
    if (!hasLetter) {
        errorMessageElement.textContent = "Некорректный пароль: должен содержать хотя бы одну букву латинского алфавита.";
        return;
    }

    let hasDigit = /[0-9]/.test(password);
    if (!hasDigit) {
        errorMessageElement.textContent = "Некорректный пароль: должен содержать хотя бы одну цифру.";
        return;
    }

    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialChar) {
        errorMessageElement.textContent = "Некорректный пароль: должен содержать хотя бы один специальный символ.";
        return;
    }

    errorMessageElement.textContent = "";
    alert("Пароль корректный!");
}