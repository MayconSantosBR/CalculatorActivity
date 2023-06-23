function calculateImc(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const imc  = (weight / (height * height));

    alert(imc);
}