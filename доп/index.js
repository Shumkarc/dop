document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        console.log('Начало работы');

        setTimeout(function() {
            console.log('Прошла 1 секунда');
        }, 1000);

        let intervalId = setInterval(function() {
            console.log('Прошло 2 секунды');
        }, 2000);

        setTimeout(function() {
            clearInterval(intervalId);
            console.log('Прошло 10 секунд');
        }, 10000);
    });
});