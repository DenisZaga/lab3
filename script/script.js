   
   
    document.getElementById('button').addEventListener('click', function () {
            var massInput = document.getElementById('mass').value;
            var valueInput = document.getElementById('value').value;
            var array = massInput.split(',').map(function (num) {
                return parseInt(num.trim(), 10);
            });
            var searchValue = parseInt(valueInput, 10);

            linearSearch(array, searchValue);
        });

        function linearSearch(array, searchValue) {
            var output = document.getElementById('output');
            output.innerHTML = '';
            var foundIndexes = [];

            for (var i = 0; i < array.length; i++) {
                var div = document.createElement('div');

                array.forEach(function (num, index) {
                    var span = document.createElement('span');
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

            var result = document.createElement('div');
            if (foundIndexes.length > 0) {
                result.textContent = 'Значення ' + searchValue + ' знайдено під порядковим номером: ' + foundIndexes.join(', ') + '.';
            } else {
                result.textContent = 'Значення ' + searchValue + ' не знайдено у масиві';
            }

            output.appendChild(result);
        }