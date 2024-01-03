function calculateArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (validateInput(base) && validateInput(height)) {
        var area = 0.5 * base * height;
        displayResult('areaResult', 'Luas Segitiga: ' + area.toFixed(2) + ' satuan luas');
    }
}

function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (validateInput(sideA) && validateInput(sideB) && validateInput(sideC)) {
        var perimeter = sideA + sideB + sideC;
        displayResult('perimeterResult', 'Keliling Segitiga: ' + perimeter.toFixed(2) + ' satuan panjang');
    }
}

function validateInput(value) {
    if (isNaN(value) || value <= 0) {
        alert('Please enter a valid positive number.');
        return false;
    }

    return true;
}

function displayResult(resultElementId, resultText) {
    var resultElement = document.getElementById(resultElementId);
    resultElement.innerHTML = '<h3>Hasil Perhitungan:</h3>' +
                              '<p>' + resultText + '</p>';
}

function resetAreaForm() {
    document.getElementById('areaForm').reset();
    document.getElementById('areaResult').innerHTML = '';
}

function resetPerimeterForm() {
    document.getElementById('perimeterForm').reset();
    document.getElementById('perimeterResult').innerHTML = '';
}
