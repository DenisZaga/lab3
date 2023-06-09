document.getElementById('button').addEventListener('click', function () {
    let massInput = document.getElementById('mass').value;
    let valueInput = document.getElementById('value').value;
    let array = massInput.split(',').map(function (num) {
        return parseInt(num.trim(), 10);
    });
    let searchValue = parseInt(valueInput, 10);

    linearSearch(array, searchValue);
});

function linearSearch(array, searchValue) {
    let output = document.getElementById('output');
    output.innerHTML = '';
    let foundIndexes = [];

    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div');

        array.forEach(function (num, index) {
            let span = document.createElement('span');
            span.textContent = num + ' ';

            if (index === i) {
                span.classList.add('active');
            }

            div.appendChild(span);
        });

        if (array[i] === searchValue) {
            foundIndexes.push(i + 1);
        }

        output.appendChild(div);
    }

    let result = document.createElement('div');
    if (foundIndexes.length > 0) {
        result.textContent = 'Значення ' + searchValue + ' знайдено під порядковим номером: ' + foundIndexes.join(', ') + '.';
    } else {
        result.textContent = 'Значення ' + searchValue + ' не знайдено у масиві';
    }

    output.appendChild(result);
}
