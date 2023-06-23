document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value
    };

    var serializedJson = JSON.stringify(formData, null, 2);

    document.getElementById('json').textContent = serializedJson;
});